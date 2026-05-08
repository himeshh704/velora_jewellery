
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Read .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const envFile = fs.readFileSync(envPath, 'utf-8');
const env = Object.fromEntries(
  envFile.split('\n').filter(line => line && !line.startsWith('#')).map(line => {
    const [key, ...value] = line.split('=');
    return [key.trim(), value.join('=').trim().replace(/^"(.*)"$/, '$1')];
  })
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: env.SANITY_API_TOKEN,
  useCdn: false,
});

const products = [
  {
    id: "roseline-ring",
    name: "The Roseline Ring",
    category: "Rings",
    price: 1250,
    description: "A timeless masterpiece featuring a delicate rose gold band set with a brilliant-cut center diamond.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544733005-52317135e807?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "zoe-earrings",
    name: "The Zoe Earrings",
    category: "Earrings",
    price: 850,
    description: "Elegant drop earrings that capture the light with every movement.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "hibiscus-ring",
    name: "The Hibiscus Ring II",
    category: "Rings",
    price: 2100,
    description: "Bold and intricate, the Hibiscus Ring is a statement of handcrafted luxury.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-0e7320b97d33?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "chubby-hoops",
    name: "The Chubby Hoops",
    category: "Earrings",
    price: 450,
    description: "Modern, minimalist hoops designed for effortless daily elegance.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "eternal-bracelet",
    name: "Eternal Gold Bracelet",
    category: "Bracelets",
    price: 3200,
    description: "A solid gold bracelet that symbolizes timeless connection and strength.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    id: "luna-necklace",
    name: "Luna Pearl Necklace",
    category: "Necklaces",
    price: 1800,
    description: "A celestial-inspired necklace featuring a single, luminous south sea pearl.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
    ],
  }
];

async function uploadImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload('image', buffer, {
      filename: url.split('/').pop(),
    });
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', url, error);
    return null;
  }
}

async function seed() {
  console.log('Seeding categories...');
  const categoryIds = {};
  const categories = ["Rings", "Earrings", "Bracelets", "Necklaces"];
  
  for (const cat of categories) {
    const doc = await client.createIfNotExists({
      _type: 'category',
      _id: `cat-${cat.toLowerCase()}`,
      title: cat,
    });
    categoryIds[cat] = doc._id;
  }

  console.log('Seeding products...');
  for (const product of products) {
    const imageRefs = await Promise.all(product.images.map(uploadImage));
    const validImageRefs = imageRefs.filter(ref => ref !== null);

    await client.createOrReplace({
      _type: 'product',
      _id: product.id,
      name: product.name,
      slug: { _type: 'slug', current: product.id },
      price: product.price,
      description: product.description,
      category: { _type: 'reference', _ref: categoryIds[product.category] },
      images: validImageRefs.map(ref => ({
        _type: 'image',
        _key: Math.random().toString(36).substring(7),
        asset: { _type: 'reference', _ref: ref }
      })),
      featured: true,
      isFeaturedSection: product.id === "roseline-ring",
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log('Seeding homepage...');
  await client.createOrReplace({
    _type: 'home',
    _id: 'home',
    title: 'Pure Craftsmanship',
    heroSubtitle: 'EST. 1994',
    heroTitleItalic: 'Timeless Elegance',
    featuredSectionTitle: 'The Roseline Collection',
    featuredSectionDescription: 'Experience the delicate balance of rose gold and brilliant diamonds in our signature piece.',
    aboutTitle: 'Our Heritage',
    aboutContent: [
      {
        _key: 'block1',
        _type: 'block',
        children: [
          {
            _key: 'span1',
            _type: 'span',
            text: 'Since 1994, Veloura has been dedicated to the art of fine jewellery. Each piece is a testament to our commitment to quality, craftsmanship, and the beauty of timeless design.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
  });

  console.log('Done!');
}

seed().catch(console.error);

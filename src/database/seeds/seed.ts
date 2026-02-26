import dataSource from '../../../typeorm.config';
import { Product } from '../../products/product.entity';
import { RawMaterial } from '../../raw-materials/raw-material.entity';
import { ProductRawMaterial } from '../../product-raw-materials/product-raw-material.entity';

async function seed() {
  await dataSource.initialize();

  const rawMaterialRepo = dataSource.getRepository(RawMaterial);
  const productRepo = dataSource.getRepository(Product);
  const productRawMaterialRepo = dataSource.getRepository(ProductRawMaterial);

  await dataSource.transaction(async (manager) => {
    console.log('Seeding raw materials...');

    const rawMaterialsData = [
      'Rice',
      'Beans',
      'Pasta',
      'Ground Beef',
      'Beef Steak',
      'Chicken Breast',
      'Tomato Sauce',
      'Mozzarella Cheese',
      'Ham',
      'Potato',
      'Lettuce',
      'Tomato',
      'Onion',
      'Garlic',
      'Cream',
      'Egg',
      'Bread',
      'Oil',
      'Salt',
      'Black Pepper',
    ];

    const rawMaterialsMap: Record<string, RawMaterial> = {};

    for (const name of rawMaterialsData) {
      let material = await rawMaterialRepo.findOne({ where: { name } });

      if (!material) {
        material = rawMaterialRepo.create({
          name,
          stockQuantity: 100,
        });
        await rawMaterialRepo.save(material);
      }

      rawMaterialsMap[name] = material;
    }

    console.log('Seeding products...');

    const productsData = [
      { name: 'Spaghetti Bolognese', value: 35 },
      { name: 'Lasagna', value: 40 },
      { name: 'Grilled Steak with Rice and Beans', value: 45 },
      { name: 'Chicken Stroganoff', value: 38 },
      { name: 'Beef Stroganoff', value: 42 },
      { name: 'Chicken Parmesan', value: 44 },
      { name: 'Beef Burger with Fries', value: 36 },
      { name: 'Grilled Chicken with Salad', value: 34 },
      { name: 'Omelette with Cheese', value: 28 },
      { name: 'Rice and Beans (Vegetarian Plate)', value: 25 },
    ];

    const productMap: Record<string, Product> = {};

    for (const productData of productsData) {
      let product = await productRepo.findOne({
        where: { name: productData.name },
      });

      if (!product) {
        product = productRepo.create(productData);
        await productRepo.save(product);
      }

      productMap[productData.name] = product;
    }

    console.log('Seeding product recipes...');

    const recipes = [
      {
        product: 'Spaghetti Bolognese',
        ingredients: [
          'Pasta',
          'Ground Beef',
          'Tomato Sauce',
          'Garlic',
          'Onion',
          'Oil',
          'Salt',
        ],
      },
      {
        product: 'Lasagna',
        ingredients: [
          'Pasta',
          'Ground Beef',
          'Tomato Sauce',
          'Mozzarella Cheese',
          'Ham',
          'Cream',
          'Garlic',
          'Onion',
          'Salt',
        ],
      },
      {
        product: 'Grilled Steak with Rice and Beans',
        ingredients: ['Beef Steak', 'Rice', 'Beans', 'Garlic', 'Oil', 'Salt'],
      },
      {
        product: 'Chicken Stroganoff',
        ingredients: [
          'Chicken Breast',
          'Cream',
          'Tomato Sauce',
          'Rice',
          'Garlic',
          'Onion',
          'Salt',
        ],
      },
      {
        product: 'Beef Stroganoff',
        ingredients: [
          'Ground Beef',
          'Cream',
          'Tomato Sauce',
          'Rice',
          'Garlic',
          'Onion',
          'Salt',
        ],
      },
      {
        product: 'Chicken Parmesan',
        ingredients: [
          'Chicken Breast',
          'Mozzarella Cheese',
          'Tomato Sauce',
          'Rice',
          'Garlic',
          'Oil',
          'Salt',
        ],
      },
      {
        product: 'Beef Burger with Fries',
        ingredients: [
          'Ground Beef',
          'Bread',
          'Mozzarella Cheese',
          'Lettuce',
          'Tomato',
          'Potato',
          'Salt',
        ],
      },
      {
        product: 'Grilled Chicken with Salad',
        ingredients: [
          'Chicken Breast',
          'Lettuce',
          'Tomato',
          'Onion',
          'Oil',
          'Salt',
        ],
      },
      {
        product: 'Omelette with Cheese',
        ingredients: ['Egg', 'Mozzarella Cheese', 'Onion', 'Salt', 'Oil'],
      },
      {
        product: 'Rice and Beans (Vegetarian Plate)',
        ingredients: ['Rice', 'Beans', 'Garlic', 'Oil', 'Salt'],
      },
    ];

    for (const recipe of recipes) {
      const product = productMap[recipe.product];

      for (const ingredientName of recipe.ingredients) {
        const rawMaterial = rawMaterialsMap[ingredientName];

        const exists = await productRawMaterialRepo.findOne({
          where: {
            product: { id: product.id },
            rawMaterial: { id: rawMaterial.id },
          },
          relations: ['product', 'rawMaterial'],
        });

        if (!exists) {
          const relation = productRawMaterialRepo.create({
            product,
            rawMaterial,
            quantityRequired: 1,
          });

          await productRawMaterialRepo.save(relation);
        }
      }
    }
  });

  console.log('🌱 Seed completed successfully!');
  process.exit();
}

seed();

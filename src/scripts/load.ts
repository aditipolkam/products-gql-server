import { DB_URL } from '../config/constants';
import mongoose from 'mongoose';
import Product from '../models/product';
import fs from 'fs';
import csvParser from 'csv-parser';
import path from 'path';

mongoose.connect(DB_URL);

type ProductType = {
  productName: string;
  brand: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
  quantity: number;
  category: string;
  subCategory: string;
  absoluteUrl: string;
};

const loadDataset = (filePath: string): Promise<ProductType[]> => {
  const data: ProductType[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        data.push({
          productName: row.ProductName,
          brand: row.Brand,
          price: parseFloat(row.Price),
          discountPrice: parseFloat(row.DiscountPrice),
          imageUrl: row.Image_Url,
          quantity: parseInt(row.Quantity, 10),
          category: row.Category,
          subCategory: row.SubCategory,
          absoluteUrl: row.Absolute_Url,
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve(data);
      })
      .on('error', reject);
  });
};

const seedDatabase = async (dataset: ProductType[]) => {
  try {
    await Product.insertMany(dataset);
    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

(async () => {
  const dataset = await loadDataset(path.join(__dirname, '../../src/data/BigBasket.csv'));
  await seedDatabase(dataset);
})();

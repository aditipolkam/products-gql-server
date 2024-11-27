import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  price: Number,
  discountPrice: Number,
  imageUrl: String,
  quantity: String,
  category: String,
  subCategory: String,
  absoluteUrl: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;

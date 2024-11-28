# GraphQL Apollo Server with Node.js and MongoDB

This is a backend project built with **Node.js**, **Apollo Server**, and **MongoDB**. It demonstrates the use of **GraphQL** for querying and mutating product data stored in a MongoDB database. The project features a simple API for managing product data with features like searching products by category or fetching individual products by their absolute URL.

## Features

- **GraphQL API**: Queries and mutations for fetching product data.
- **MongoDB Integration**: Stores product data and allows CRUD operations.
- **Apollo Server**: A powerful GraphQL server for Node.js.
- **Type Safety**: The project is set up using TypeScript for type safety and maintainability.

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x)
- **MongoDB** (either local or cloud-based like MongoDB Atlas)
- **TypeScript** (optional, but recommended for type safety)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aditipolkam/products-gql-server
   cd products-gql-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your **MongoDB** connection in the `.env` file (or in the code itself) with the following environment variable:
   ```bash
   DB_URL=mongodb://localhost:27017/your-database-name
   ```

### Running the Project

1. Compile TypeScript files (if applicable):

   ```bash
   tsc
   ```

2. Run the server:

   ```bash
   npm start
   ```

3. Open **Apollo GraphQL Playground** or use a tool like Postman to interact with your GraphQL API at `http://localhost:4000`.

### GraphQL Queries and Mutations

Here are some example queries you can run in the GraphQL Playground:

1. **Get all products**:

   ```graphql
   query {
     getProducts {
       productName
       brand
       price
       discountPrice
       imageUrl
       quantity
       category
       subCategory
       absoluteUrl
     }
   }
   ```

2. **Get products by category**:

   ```graphql
   query {
     getProductByCategory(category: "Fruits & Vegetables") {
       productName
       brand
       price
       quantity
     }
   }
   ```

3. **Get a product by absolute URL**:
   ```graphql
   query {
     getProductById(absoluteUrl: "https://www.bigbasket.com/pd/40075537/fresho-onion-2-kg/") {
       productName
       brand
       price
       discountPrice
     }
   }
   ```

## Project Structure

- **src/**: Main application code

  - **models/**: Mongoose models for MongoDB
    - `product.ts`: Mongoose schema and model for products
  - **resolvers/**: GraphQL resolvers for queries and mutations
    - `productResolvers.ts`: Resolvers to fetch products and interact with the database
  - **schemas/**: GraphQL schema definitions
    - `typeDefs.ts`: Type definitions for the GraphQL API

- **.env**: Environment variables for the database connection

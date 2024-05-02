import mongoose from "mongoose";
import dotenv from "dotenv";
import Users from "./data/users.js";
import Products from "./data/products.js";
import Product from "./models/productmodels.js";
import User from "./models/usermodels.js";
import Order from "./models/ordermodels.js";
import ConnectDB from "./config/db.js";
import colors from "colors";

dotenv.config(); //initialize env variables so that we can use it

ConnectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    //before importing data,fist clear all data already in it
    const createdUsers = await User.insertMany(Users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = Products.map((product) => {
      return { ...product, user: adminUser };
    });
    //above codes is for adding adminuser to product obj
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

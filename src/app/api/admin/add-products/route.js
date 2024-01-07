import Product from "@/models/product";
import Joi from "joi";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectToDB from "@/database";
const AddNewproductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  sizes: Joi.array().required(),
  deliveryInfo: Joi.string().required(),
  onSale: Joi.string().required(),
  priceDrop: Joi.number().required(),
  imageUrl: Joi.string().required(),
});
export async function POST(req) {
  try {
    console.log("Before connecting to DB");
    await connectToDB();
    console.log("After connecting to DB");

    const extraxtData = await req.json();
    const { name, description, price, imageUrl, category, sizes, deliveryInfo, onSale, priceDrop } = extraxtData;
    console.log("Before validating schema");
    const { error } = AddNewproductSchema.validate({
      name,
      description,
      price,
      imageUrl,
      category,
      sizes,
      deliveryInfo,
      onSale,
      priceDrop,
    });
    console.log("After validating schema");
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    console.log("Received data:", extraxtData);
    console.log("Before creating product");
    const newlyCreatedProduct = await Product.create(extraxtData);
    console.log("After creating product");
    if (newlyCreatedProduct) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Falied to add products please try again!!",
      });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
      error: error.message, // Add more specific error information
    });
  }
}

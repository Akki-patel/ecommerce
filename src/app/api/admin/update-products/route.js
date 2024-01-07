import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    
    await connectToDB();
    console.log("success full");
    const extractData = await req.json();
    const {
      _id,
      name,
      price,
      description,
      category,
      sizes,
      delliveryInfo,
      onSale,
      priceDrop,
      imageUrl,
    } = extractData;

    const updatedProduct = await Product.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        name,
        price,
        description,
        category,
        sizes,
        delliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      },
      { new: true }
    );
    if(updatedProduct){
        return NextResponse.json({
            success:true,
            message:"Product updated succesfully"
        })
    }else{
        return NextResponse.json({
            success: false,
            message: "Falied to update Product! Please try again later",
          });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}

import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log("_id:", id); 
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Product id is required",
      }, { status: 400 });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (deletedProduct) {
      return NextResponse.json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete product! Please try again later",
      }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    }, { status: 500 });
  }
}

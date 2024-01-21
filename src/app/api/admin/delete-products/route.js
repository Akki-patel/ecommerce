import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json({
        success: false,
        message: "Product ID is required",
      });
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const deleteAddress = await Address.findByIdAndDelete(id);

      if (deleteAddress) {
        return NextResponse.json({
          success: true,
          message: "Adrrress deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete adrees ! Please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}

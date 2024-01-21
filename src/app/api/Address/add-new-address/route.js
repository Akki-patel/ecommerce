import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";
import Joi from "joi";

export const dynamic = "force-dynamic";
const AddNewAddress = Joi.object({
  fullName: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  postalCode: Joi.string().required(),
  userID: Joi.string().required(),
});
export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const data = await req.json();
      const { fullName, address, city, country, postalCode, userID } = data;
      const { error } = AddNewAddress.validate({
        fullName,
        address,
        city,
        country,
        postalCode,
        userID,
      });
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
    const newlyAddedAddress = await Address.create(data);
    if(newlyAddedAddress){
        return NextResponse.json({
            success: true,
            message: "Adrees added suceesfully",
          });
    }else{
        return NextResponse.json({
            success: false,
            message: "falid to add address please try again",
          });
    }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authentictaed",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}

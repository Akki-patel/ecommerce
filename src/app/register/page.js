"use client";

import { useState } from "react";
import InputComponent from "../components/FormElements/InputComponent";
import SelectComponent from "../components/FormElements/InputComponent/SelectComponent";
import { registerNewUser } from "@/services/register";
import { registrationFormControls } from "../utils";

const isRegisterd = false;
const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};
export default function Register() {
  const [FormData, setFormData] = useState(initialFormData);
  console.log(FormData);

  function isFormValid() {
    return FormData &&
      FormData.name &&
      FormData.name.trim() !== " " &&
      FormData.email &&
      FormData.email.trim() !== " " &&
      FormData.password &&
      FormData.password.trim() !== " "
      ? true
      : false;
  }
  console.log(isFormValid());
  async function handleRegisterOnSubmit() {
    const data = await registerNewUser(FormData);
    console.log(data);
  }
  return (
    <div className="bg-white relative h-screen">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-10 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-3xl font-medium text-center font-serif">
                {isRegisterd
                  ? "Registration Successfull !"
                  : "Sign up for and account"}
              </p>
              {isRegisterd ? (
                <button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition=all duration-200 ease-in-out foucs:shadow font-medium uppercase tracking-wide">
                  Login
                </button>
              ) : (
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  {registrationFormControls.map((controlItem) =>
                    controlItem.componentType === "input" ? (
                      <InputComponent
                        type={controlItem.type}
                        placeholder={controlItem.placeholder}
                        label={controlItem.label}
                        onChange={(event) => {
                          setFormData({
                            ...FormData,
                            [controlItem.id]: event.target.value,
                          });
                        }}
                        value={FormData[controlItem.id]}
                      />
                    ) : controlItem.componentType === "select" ? (
                      <SelectComponent
                        Options={controlItem.options}
                        label={controlItem.label}
                        onChange={(event) => {
                          setFormData({
                            ...FormData,
                            [controlItem.id]: event.target.value,
                          });
                        }}
                        value={FormData[controlItem.id]}
                      />
                    ) : null
                  )}
                  <button
                    className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition=all duration-200 ease-in-out foucs:shadow font-medium uppercase tracking-wide "
                    disabled={!isFormValid()}
                    onClick={handleRegisterOnSubmit}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

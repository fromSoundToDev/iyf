import React from "react";
import TextComponent from "./TextComponent";
import BtnComponent from "./BtnComponent";

export default function GiftHomeSection() {
  return (
    <div className="mt-20 w-full flex flex-col space-y-3 bg-[#75c46337] ">
      <div className="w-3/4 flex   items-center mx-auto">
        <TextComponent
          text2={
            "non, in gravida adipiscing non commodo sapien viverra tincidunt ex faucibus malesuada quis lobortis, In lobortis, viverra dui. ultrices ipsum ipsum adipiscing "
          }
        />
        <BtnComponent
          btnText={"faire un don"}
          btnStyle={
            "bg-[#74C084] w-full   block px-1 rounded-xl border-2     border-black"
          }
        />
      </div>
      <div className="w-3/4 flex    items-center mx-auto">
        <BtnComponent
          btnText={"Devemir volontaire "}
          btnStyle={
            "bg-[#74C084] w-full block px-1 rounded-xl border-2     border-black"
          }
        />
          <TextComponent
            text2={
              "non, in gravida adipiscing non commodo sapien viverra tincidunt ex faucibus malesuada quis lobortis, In lobortis, viverra dui. ultrices ipsum ipsum adipiscing "
            }
          />
      </div>

      <div className="w-full bg-[#74C463] h-3"></div>
    </div>
    
  );
}

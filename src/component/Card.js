import React from "react";
import cardImg from "../img/Rectangle-1.png";
import cardIcon from "../img/card-shop-icon.svg";

function Card() {
  return (
    <div className="font-sans bg-[#F8F8F8] rounded-[20px]">
      <div className="mb-4 flex items-center w-full  ">
        <img src={cardImg} className="w-full rounded-t-[20px]" alt="card img" />
      </div>
     <div className="px-5 py-4">
     <h3 className=" font-bold text-lg leading-6 text-black">
        Bouquet Rainbow
      </h3>
      <p className="text-sm text-[#818181] mb-[10px]">
        Compra hoy, entrega cuando quieras
      </p>
      <p className="text-[#D96581] text-sm mb-[10px]">!Entrega el Mismo Día!</p>
      <span className="block font-semibold mb-5 text-[22px] ">$19.990</span>
      <div className="flex gap-6 ">
        <a
          href="/"
          className="w-[220px] text-center py-4 text-sm leading-5 bg-[#D96581] text-white font-medium rounded-[10px]"
        >
          Agregar al carrito
        </a>
        <a href="/" className="bg-white  py-3 px-[10px] rounded-[10px] flex items-center">
          <img
            className="w-6 h-5"
            src={cardIcon}
            alt="card icon"
          />
        </a>
      </div>
     </div>
    </div>
  );
}

export default Card;

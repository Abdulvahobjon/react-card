import React from "react";
import NosotrasImg1 from "../img/Rectangle-1.png";
import NosotrasImg2 from "../img/Rectangle-2.png";
import NosotrasImg3 from "../img/Rectangle-3.png"; 
import cardIcon from "../img/card-shop-icon.svg";

function Card(props) {
  return (
    <div id={props.id} className="font-sans bg-[#F8F8F8] rounded-[20px]">
      <div className="mb-4 flex items-center w-full  ">
        <img src={props.img} className="w-full rounded-t-[20px]" alt="card img" />
      </div>
     <div className="px-5 py-4">
     <h3 className=" font-bold text-lg leading-6 text-black">
       {props.title}
      </h3>
      <p className="text-sm text-[#818181] mb-[10px]">
      {props.text}
      </p>
      <p className="text-[#D96581] text-sm mb-[10px]">{props.textOrder}</p>
      <span className="block font-semibold mb-5 text-[22px] ">{props.price}</span>
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

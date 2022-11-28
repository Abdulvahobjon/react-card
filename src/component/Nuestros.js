import React from "react";
import Card from "./Card";
import NosotrasImg1 from "../img/Rectangle-1.png";
import NosotrasImg2 from "../img/Rectangle-2.png";
import NosotrasImg3 from "../img/Rectangle-3.png"; 


function Nuestros() {
  const data = [
    { id: 1  , img: NosotrasImg1 , title:"Bouquet Rainbow" , text:"Compra hoy, entrega cuando quieras" ,  textOrder: "!Entrega el Mismo Día!" , price:"$19.990" , } ,
    { id: 2  , img: NosotrasImg2 , title:"Name of Product" , text:"Compra hoy, entrega cuando quieras" ,  textOrder: "!Entrega el Mismo Día!" , price:"$18.990" , } ,
    { id: 3  , img: NosotrasImg3 , title:"Name of Product" , text:"Compra hoy, entrega cuando quieras" ,  textOrder: "!Entrega el Mismo Día!" , price:"$21.990" , } 
 ];
  return (
    <div className="  pt-[60px] pb-[71px] border">
      <div className="max-w-[1480px] px-5  mx-auto ">
        <div className="text-center mb-24">
          <h2 className="font-bold text-[50px] leading-[60px] text-[#444] mb-[10px]">
            Nuestros productos
          </h2>
          <p className="text-5 leading-7 text-[#9BABBF]">
            Encuentra lo que necesitas
          </p>
        </div>
        <div className="max-w-[1072px] w-full mx-auto grid grid-cols-3 gap-10 ">
            {data.map(item =>{
                return(
                    <Card id={item.id} title={item.title} img={item.img} price={item.price} text={item.text} textOrder={item.textOrder} />
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default Nuestros;

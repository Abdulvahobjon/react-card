import React from "react";
import nosotrasImg from "../img/nosotras/nosotras-img.png";

function Nosotras() {
  return (
    <div className="py-24 border">
      <div className="max-w-[1480px] px-5  mx-auto text-center ">
        <div className="max-w-[1200px] mx-auto mb-[60px]">
          <h2 className="text-[50px] leading-[60px] text-[#444] font-bold mb-7">
            Nosotras
          </h2>
          <p className="mb-4">
            En Florería Suecia estamos orgullosos de entregar la experiencia de
            enviar flores en línea, recordando a las personas lo especial que es
            enviar y recibir flores. </p> 
            <p className="mb-4"> Nuestro objetivo es combinar un servicio de entrega de flores
            hermoso, flexible y fácil de usar con la magia que solo nuestras
            excelentes floristas pueden brindar a nuestros bellos ramos y
            arreglos. </p> 
            <p>Seleccionamos cuidadosamente cada flor con las que trabajamos para
            asegurarnos de mantener una altísima calidad y ofrecer una increíble
            experiencia en las flores o regalos que envíes a tus seres queridos.
          </p>
        </div>
        <div className="max-w-[880px] mx-auto">
          <img className="w-full " src={nosotrasImg} alt="Nosotras Img" />
        </div>
      </div>
    </div>
  );
}

export default Nosotras;

import React from "react";
import RightIcon from "../img/hero/right-icon.svg";
import banner from "../img/hero/banner.png";
function Hero() {
  return (
    <div
      className="pt-20 pb-28  border"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: `center right`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1480px] px-5  mx-auto  ">
        <div className="max-w-[480px]">
          <h2 className="mb-[22px] text-[50px] leading-[60px] text-[#444] font-bold ">
            Florería Suecia
          </h2>
          <p className="mb-5">¿Necesitas regalar algo y no sabes qué?</p>
          <p className="mb-5">
            Tenemos todo para que puedas elegir el regalo perfecto de forma
            rápida y sencilla.
          </p>
          <p className="mb-8">Además podemos entregar hoy mismo si deseas</p>
          <a href="/" className="bg-[#D96581] rounded-full max-w-[260px] flex items-center justify-center gap-[10px]  py-5 text-white text-base leading-5 font-bold">
            Entrega Inmediata
            <img src={RightIcon} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

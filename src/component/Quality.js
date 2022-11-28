import React from "react";
import timeIcon from "../img/quality/time-icon.svg";

function Quality() {
  return (
    <div className="pt-[60px] pb-[290px] bg-[#F8F8F8] border">
      <div className="max-w-[1480px] px-5  mx-auto text-center ">
        <div className="max-w-[1200px] mx-auto mb-[170px]">
          <h2 className="text-[50px] leading-[60px] text-[#444] font-bold mb-7">
            ¿Por qué elegirnos?
          </h2>
          <p className="mb-4">No solo entregamos flores. Nos preocupamos</p>
        </div>

        <div className="">
          <div className="">
            <div className="w-40 h-40 mb-[30px] flex items-center justify-center rounded-full border border-[#444] ">
              <img src={timeIcon} className="max-w-full" alt="quality icon" />
            </div>
            <p className="font-bold text-left text-lg leading-6 text-black">Entrega en menos de 2 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;

import React, { Component } from "react";
import GlowingBlob from "./GlowingBlob";
import "../App.css";

function Hero() {
  return (
    <>
      <section
        className="w-[100%] flex justify-center h-auto"
        style={{
          background:
            "linear-gradient(145deg, #070818 15%, #0a0b22 40%, #030630 50%, #0a0b22 100%)",
        }}
      >
        <div>
          <GlowingBlob />
        </div>
        <div className="relative top-140 xl:top-80 lg:top-100 md:top-100 sm:top-100 xl:left-100 lg:left-100 md:left-50 sm:left-100 left-20 2xl:left-230">
          <GlowingBlob />
        </div>
        <div className="relative top-90 xl:top-40 lg:top-50 md:top-50 sm:top-50 xl:left-100 lg:left-100 md:left-50 sm:left-100 left-20 2xl:left-230">
          <GlowingBlob />
        </div>

        <div className="flex w-[90%] text-center mt-16 flex-col mb-19">
          <div className="justify-center items-center self-center flex w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px] h-[60px]">
            <span className="text-[#8852E0] bg-[#8852E0]/20 text-[14px] border-[1px] h-[38px] content-center text-center align-middle font-[500] w-[254.5px] borde rounded-[50px] ">
              ✨ Available for Freelance Work
            </span>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white xl:text-[96px] text-[48px] tracking-tight mt-[21.5px] w-auto font-[700]">
              <span>
                Hi, I'm{" "}
                <span
                  className="text-center text-transparent font-[700] bg-clip-text animate-gradient-x"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #8c4ddb, #c266f4, #8c4ddb)", // ✅ fixed HEX
                  }}
                >
                  M. Talha Khalid
                </span>
              </span>
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[#999999] text-[24px] xl:text-[36px] font-light pt-[2px] mb-6 w-auto">
              <span>Frontend & Automation Developer</span>
            </h1>
          </div>
          <div className="flex justify-center text-center leading-[28px]">
            <h4 className="text-[#999999] xl:text-[20px] text-[18px] font-[300] w-[896px]">
              <span>
                With over 6 month of hands-on experience, I specialize in
                building and delivering scalable frontend applications and
                automation solutions. I create efficient, reliable solutions
                that balance performance with exceptional user experience.
              </span>
            </h4>
          </div>
          <div className="flex justify-center mt-12 xl:flex-row md:flex-row sm:flex-row lg:flex-row 2xl:flex-row flex-col gap-6">
            <div>
              <a href="#about">
                <button
                  className="inline-flex items-center h-[46px] w-[195px] bg-gradient-to-r cursor-pointer justify-center gap-1 text-sm group  px-10 py-3 rounded-full font-semiboldtransition-all duration-500 hover:scale-105 border relative overflow-hidden "
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #8852e0 0%, #8852e0 50%, #8852e0 80%, rgba(255, 255, 255, 0.6) 100%)",
                  }}
                >
                  <span className="relative text-[#FAFAFA] tracking-tight font-[700] text-[14px] z-10 flex items-center gap-2">
                    View My Work
                    <span className="inline-block text-[#FAFAFA] move transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  {/* Shiny effect on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 
                    -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-700 ease-out"
                  />
                </button>
              </a>
            </div>
            <div>
              <a href="#contact">
                <button className="inline-flex cursor-pointer border-2 border-[#241d57] items-center bg-[#08080880] text-[#FAFAFA] justify-center gap-2 text-sm h-11 px-10 py-4 rounded-full font-semibold duration-300 hover:scale-105 hover:border hover:border-[#8852E0] hover:shadow-[0_0_10px_0px_#743fc8]">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-0 sm:space-x-8 md:space-x-8 lg:space-x-8 xl:space-x-8 pt-18">
            <div>
              <h1 className="text-[30px] font-bold text-[#8852E0] pt-[2px]">
                6+
              </h1>
              <h1 className="text-[#999999] -mt-[5px] text-[14px]">
                Years Experiance
              </h1>
            </div>
            <div className="h-[47px] mt-[10px] opacity-20 text-orange-50 border"></div>
            <div>
              <h1 className="text-[30px] mt- font-bold text-[#c775f0] pt-[2px]">
                50+
              </h1>
              <h1 className="text-[#999999] -mt-[5px] text-[14px]">
                Projects Completed
              </h1>
            </div>
            <div className="h-[47px] mt-[10px] opacity-20 text-orange-50 border"></div>
            <div>
              <h1 className="text-[30px] mt- font-bold text-[#8852e0] pt-[2px]">
                100%
              </h1>
              <h1 className="text-[#999999] -mt-[5px] text-[14px]">
                Client Satisfaction
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

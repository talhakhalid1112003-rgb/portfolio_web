import React from "react";
import Projects from "./projectSection";

function Feature() {
  return (
    <>
      <section
        className="w-full flex flex-col justify-center bg-[#0a0313] h-auto"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #0a0313, #18072d 50%, #0a0313, rgba(140,77,219,0.05))",
        }}
      >
        {/* About Header */}
        <section>
          <div className="flex flex-col items-center w-full mx-auto mt-45 mb-19 text-center">
            <div className="flex justify-center items-center w-[140px] h-[60px]">
              <span className="text-[#C775f0] bg-[#8852E0]/17 text-[14px] border-[1px] border-[#C775f0]/25 h-[38px] w-[125px] rounded-[50px] font-[500] flex items-center justify-center">
                Featured Work
              </span>
            </div>
            <h2
              className="text-transparent text-[50px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] font-[700] text-center bg-clip-text animate-gradient-x -mt-[10.5px]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8c4ddb, #c266f4, #8c4ddb)",
              }}
            >
              Recent Projects
            </h2>
            <span className="text-[#999999] text-[20px] mt-2 max-w-[800px]">
              Some of my recent work and contributions that showcase my
              expertise in full-stack development
            </span>
          </div>
          <Projects />
          <div className="h-30"></div>
        </section>
      </section>
    </>
  );
}

export default Feature;

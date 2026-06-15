import React from "react";
import GetInTouch from "./get";
import Messaging from "./message";

function Contact() {
  return (
    <>
      <section
        className="w-full flex flex-col justify-center bg-[#0a0313] h-auto"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #0a0313, #18072d 50%, #0a0313, rgba(140,77,219,0.05))",
        }}
      >
        <div className="flex flex-col items-center w-[90%] mx-auto mt-16 mb-19 text-center">
          <div className="flex justify-center items-center w-[115px] h-[60px]">
            <span className="text-[#8852E0] bg-[#8852E0]/20 border-[#8852f0]/20 text-[14px] border-[1px] h-[38px] w-[140px] rounded-[50px] font-[500] flex items-center justify-center">
              Get In Touch
            </span>
          </div>
          <h2
            className="text-transparent text-[50px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] font-[700] text-center bg-clip-text animate-gradient-x -mt-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8c4ddb, #c266f4, #8c4ddb)",
            }}
          >
            Let's Work Together
          </h2>
          <span className="text-[#999999] text-[20px] mt-2 max-w-[800px]">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full justify-items-center">
          <div className="w-full md:w-[100%]">
            <GetInTouch />
          </div>
          <div className="w-full md:w-[100%]">
            <Messaging />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

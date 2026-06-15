import React from "react";
import Icon from "./Icon";

function GetInTouch() {
  return (
    <section className="mb-10 md:mb-20 mx-4 md:mx-6">
      {/* Heading + Paragraph */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#8852e0]">
          Get in Touch
        </h1>
        <p className="text-[#999999] text-base md:text-lg max-w-[550px] mt-5 font-normal leading-relaxed">
          I'm always open to discussing new opportunities, creative projects, or
          potential collaborations. Feel free to reach out!
        </p>
      </div>

      {/* Contact Items */}
      <div className="mt-10 space-y-6">
        {/* Email */}
        <div className="flex items-center border border-[#3f3d3d] rounded-[10px] w-full h-auto py-3 px-3 shadow-lg shadow-black/40 bg-[#1a1a1a]/20">
          <div className="w-12 h-12 rounded-[10px] bg-[#8852e0] flex justify-center items-center">
            <Icon size={24} color={"white"}>
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </Icon>
          </div>
          <div className="flex flex-col pl-3 overflow-hidden">
            <span className="font-medium text-white">Email</span>
            <span className="text-[#999999] text-sm truncate">
              talhach1112003@gmail.com
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center border border-[#3f3d3d] rounded-[10px] w-full h-auto py-3 px-3 shadow-lg shadow-black/40 bg-[#1a1a1a]/20">
          <div className="w-12 h-12 rounded-[10px] bg-[#8852e0] flex justify-center items-center">
            <Icon size={24} color={"white"}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </Icon>
          </div>
          <div className="flex flex-col pl-3">
            <span className="font-medium text-white">Phone</span>
            <span className="text-[#999999] text-sm">+923474023468</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center border border-[#3f3d3d] rounded-[10px] w-full h-auto py-3 px-3 shadow-lg shadow-black/40 bg-[#1a1a1a]/20">
          <div className="w-12 h-12 rounded-[10px] bg-[#8852e0] flex justify-center items-center">
            <Icon size={24} color={"white"}>
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </Icon>
          </div>
          <div className="flex flex-col pl-3">
            <span className="font-medium text-white">Location</span>
            <span className="text-[#999999] text-sm">Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;

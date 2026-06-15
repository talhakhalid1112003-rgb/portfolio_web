import React from "react";
import Icon from "./Icon";

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[100%] bg-[#1a0a2c] border border-[#2b1149] rounded-[12px] p-5 flex flex-col gap-4 mx-auto">
      {/* Icon */}
      <div className="bg-[#8852e0] w-16 h-16 rounded-[25%] flex items-center justify-center">
        <Icon color="white" size={28}>
          {icon}
        </Icon>
      </div>

      {/* Title */}
      <h1 className="text-white font-bold text-lg text-center md:text-start">
        {title}
      </h1>

      {/* Description */}
      <p className="text-[#999999] text-sm leading-6 text-center md:text-start">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;

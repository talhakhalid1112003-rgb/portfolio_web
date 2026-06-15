import React from "react";

const ProjectCard = ({
  image,
  techStack,
  title,
  description,
  link,
  className,
}) => {
  return (
    <div
      className={`bg-[#1a1a1a] text-white h-full rounded-[23px] flex flex-col shadow-lg ${className}`}
    >
      {/* Image Section */}
      <div className="relative w-full rounded-t-[20px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover opacity-80"
        />

        {/* Tech Stack Overlay */}
        <div className="absolute left-1/2 w-[91%] mb-3 bottom-2 transform -translate-x-1/2 flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-white/20 text-white px-3 py-1 rounded-[25px] text-[10px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="text-start rounded-b-[25px] bg-[#0a0313] px-4 py-3 flex flex-col flex-grow">
        <h2 className="text-[20px] text-[#FAFAFA] mt-[16px] font-[700] line-clamp-1">
          {title}
        </h2>
        <p className="text-[14px] leading-5.5 text-[#999999] mt-[11px] flex-grow line-clamp-3">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="text-[#8852e0] text-[14px] mt-[17px] mb-[12px] group inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            View Details <span className="inline-block">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

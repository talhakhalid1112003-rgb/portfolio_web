import React from "react";
import SkillsSection from "./skillSection";
import Icon from "./Icon";

function About() {
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
          <div className="flex flex-col items-center w-[90%] mx-auto mt-16 mb-19 text-center">
            <div className="flex justify-center items-center w-[100px] h-[60px]">
              <span className="text-[#8852E0] bg-[#8852E0]/20 text-[14px] border-[1px] h-[38px] w-[254.5px] rounded-[50px] font-[500] flex items-center justify-center">
                About Me
              </span>
            </div>
            <h2
              className="text-transparent text-[50px] sm:text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] font-[700] text-center bg-clip-text animate-gradient-x mt-4"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8c4ddb, #c266f4, #8c4ddb)",
              }}
            >
              Crafting Digital Experiences
            </h2>
            <span className="text-[#999999] text-[20px] font-[300] mt-6 max-w-[830px]">
              Specializing in the MERN stack, with over 6 years of experience
              building dynamic, user-focused web and mobile applications. I
              deliver efficient, scalable digital solutions that drive results.
            </span>
          </div>
        </section>

        {/* About Content + Icons + Skills */}
        <section className="px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row w-full gap-10">
            {/* Text + Icons */}
            <div className="flex flex-col w-full lg:w-1/2 gap-6 pl-5 2xl:pl-18 xl:pl-18 lg:pl-18 md:pl-18 sm:pl-18 pt-1 mt-0 2xl:mt-15 xl:mt-15 lg:mt-15 md:mt-15 sm:mt-15">
              <span className="text-[#999999] text-[18px] leading-7.5">
                Throughout my career, I've contributed to a wide range of
                projects, from responsive websites to cross-platform mobile
                apps, with a strong focus on performance, clean code, and user
                experience. I also have hands-on experience with cloud
                deployment, ensuring applications are secure, reliable, and
                ready for scale.
              </span>
              <span className="text-[#999999] text-[18px] leading-7.5 mt-1">
                In addition to full-time roles, I've collaborated with
                international clients through freelance platforms like Fiverr
                and Upwork. These projects sharpened my ability to adapt,
                communicate effectively, and solve real-world problems across
                different industries.
              </span>
              <span className="text-[#999999] text-[18px] leading-7 mt-2">
                I'm passionate about continuous learning and love turning
                complex challenges into smooth, functional solutions. Always
                open to exciting opportunities — let's build something great
                together!
              </span>

              {/* Icons */}
              <div className="flex flex-wrap gap-5 mt-10">
                <a className="border-[1px] border-[#1a0a2c] w-[60px] h-[60px] rounded-[15px] flex justify-center items-center hover:bg-[#8852e0] hover:border-none hover:text-white cursor-pointer">
                  <Icon size={24} color="#999999">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </Icon>
                </a>
                <a className="border-[1px] border-[#1a0a2c] w-[60px] h-[60px] rounded-[15px] flex justify-center items-center hover:bg-[#8852e0] hover:border-none hover:text-white cursor-pointer">
                  <Icon size={24} color="#999999">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </Icon>
                </a>
                <a className="border-[1px] border-[#1a0a2c] w-[60px] h-[60px] rounded-[15px] flex justify-center items-center hover:bg-[#8852e0] hover:border-none hover:text-white cursor-pointer">
                  <Icon size={24} color="#999999">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </Icon>
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full mt-10 lg:mt-0 lg:w-1/2 grid grid-cols-1 sm:grid-cols-0  lg:grid-cols-1">
              <SkillsSection />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;

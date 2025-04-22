import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = (isDarkMode) => {
  return (
    <section id="about" className="w-full px-6 md:px-[12%] py-16 scroll-mt-20">
      <div className="text-center">
        <h4 className="mb-2 text-lg font-Ovo text-gray-500 uppercase tracking-widest dark:text-white">
          Introduction
        </h4>
        <h2 className="text-4xl md:text-5xl font-Ovo text-gray-800 font-semibold dark:text-white">
          About Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-14 my-16">
        <div className="w-64 sm:w-80 rounded-3xl shadow-lg overflow-hidden border-2 border-gray-300 flex-shrink-0">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-[20rem] space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed font-Ovo dark:text-white/80">
            A passionate Web Developer skilled in JavaScript, React.js, Next.js,
            and the MERN stack. Experienced in building responsive,
            user-friendly applications with authentication, database
            integration, and real-time features. Strong problem-solving
            abilities and a team player, eager to contribute to innovative
            projects.
          </p>

          <ul className="grid grid-cols-auto sm:grid-cols-2 gap-6 ">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-xl p-8 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl  flex items-center space-x-4  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-10"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white ">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

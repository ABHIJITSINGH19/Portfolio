import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full text-center px-6 md:px-[12%] py-16 scroll-mt-20"
    >
      <h4 className="mb-2 text-lg font-Ovo text-gray-500 uppercase tracking-widest">
        What I Do
      </h4>
      <h2 className="text-4xl md:text-5xl font-Ovo text-gray-800 font-semibold">
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a MERN stack developer from Gujarat, INDIA with 2 years of
        experience in La Net Team Software Solutions pvt.ltd.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 shadow-md hover:shadow-xl hover:shadow-black cursor-pointer hover:bg-white hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read moore
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

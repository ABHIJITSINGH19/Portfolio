import React from "react";
// import Image from 'next/image'
// import { assets } from '@/assets/assets'
// import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    //     <div className='mt-20'>
    //         <div className='text-center'>
    //             {/* <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2 rounded-md' /> */}
    //             <a href="#top" className="text-4xl md:text-5xl font-Ovo text-gray-800 font-semibold">ABHI {`</>`}</a>
    //             <div className='w-max flex items-center gap-2 mx-auto'>
    //                 <Image src={assets.mail_icon} alt="" className='w-6' />
    //                 abhijitsingh17833@gmail.com
    //             </div>
    //         </div>
    // <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
    //     <p><AiFillCopyrightCircle /> 2025 Abhijit Singh. All rights reserved.</p>
    //     <ul className='flex items-center gap-4 mt-10 justify-center mt-4 sm:mt-0'>
    //         <li><a target='_blank' href='https://github.com'>GitHub</a></li>
    //         <li><a target='_blank' href='https://linkedin.com'>LinkedIn</a></li>
    //         <li><a target='_blank' href='https://twitter.com'>Twitter</a></li>
    //     </ul>
    // </div>

    <div className="bg-gray-800 text-white py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()}.  {`<ABHI />`}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

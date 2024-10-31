import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="mt-16 py-4 md:py-6 text-center font-bold text-base md:text-lg bg-[#ffe4c4] text-black">
      <p className="text-center  mb-2 md:mb-4">© Rabia Rehman | All rights reserved 2024.</p>
      <div className="flex flex-row md:flex-row justify-center gap-4 items-center md:items-center md:justify-center">
        <FaFacebook size={24} className="md:size-30" />
        <FaTwitter size={24} className="md:size-30" />
        <AiFillInstagram size={24} className="md:size-30" />
        <IoLogoWhatsapp size={24} className="md:size-30" />
      </div>
    </div>
  );
};

export default Footer;

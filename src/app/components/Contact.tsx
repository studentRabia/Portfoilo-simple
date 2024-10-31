import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h3 className="text-5xl" data-aos="fade-up-left">Get in Touch</h3>
          <p className=" text-lg pt-2" data-aos="fade-up-left">
            {" "}
            Drop me aline to Finding the answers to these questions isn’t
            difficult, but getting any kind of new tool set up can be
            time-consuming. And that can be a barrier to moving forward, even if
            you know it would be beneficial for your business.
          </p>
          <div className="flex gap-3  items-center" data-aos="fade-up-left">
            <AiOutlineMail size={30} />
            RRabc@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="fade-up-left">
            <BsTelephone size={30} />
            (+92)021-0000000
          </div>
        </div>
        <div className=" space-y-8">
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] p-2 bg-transparent border border-accent "
              name=""
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              className="h-[40px] p-2 bg-transparent border border-accent "
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="msg">Message</label>
            <textarea  className=" p-2 bg-transparent border border-accent " title="Enter your Message" rows={8} name="" id="msg" >
            </textarea>
            </div>
            <button className="bg-accent bg-[#ffe4c4] text-black font-bold text-xl  rounded-es-xl rounded-tl-2xl rounded-br-2xl p-2 px-6 border border-t-8 border-l-4  border-b-4 border-r-4 border-bisque border-red-950" data-aos="fade-up-left">Send</button>


        </div>
      </div>
    </div>
  );
};

export default Contact;

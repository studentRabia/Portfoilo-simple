import React from "react";
import Image from "next/image";
interface Iprops {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}
const Card: React.FC<Iprops> = ({ title, desc, img, tags }) => {
  return (
    <div className="border  border-accent-dark p-4   w-[350px]  sm:[350px] " data-aos="zoom-in-right">
      <div>
        <Image
          src={img}
          width={350}
          height={350}
          alt="title"
          className="w-[300px] sm:w-[350px] h-auto "
        />
      </div>
      <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div >
          {tags.map((element) => (
            <div className="tags" key={element}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

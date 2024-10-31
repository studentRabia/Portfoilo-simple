import React from "react";
import Heading from "./Heading";
import Card from "./Card";
const data = [
  {
    id: 0,
    title: "calculator",
    desc: "A TypeScript based For manageing and organizied ",
    img: "/calculator.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Coutdown Timer",
    desc: "A TypeScript based For manageing and organizied ",
    img: "/currancyconvertor.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A TypeScript & Next.js based tool For Fetch and display  data ",
    img: "/calculator.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A TypeScript based For manageing and organizied ",
    img: "/currancyconvertor.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Calculator Simple",
    desc: "A TypeScript based For manageing and organizied ",
    img: "/calculator.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Currency Converter",
    desc: "A TypeScript based For manageing and organizied ",
    img: "/currancyconvertor.jpg",
    tags: ["React ", "Node", "CSS", "TypeScript"],
  },
];
const Projects = () => {
  return (
    <div id="projects" className="container pt-32 ">
      <Heading title={"My Classic Projects"} />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10    md:grid-cols-2 lg:grid-cols-3 place-items-center ">
        {data.map((element) => (
          <Card
            key={element.id}
            title={element.title}
            desc={element.desc}
            img={element.img}
            tags={element.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

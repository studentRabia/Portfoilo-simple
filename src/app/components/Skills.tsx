import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 ">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-up-left">
          <h2 className="text-4xl md:text-5xl mb-6" >Technologies I work with</h2>
          <p className="text-amber-100 pt-2 text-lg"> Building upon the innovations in Generative AI, this article explores Text-to-Code (TTC) AI, a transformative technology that converts natural language descriptions into executable code. While traditional coding requires programming languages and syntax expertise, TTC AI democratizes coding by allowing users to generate code through simple text inputs. This advancement holds the potential to reshape software development, making it faster, more accessible, and adaptable to the needs of various industries.</p>
        </div>
        <div>
            <div className="grid grid-cols-3  text-3xl sm:text-4xl gap-10">
                <div className="space-y-2">
                    <h2 data-aos="fade-up-left">JavaScript</h2>
                    <h2 data-aos="fade-up-right">TypeScript</h2>
                   <h2 data-aos="fade-up-left">HTML</h2>
                </div>
               
                <div className="space-y-2">
                    <h2 data-aos="fade-up-right">Tailwind</h2>
                    <h2 data-aos="fade-up-left">Next.js</h2>
                    <h2 data-aos="fade-up-right">Node.js</h2>
                </div>
                <div className="space-y-2">
                    <h2 data-aos="fade-up-left">Github</h2>
                    <h2 data-aos="fade-up-left">BootStrap</h2>
                    <h2 data-aos="fade-up-left">JQuery</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import "animate.css";

export const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      img: "images/web-programming.png",
      stack: [
        "HTML", 
        "CSS", "Tailwind",
        "Javascript", "Typescript",
        "React", "Angular"
      ],
    },
    {
      title: "Mobile Development",
      img: "images/mobile-development.png",
      stack: [
        "React Native", "Typescript",
        "Flutter", "Dart",
        "Kotlin", "Android Studio",
        "Swift", "X-Code",
      ],
    },
    {
      title: "Backend Development",
      img: "images/api.png",
      stack: ["Python", "Django", "Flask", "Go", "Docker", "AWS"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 md:mt-10 md:mb-20">
      {skills.map((skill) => (
        <div className="px-10 w-10/12 my-10 mx-auto border-2  rounded-3xl shadow max-w-3xl">
          <h2 className="text-xl text-black text-center font-semibold underline pt-6">
            {skill.title}
          </h2>
          <div className=" items-center justify-between">
            <div className="py-6">
              <img className="w-28 mx-auto" src={skill.img} alt="img-avatar" />
            </div>
            <div className="mx-auto  pb-4 pt-4">
              <p className="text-xl font-bold pb-2">Stack:</p>
              <div className="space-y-2">
                {skill.stack.map((i) => (
                  <p className="inline-flex items-center rounded-md bg-black px-2 py-0.5 font-medium text-white mr-1 my-1 hover:scale-150 cursor-pointer md:text-sm">{i}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

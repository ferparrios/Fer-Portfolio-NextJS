import React from "react";
import "animate.css";

export const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      img: "images/web-programming.png",
      stack: [
        "HTML, CSS, Tailwind",
        "Javascript, Typescript",
        "React, Angular",
      ],
    },
    {
      title: "Mobile Development",
      img: "images/mobile-development.png",
      stack: [
        "React Native, Typescript",
        "Flutter, Dart",
        "Kotlin, Android Studio",
        "Swift, X-Code",
      ],
    },
    {
      title: "Backend Development",
      img: "images/api.png",
      stack: ["Python, Django, Flask", "Go", "Docker", "AWS"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {skills.map((skill) => (
        <div className="px-10 w-10/12 my-10 mx-auto border-4 border-black rounded-3xl shadow max-w-3xl">
          <h2 className="text-xl text-black text-center font-semibold underline pt-6">
            {skill.title}
          </h2>
          <div className="md:flex items-center justify-between">
            <div className="py-6">
              <img className="w-36 mx-auto" src={skill.img} alt="img-avatar" />
            </div>
            <div className="mx-auto md:w-1/3 pb-4 pt-4">
              <p className="text-xl font-bold underline pb-2">Stack:</p>
              <ul className="space-y-2">
                {skill.stack.map((i) => (
                  <li className="font-semibold">{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

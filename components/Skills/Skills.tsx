import React from "react";
import { es } from "i18n/es";
import { en } from "i18n/en";
import { fr } from "i18n/fr";
import { useRouter } from "next/router";

export const Skills = () => {
  const { locale } = useRouter();
  const skills = [
    {
      title:
        (locale === "es-PE" && es.skill1title) ||
        (locale === "en-US" && en.skill1title) ||
        (locale === "fr-CA" && fr.skill1title),
      img: "images/web-programming.png",
      stack: [
        "HTML",
        "CSS",
        "Tailwind",
        "Javascript",
        "Typescript",
        "React",
        "Angular",
      ],
    },
    {
      title:
        (locale === "es-PE" && es.skill2title) ||
        (locale === "en-US" && en.skill2title) ||
        (locale === "fr-CA" && fr.skill2title),
      img: "images/mobile-development.png",
      stack: [
        "React Native",
        "Typescript",
        "Flutter",
        "Dart",
        "Kotlin",
        "Android Studio",
        "Swift",
        "X-Code",
      ],
    },
    {
      title:
        (locale === "es-PE" && es.skill3title) ||
        (locale === "en-US" && en.skill3title) ||
        (locale === "fr-CA" && fr.skill3title),
      img: "images/api.png",
      stack: ["Python", "Django", "Flask", "Go", "Docker", "AWS", "MySql", "MongoDB"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 md:mt-10 md:mb-20">
      {skills.map((skill, index) => (
        <div className="px-10 w-10/12 my-10 mx-auto border-2  rounded-3xl shadow max-w-3xl" key={index}>
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
                {skill.stack.map((i, index) => (
                  <p className="inline-flex items-center rounded-md bg-black px-2 py-0.5 font-medium text-white mr-1 my-1 hover:scale-150 cursor-pointer md:text-sm transition duration-500 ease-in-out" key={index}>
                    {i}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

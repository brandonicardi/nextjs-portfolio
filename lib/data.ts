import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import phpblogImg from "@/public/phpblog.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Analista Programador",
    location: "ACCUSYS TECHNOLOGY",
    description:
      "He desarrollado y optimizado procedimientos almacenados (store procedures), tablas, y consultas complejas (queries) en SQL, especializándome en manipulación de datos (DML's). Además, he implementado servicios web, tanto SOAP como REST, garantizando una integración efectiva con diversas plataformas. En el ámbito de control de versiones, manejo herramientas como TFS y GIT, permitiendo un seguimiento preciso de los cambios en el código. Participo activamente en proyectos de desarrollo ágiles, contribuyendo dentro de equipos que aplican la metodología Scrum para lograr resultados efectivos y organizados.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Actualidad",
  },
  {
    title: "Analista Programador Back-End",
    location: "SISEM",
    description:
      "Me he destacado por adaptarme y aprender sobre herramientas como JxNet/.NET. Participo activamente en reuniones con clientes y logre hacerme de experiencia en el manejo y creación de consultas (queries), procedimientos almacenados (sp's) y manipulación de datos (DML's) utilizando T-SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Desarrollo en Aplicaciones Web",
    location: "Estudios ACKBAR",
    description:
      "Desarrollé estructuras esenciales utilizando PHP, gestioné tanto bases de datos MYSQL como Excel, y utilicé librerías de Bootstrap para mejorar el diseño y la presentación de la información",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Licenciatura en Sistemas",
    location: "Universidad Nacional de Lanús",
    description:
      "Cursando actualmente el cuarto año, con un promedio general de 8. he completado proyectos clave aplicando Java, consolidando una base sólida en desarrollo de software y bases de datos.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Actualidad",
  },
  {
    title: "Servicio Tecnico en Computación",
    location: "RISUS Computación",
    description:
      "Me especialicé en formateo e instalación de software, recuperación de datos, y mantenimiento de hardware, desarrollando habilidades en diagnóstico y resolución de problemas técnicos complejos.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "PHP Blog APP - CMS",
    description:
      "Trabaje en este proyecto para poner en practica mis habilidades. Es un blog personal con panel administrable completo.",
    tags: ["PHP", "MySQL", "CSS", "HTML", "JavaScipt"],
    imageUrl: phpblogImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Next.js",
  "Java",
  "Git",
  "T-SQL",
  "PHP",
  "Laravel",
  "C#",
  "Excel",
  "Jira",
  "SpringBoot",
] as const;

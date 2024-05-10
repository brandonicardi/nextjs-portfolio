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
    title: "Analista Programador Back-End",
    location: "SISEM",
    description:
      "Me he destacado por adaptarme y aprender sobre herramientas como JxNet/.NET. Participo activamente en reuniones con clientes y logre hacerme de experiencia en el manejo y creación de consultas (queries), procedimientos almacenados (sp's) y manipulación de datos (DML's) utilizando T-SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Actualidad",
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
      "Actualmente estoy en el tercer año de mi carrera, con un promedio general de 8. A lo largo de mi trayectoria académica, he llevado a cabo proyectos que me han permitido adquirir experiencia en desarrollo utilizando tecnologías clave como Java.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Servicio Tecnico en Computación",
    location: "RISUS Computación",
    description:
      "Me especialicé en el formateo e instalación de programas, la recuperación de datos y la eliminación de virus. Además, tengo experiencia en el mantenimiento de hardware, incluido el ensamblaje de computadoras, así como en el diagnóstico y la resolución de errores técnicos.",
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

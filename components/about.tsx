"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Tras finalizar el colegio, descubrí mi pasión por la programación y
        decidí inscribirme en la 
        <span className="font-medium">Licenciatura en Sistemas</span>, donde he
        tenido la oportunidad de aprender y desarrollar nuevas habilidades. 
        <span className="italic">Lo que más me atrae de programar</span> es la
        resolución de problemas; realmente 
        <span className="underline">disfruto</span> la satisfacción de encontrar
        soluciones a errores y desafíos técnicos. Mis principales tecnologías
        incluyen{" "}
        <span className="font-medium">
          SQL/T-SQL, PHP (con Laravel), Java (con SpringBoot) y React
        </span>
        . Además, tengo experiencia con metodologías ágiles como Scrum y Kanban.
        Actualmente, estoy en la búsqueda de una 
        <span className="font-medium">posición part-time</span> como
        desarrollador de software que me permita seguir creciendo
        profesionalmente y avanzar en mi carrera.
      </p>

      <p>
        <span className="italic">Fuera del trabajo</span>, disfruto de los
        videojuegos, el cine y la lectura. También me motiva 
        <span className="font-medium">aprender cosas nuevas</span>, y en este
        momento estoy cursando un programa de 
        <span className="font-medium">QA Testing dictado por Globant</span>.
      </p>
    </motion.section>
  );
}

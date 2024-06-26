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
        Después de finalizar el colegio{" "}
        descubrí mi pasión por la programación. Me inscribí en una carrera relacionada
        <span className="font-medium"> (Licenciatura en sistemas)</span> y aprendí muchísimas cosas nuevas.{" "}
        <span className="italic">Mi parte favorita de programar</span> es el aspecto
        de resolución de problemas. Realmente <span className="underline">amo</span> la sensación de encontrar
        la solución a un problema. Mis tecnologías principales son{" "}
        <span className="font-medium">
          React, PHP (Laravel), Java (SpringBoot) & T-SQL
        </span>
        . También me encuentro familiarizado con metodologías ágiles tales como Scrum y Kanban.
         Actualmente estoy buscando una {" "}
        <span className="font-medium">posición part-time</span> como desarrollador de software
        que me permita continuar con mi carrera.
      </p>

      <p>
        <span className="italic">Cuando no estoy programando</span>, disfruto jugando videojuegos,
        viendo películas o leyendo. También me gusta{" "}
        <span className="font-medium">aprender cosas nuevas</span>. Actualmente
        estoy estudiando{" "}
        <span className="font-medium">ciberseguridad por cuenta propia.</span>.
      </p>
    </motion.section>
  );
}

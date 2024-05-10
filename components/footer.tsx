import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Brandon Icardi. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este sitio:</span> fue construido utilizando
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}

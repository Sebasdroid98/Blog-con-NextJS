"use client";
import { Input } from "@/src/components/forms/Input";
import { Button } from "@/src/components/ui/Button";
import React from "react";

export default function CreatePost() {
  function registrar() {
    console.log("Registrando información...");
  };
  function cancelar() {
    console.log("Cancelando registro...");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 p-2 bg-amber-100 dark:bg-black dark:border-white dark:border-2 rounded-2xl">
        Crear nuevo post
      </h3>
      <div>
        <div className="form-control">
          <label htmlFor="titulo">Titulo</label>
          <Input ids="titulo" names="titulo" types="text" />
        </div>
        <div className="form-control">
          <label htmlFor="contenido">Contenido</label>
          <Input ids="contenido" names="contenido" types="text" />
        </div>
        <div className="flex gap-2 mt-4">
          <Button color="bg-green-600 dark:bg-orange-800" handleClick={registrar}>Registrar</Button>
          <Button color="bg-red-600 dark:bg-gray-800" handleClick={cancelar}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}

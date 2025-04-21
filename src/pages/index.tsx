import React, { useState } from "react";
import { TiTree } from "react-icons/ti";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-1 text-shadow-2xs">
        <TiTree size={28} className="text-green-800" />
        <h3 className="">Club Campestre</h3>
      </div>

      {/* <h1 className="font-medium text-stone-600">Ingresa a</h1> */}

      <div className="flex w-[350px] flex-col items-center justify-center gap-4">
        <div className="items-centers flex w-full flex-col justify-center gap-1">
          <label htmlFor="">Nombre</label>
          <input
            type="input"
            className="input validator text-sm"
            required
            placeholder="Ej: Juan Pérez"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength={3}
            maxLength={30}
            title="Only letters, numbers or dash"
          />
          {/* <p className="validator-hint">
            Debe tener entre 3 y 30 caracteres
            <br />
            que contenga sólo letras, números o guiones.
          </p> */}
        </div>
        <div className="items-centers flex w-full flex-col justify-center gap-1">
          <label htmlFor="">Número de Identificación</label>
          <input
            type="tel"
            className="input validator h-[35px] bg-stone-100 tabular-nums shadow-xs"
            required
            placeholder="1234567890"
            pattern="[0-9]*"
            minLength={10}
            maxLength={10}
            title="Must be 10 digits"
          />
          {/* <p className="validator-hint">Must be 10 digits</p> */}
        </div>
        <div className="items-centers flex w-full flex-col justify-center gap-1">
          <label htmlFor="">Contraseña</label>
            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input validator tabular-nums"
              required
              placeholder="*********"
              pattern="[0-9]*"
              minLength={10}
              maxLength={10}
              title="Must be 10 digits"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOffOutline  />
              ) : (
                <IoEyeOutline  />
              )}
            </div>
            </div>
          {/* <p className="validator-hint">Must be 10 digits</p> */}
        </div>

        <div className="items-centers flex w-full flex-col justify-center gap-1">
          <label htmlFor="">Rol</label>
          <select className="select validator h-[35px] bg-stone-100 shadow-xs w-full" required>
            <option disabled selected value="">
              Escoge:
            </option>
            <option>Tabs</option>
            <option>Spaces</option>
          </select>
          {/* <p className="validator-hint">Must be 10 digits</p> */}
        </div>

        <button className="btn w-full border-[1px] border-green-500 bg-green-300 text-lg font-light shadow-inner">
          Ingresar{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;

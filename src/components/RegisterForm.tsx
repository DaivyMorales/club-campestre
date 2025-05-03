import React, { useState } from "react";
import { TiTree } from "react-icons/ti";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useFormik } from "formik";
import axios from "axios";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { data: session, status } = useSession();

  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      password: "",
      roleId: "", // changed from 0 to ""
    },
    onSubmit: async (values) => {
      const parsedValues = {
        ...values,
        roleId: Number(values.roleId), // ensure roleId is a number
      };
      console.log(parsedValues);
      try {
        const response = await axios.post("/api/user", parsedValues);
        console.log("Response:", response.data);
        // Handle success (e.g., show a success message, redirect)
      } catch (error) {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-[430px] flex-col items-center justify-center gap-4"
    >
      <div className="items-centers flex w-full flex-col justify-center gap-1">
        <label htmlFor="">Nombre</label>
        <input
          name="name"
          onChange={formik.handleChange}
          type="input"
          className="input validator text-sm"
          required
          placeholder="Ej: Juan Pérez"
          pattern="[A-Za-z][A-Za-z0-9\- ]*"
          minLength={3}
          maxLength={30}
          title="Only letters, numbers, dash or spaces"
        />
        <p className="validator-hint hidden">
          Debe tener entre 3 y 30 caracteres
          <br />
          que contenga sólo letras, números, guiones o espacios.
        </p>
      </div>
      <div className="items-centers flex w-full flex-col justify-center gap-1">
        <label htmlFor="">Número de Identificación</label>
        <input
          name="id"
          onChange={formik.handleChange}
          type="tel"
          className="input validator h-[35px] bg-stone-100 tabular-nums shadow-xs"
          required
          placeholder="1234567890"
          pattern="[0-9]*"
          minLength={7}
          maxLength={10}
          title="Minimo 7 digitos!"
        />
        <p className="validator-hint hidden">Minimo 7 digitos!</p>
      </div>
      <div className="items-centers flex w-full flex-col justify-center gap-1">
        <label htmlFor="">Contraseña</label>
        <div className="relative">
          <input
            name="password"
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            className="input validator tabular-nums"
            required
            placeholder="*********"
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe tener más de 8 caracteres, incluyendo número, letra minúscula y letra mayúscula"
          />
          <p className="validator-hint hidden">
            Debe tener más de 8 caracteres, incluyendo
            <br />
            Al menos un número
            <br />
            Al menos una letra minúscula
            <br />
            Al menos una letra mayúscula
          </p>
          <div
            className="pointer-events-auto absolute top-[5px] right-0 flex cursor-pointer items-center pr-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <div className="rounded-md border-[1px] border-gray-300 bg-white p-1 px-2 hover:border-stone-400 hover:bg-stone-300">
                <IoEyeOffOutline className="text-gray-600" size={14} />
              </div>
            ) : (
              <div className="rounded-md border-[1px] border-gray-300 bg-white p-1 px-2 hover:border-stone-400 hover:bg-stone-300">
                <IoEyeOutline className="text-gray-600" size={14} />
              </div>
            )}
          </div>
        </div>
        {/* <p className="validator-hint">Must be 10 digits</p> */}
      </div>

      <div className="items-centers flex w-full flex-col justify-center gap-1">
        <label htmlFor="">Rol</label>
        <select
          name="roleId"
          onChange={formik.handleChange}
          className="select validator h-[35px] w-full bg-stone-100 shadow-xs"
          required
        >
          <option disabled selected value="">
            Escoge:
          </option>
          <option value={2}>Cliente</option>
          <option value={1}>Administrador</option>
          <option value={3}>Mesero</option>
        </select>
        {/* <p className="validator-hint">Must be 10 digits</p> */}
      </div>

      <button
        type="submit"
        className="btn w-full border-[1px] border-green-500 bg-green-300 text-lg font-light shadow-inner"
      >
        Registrarme{" "}
      </button>
    </form>
  );
}

export default RegisterForm;

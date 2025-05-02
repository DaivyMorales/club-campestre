import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [failedAttempts, setFailedAttempts] = useState(() => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("failedAttempts") || "0");
    }
    return 0;
  });
  const [lockoutTime, setLockoutTime] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lockoutUntil");
      return stored ? Number(stored) : null;
    }
    return null;
  });
  const [showPassword, setShowPassword] = useState(false);

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Check if still locked out
  useEffect(() => {
    const checkLockout = () => {
      const now = Date.now();
      if (lockoutTime && now < lockoutTime) {
        const minutesLeft = Math.ceil((lockoutTime - now) / 60000);
        setError(`Demasiados intentos. Espera ${minutesLeft} minutos.`);
      } else if (lockoutTime) {
        setLockoutTime(null);
        localStorage.removeItem("lockoutUntil");
      }
    };

    checkLockout();
    const interval = setInterval(checkLockout, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [lockoutTime]);

  const handleFailedAttempt = () => {
    const newAttempts = failedAttempts + 1;
    setFailedAttempts(newAttempts);
    localStorage.setItem("failedAttempts", String(newAttempts));

    if (newAttempts >= 3) {
      const lockoutUntil = Date.now() + 15 * 60 * 1000; // 15 minutes
      setLockoutTime(lockoutUntil);
      localStorage.setItem("lockoutUntil", String(lockoutUntil));
      setError("Demasiados intentos. Espera 15 minutos.");
    }
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (lockoutTime && Date.now() < lockoutTime) {
        const minutesLeft = Math.ceil((lockoutTime - Date.now()) / 60000);
        setError(`Demasiados intentos. Espera ${minutesLeft} minutos.`);
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        const res = await signIn("credentials", {
          id: values.id,
          password: values.password,
          redirect: false,
        });

        if (res?.error) {
          handleFailedAttempt();
          setError("Tu Id o contraseña son incorrectos. Verifica!");
        } else {
          router.push("/");
        }
      } catch (error) {
        setError("Error al iniciar sesión");
        handleFailedAttempt();
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (status === "loading" || status === "authenticated") {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-[430px] flex-col items-start justify-start gap-4 rounded"
    >
      <div className="flex w-full flex-col">
        <label
          className="mb-2 block text-xs font-medium text-neutral-300"
          htmlFor="id"
        >
          Número de Identificación *
        </label>

        <input
          className="input validator h-[35px] bg-stone-100 tabular-nums shadow-xs"
          id="id"
          onChange={formik.handleChange}
          type="string"
          name="id"
          placeholder="834957438"
          required
        />
        <div className="validator-hint hidden text-xs">
          Ingresa un correo valido
        </div>
      </div>

      <div className="w-full">
        <label
          className="mb-2 block text-xs font-medium text-neutral-300"
          htmlFor="password"
        >
          Contraseña*
        </label>

        <div className="relative">
          <input
            className="input validator h-[35px] bg-stone-100 tabular-nums shadow-xs"
            type={showPassword ? "text" : "password"}
            required
            placeholder="*******"
            name="password"
            id="password"
            onChange={formik.handleChange}
          />
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
        {/* <p className="validator-hint hidden text-xs">
      Must be more than 8 characters, including
      <br />
      At least one number
      <br />
      At least one lowercase letter
      <br />
      At least one uppercase letter
    </p> */}
      </div>

      {error && (
        <div className="w-full text-center text-xs font-semibold text-red-500">
          {error}
        </div>
      )}
      <div className="flex w-full items-center justify-between gap-4">
        <button
          type="submit"
          className="btn w-full border-[1px] border-green-500 bg-green-300 text-lg font-light shadow-inner"
          disabled={
            isLoading || (lockoutTime ? Date.now() < lockoutTime : false)
          }
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner loading-xs"></span>
              Ingresando...
            </>
          ) : (
            "Ingresar"
          )}
        </button>
      </div>
      {/* <button onClick={() => signIn("github")}>Sign In with GitHub</button> */}
    </form>
  );
}

export default LoginForm;

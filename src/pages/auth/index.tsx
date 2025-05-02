import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import React, { useState } from "react";
import { TiTree } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";

function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  const formVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-start gap-5">
        <div className=" z-50 flex items-center justify-center gap-1 ">
          <TiTree size={20} className="text-stone-400" />
          <p className="text-[20px] text-stone-400 font-semibold">Club Campestre</p>
        </div>
        <AnimatePresence mode="wait">
          {!showRegister && (
            <motion.h2
              key="login-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Bienvenido, ingresa con tus datos{" "}
            </motion.h2>
          )}
          {showRegister && (
            <motion.h2
              key="register-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Crea una cuenta para comenzar!{" "}
            </motion.h2>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {!showRegister && (
            <motion.div
              key="login"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=""
            >
              <LoginForm />
            </motion.div>
          )}
          {showRegister && (
            <motion.div
              key="register"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=""
            >
              <RegisterForm />
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          {!showRegister ? (
            <p>
              ¿No tienes una cuenta?{" "}
              <span
                className="font-semibold text-green-600 cursor-pointer"
                onClick={() => setShowRegister(true)}
              >
                Registrarme
              </span>
            </p>
          ) : (
            <p>
              Ya tienes una cuenta?{" "}
              <span
                className="font-semibold text-green-600 cursor-pointer"
                onClick={() => setShowRegister(false)}
              >
                Iniciar Sesión
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;

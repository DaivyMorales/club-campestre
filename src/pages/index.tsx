import ToggleComponent from "@/components/ToggleComponent";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // Add local states for startDate, endDate, numberOfPeople
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  // Add state for payMethod
  const [payMethod, setPayMethod] = useState<
    "Nequi" | "Transferencia Bancaria"
  >("Nequi");

  // Alert state
  const [alert, setAlert] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const formik = useFormik({
    initialValues: {
      completeName: "",
      identificationUser: session?.user?.id,
      email: "",
      numberOfPeople: 0,
      startDate: "",
      endDate: "",
      finalPrice: 0,
      payMethod: "nequi",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      // Convert to ISO-8601 DateTime if values exist
      const startDateISO = values.startDate
        ? new Date(values.startDate).toISOString()
        : "";
      const endDateISO = values.endDate
        ? new Date(values.endDate).toISOString()
        : "";

      // Calculate final price as string
      let finalPrice = "0";
      if (startDate && endDate && numberOfPeople) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0) {
          const pricePerPersonPerDay = 12300;
          finalPrice = (
            diffDays *
            Number(numberOfPeople) *
            pricePerPersonPerDay
          ).toString();
        }
      }

      const body = {
        completeName: values.completeName,
        email: values.email,
        numberOfPeople: values.numberOfPeople,
        startDate: startDateISO,
        endDate: endDateISO,
        finalPrice, // as string
        payMethod: values.payMethod,
        userId: session?.user?.id,
      };

      console.log(body);

      try {
        const response = await axios.post("/api/reservation", body);
        if (response.status === 200) {
          // Send reservation email
          await axios.post("/api/email/sendReservation", {
            to: values.email,
            reservation: {
              completeName: values.completeName,
              email: values.email,
              numberOfPeople: values.numberOfPeople,
              startDate: startDateISO,
              endDate: endDateISO,
              finalPrice,
              payMethod: values.payMethod,
            },
          });
          // Close modal and reset form/inputs
          handleCloseModal();
          // Show Tailwind alert
          setAlert({
            type: "success",
            message:
              "¡Reserva realizada con éxito! 🎉 Te hemos enviado un correo con los detalles.",
          });
        }
        console.log(response.data);
      } catch (error) {
        setAlert({
          type: "error",
          message:
            "Ocurrió un error al realizar la reserva. Intenta nuevamente.",
        });
        console.error(error);
      }
    },
  });

  // Sync payMethod state with formik
  React.useEffect(() => {
    formik.setFieldValue("payMethod", payMethod);
  }, [payMethod]);

  // Auto-hide alert after 4 seconds
  React.useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  // Helper to reset all form and local states
  const resetAll = () => {
    formik.resetForm();
    setStartDate("");
    setEndDate("");
    setNumberOfPeople(0);
    setPayMethod("Nequi");

  };

  const handleCloseModal = () => {
    const modal = document.getElementById(
      "my_modal_1",
    ) as HTMLDialogElement | null;
    if (modal) modal.close();
    resetAll();
  };

  return (
    <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
      {/* Animated Tailwind Alert with framer-motion */}
      <AnimatePresence>
        {alert && (
          <motion.div
            key="alert"
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.35, type: "spring" }}
            className={`fixed top-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 rounded-lg px-4 py-3 shadow-lg transition-all ${alert.type === "success" ? "border border-green-400 bg-green-100 text-green-800" : "border border-red-400 bg-red-100 text-red-800"} `}
            role="alert"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{alert.message}</span>
              <button
                className="ml-4 text-xl leading-none font-bold focus:outline-none"
                onClick={() => setAlert(null)}
                aria-label="Cerrar"
                type="button"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1",
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
            resetAll();
          }
        }}
      >
        Reservar Estancia
      </button>
      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={formik.handleSubmit}
          className="modal-box flex flex-col items-start justify-start gap-3"
        >
          <div className="flex flex-col items-start justify-start">
            <h4 className=""> Reservar Estancia</h4>
            <p className="text-sm text-gray-500">
              Tu reserva en el Club Campestre contará con una instancia dedicada. <br />
              Te enviaremos un correo para que recibas los detalles de tu reserva.
            </p>
          </div>

          <div className="h-[1px] w-full bg-gray-300" />

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Nombre completo
            </label>
            <input
              name="completeName"
              id="completeName"
              onChange={formik.handleChange}
              type="text"
              className="input text-sm"
              required
              placeholder="Ej: Juan Pérez"
              pattern="[A-Za-z][A-Za-z0-9\- ]*"
              minLength={3}
              maxLength={30}
              title="Only letters, numbers, dash or spaces"
              value={formik.values.completeName}
            />
          </div>
          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Documento
            </label>
            <input
              name="id"
              onChange={formik.handleChange}
              type="number"
              className="input text-sm"
              required
              placeholder="Ej: Juan Pérez"
              pattern="[A-Za-z][A-Za-z0-9\- ]*"
              minLength={3}
              maxLength={30}
              title="Only letters, numbers, dash or spaces"
              value={session?.user?.id || ""}
            />
          </div>
          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Correo electronico
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              type="email"
              className="input text-sm"
              required
              placeholder="Ej: myemail@cc.com"
              value={formik.values.email}
            />
          </div>

          <div className="h-[1px] w-full bg-gray-300" />

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Número de personas
            </label>
            <input
              name="numberOfPeople"
              onChange={(e) => {
                formik.handleChange(e);
                setNumberOfPeople(Number(e.target.value));
              }}
              type="number"
              className="input text-sm"
              required
              placeholder="Ej: +5"
              pattern="[A-Za-z][A-Za-z0-9\- ]*"
              minLength={3}
              maxLength={30}
              title="Only letters, numbers, dash or spaces"
              value={numberOfPeople || ""}
            />
          </div>

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Fecha inicio
            </label>
            <input
              name="startDate"
              onChange={(e) => {
                formik.handleChange(e);
                setStartDate(e.target.value);
              }}
              type="date"
              className="input text-sm"
              required
              value={startDate}
            />
          </div>
          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Fecha fin
            </label>
            <input
              name="endDate"
              onChange={(e) => {
                formik.handleChange(e);
                setEndDate(e.target.value);
              }}
              type="date"
              className="input text-sm"
              required
              min={startDate || undefined}
              value={endDate}
            />
          </div>

          <div className="h-[1px] w-full bg-gray-300" />
          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Abono (30%)
            </label>
            <div className="text-md w-full font-semibold">
              {(() => {
                // Use local state instead of formik.values
                if (!startDate || !endDate || !numberOfPeople) return "0 COP";
                const start = new Date(startDate);
                const end = new Date(endDate);
                const diffTime = end.getTime() - start.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays <= 0) return "0 COP";
                const pricePerPersonPerDay = 12300; // example price
                const total =
                  diffDays * Number(numberOfPeople) * pricePerPersonPerDay;
                return `${total.toLocaleString()} COP`;
              })()}
            </div>
          </div>

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Metodo de pago
            </label>
            <ToggleComponent value={payMethod} onChange={setPayMethod} />
          </div>

          <div className="h-[1px] w-full bg-gray-300" />
          <div className="w-full">
            <div className="modal-action flex gap-3">
              <button className="btn h-[28px] border-[1px] border-green-500 bg-green-300 text-sm font-light">
                Reservar
              </button>
              <button
                type="button"
                className="btn h-[28px] border-[1px] border-gray-300 text-sm font-light"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
              {/* if there is a button in form, it will close the modal */}
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Home;

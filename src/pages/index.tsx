import ToggleComponent from "@/components/ToggleComponent";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useFormik } from "formik";

function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // Add local states for startDate, endDate, numberOfPeople
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  // Add state for payMethod
  const [payMethod, setPayMethod] = useState<"Nequi" | "Transferencia Bancaria">("Nequi");

  const formik = useFormik({
    initialValues: {
      completeName: "",
      id: session?.user?.id,
      email: "",
      numberOfPeople: 0,
      startDate: "",
      endDate: "",
      finalPrice: 0,
      payMethod: "nequi",
    },
    onSubmit: (values) => {
      console.log(values);

      const sds = {
        completeName: values.completeName,
        id: session?.user?.id,
        email: values.email,
        numberOfPeople: values.numberOfPeople,
        startDate: values.startDate,
        endDate: values.endDate,
        finalPrice: 140000,
        payMethod: values.payMethod,
      }
      
    },
  });

  // Sync payMethod state with formik
  React.useEffect(() => {
    formik.setFieldValue("payMethod", payMethod);
  }, [payMethod]);

  return (
    <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1",
          ) as HTMLDialogElement | null;
          if (modal) modal.showModal();
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
              Your project will have its own dedicated instance and full
              Postgres database. <br />
              An API will be set up so you can easily interact with your new
              database.
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
              value={session?.user?.id}
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
            />
          </div>

          <div className="h-[1px] w-full bg-gray-300" />

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Número de personas
            </label>
            <input
              name="numberOfPeople"
              onChange={e => {
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
            />
          </div>

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Fecha inicio
            </label>
            <input
              name="startDate"
              onChange={e => {
                formik.handleChange(e);
                setStartDate(e.target.value);
              }}
              type="date"
              className="input text-sm"
              required
            />
          </div>
          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Fecha fin
            </label>
            <input
              name="endDate"
              onChange={e => {
                formik.handleChange(e);
                setEndDate(e.target.value);
              }}
              type="date"
              className="input text-sm"
              required
              min={startDate || undefined}
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
                const total = diffDays * Number(numberOfPeople) * pricePerPersonPerDay;
                return `${total.toLocaleString()} COP`;
              })()}
            </div>
          </div>

          <div className="flex w-full items-center justify-start">
            <label htmlFor="" className="w-[180px]">
              Metodo de pago
            </label>
            <ToggleComponent
              value={payMethod}
              onChange={setPayMethod}
            />
          </div>

          <div className="h-[1px] w-full bg-gray-300" />
          <div className="w-full">
            <div className="modal-action flex gap-3">
              <button className="btn h-[28px] border-[1px] border-green-500 bg-green-300 text-sm font-light">
                Reservar
              </button>
              <form method="dialog ">
                <button className="btn h-[28px] border-[1px] border-gray-300 text-sm font-light">
                  Cerrar
                </button>
                {/* if there is a button in form, it will close the modal */}
              </form>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Home;

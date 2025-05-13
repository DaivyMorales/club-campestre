import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function Reservations({ total }: any) {
  // Define an interface for your reservation type
  interface Reservation {
    id: string;
    finalPrice: string;
    endDate: string;
    // Add other properties your reservation has
    status?: string;
    // Add any other fields that exist in your reservation objects
  }

  // Initialize state with the proper type
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { data: session } = useSession();

  const handleUpdateReservation = async (
    reservationId: string,
    currentPrice: string,
  ) => {
    try {
      setLoading(true);

      // Calculate new price by adding the total to the current price
      const newPrice = (parseFloat(currentPrice) + total).toString();

      // Update reservation via API
      const response = await fetch(`/api/reservation`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: reservationId,
          finalPrice: newPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update reservation");
      }

      // Update the local state with the updated reservation
      setReservations(
        reservations.map((res) =>
          res.id === reservationId ? { ...res, finalPrice: newPrice } : res,
        ),
      );

      // Show success message
      setSuccessMessage(
        `Cargo de $${total} agregado exitosamente a la reserva`,
      );

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");

        // Close modal
        const modal = document.getElementById("my_modal_2");
        if (modal instanceof HTMLDialogElement) {
          modal.close();
        }
      }, 3000);
    } catch (error) {
      console.error("Error updating reservation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="btn text-md w-[250px] cursor-pointer rounded-md border-[1px] border-green-500 bg-green-300 font-light shadow-inner hover:bg-green-200"
        onClick={async () => {
          try {
            // Get reservation by ID from API
            const response = await fetch(
              `/api/reservation?userId=${session?.user?.id}`,
            );
            if (!response.ok) {
              throw new Error("Failed to fetch reservation");
            }
            const reservationData = await response.json(); // Renamed for clarity

            console.log(reservationData);

            // Update the reservations state with the fetched data
            // Assuming reservationData is an array of reservations.
            // If it can be null or not an array, you might want to add checks:
            // e.g., setReservations(Array.isArray(reservationData) ? reservationData : []);
            setReservations(reservationData);

            // Show modal with reservation data
            const modal = document.getElementById("my_modal_2");
            if (modal instanceof HTMLDialogElement) {
              modal.showModal();
            }
          } catch (error) {
            console.error("Error fetching reservation:", error);
          }
        }}
      >
        Agregar{" "}
        <span className="font-semibold">$ {total.toLocaleString()}</span>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box mt-9">
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Seleccionar reserva</h2>
            <p className="mt-2 text-gray-600">
              Selecciona una reserva de tu lista para añadir{" "}
              <strong>$ {total}</strong> a la cuenta.
            </p>

            {successMessage && (
              <div className="mt-4 rounded-md bg-green-100 p-2 text-green-700">
                {successMessage}
              </div>
            )}

            {reservations && reservations.length > 0 ? (
              <div className="mt-4 overflow-x-auto">
                <table className="table w-full bg-white">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Reserva
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Estado
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Fecha
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Precio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation: any, index: number) => {
                      const isExpired =
                        new Date(reservation.endDate) <= new Date();
                      return (
                        <tr
                          key={index}
                          className={`bg-white hover:bg-gray-50 ${
                            isExpired || loading
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          }`}
                          onClick={
                            isExpired || loading
                              ? undefined
                              : () =>
                                  handleUpdateReservation(
                                    reservation.id,
                                    reservation.finalPrice,
                                  )
                          }
                        >
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="font-medium text-gray-800">
                              Reserva #{index + 1}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {!isExpired ? (
                              <span className="rounded-full border-[1px] bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600">
                                Activo
                              </span>
                            ) : (
                              <span className="rounded-full border-[1px] bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                                Expirado
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm whitespace-nowrap text-gray-600">
                            {new Date(reservation.endDate).toLocaleDateString(
                              "es-ES",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              },
                            )}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="font-semibold">
                              ${reservation.finalPrice}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-4">No tienes reservas.</p>
            )}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" disabled={loading}>
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Reservations;

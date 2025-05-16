import React, { useEffect, useState } from "react";
import ButtonReservation from "@/components/ButtonReservation";
import Image from "next/image";
import { FaGolfBall, FaUtensils, FaSwimmingPool } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { useSession } from "next-auth/react";

function Home() {
  const features = [
    {
      icon: <FaGolfBall className="h-8 w-8 text-green-600" />,
      title: "Campo de Golf",
      description: "18 hoyos de clase mundial en un entorno natural espectacular"
    },
    {
      icon: <FaUtensils className="h-8 w-8 text-green-600" />,
      title: "Restaurante Gourmet",
      description: "Experiencia culinaria excepcional con vistas panorámicas"
    },
    {
      icon: <FaSwimmingPool className="h-8 w-8 text-green-600" />,
      title: "Piscinas",
      description: "Relájate en nuestras piscinas de agua cristalina"
    },
    {
      icon: <MdSportsBasketball className="h-8 w-8 text-green-600" />,
      title: "Instalaciones Deportivas",
      description: "Canchas de tenis, básquet y más para mantenerte activo"
    }
  ];

  const { data: session, status } = useSession();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      if (status === "authenticated" && session?.user?.id) {
        try {
          const response = await fetch(`/api/reservation?userId=${session.user.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch reservations");
          }
          const data = await response.json();
          setReservations(data);
        } catch (error) {
          console.error("Error fetching reservations:", error);
        }
      }
    };

    fetchReservations();
  }, [status, session]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[565px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://islingtongolfclub.com/SiteDesign/home-Rotating-banner/IslingtonGC_2015-08-24_1002603?1746835200030"
            alt="Club Campestre"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
          <span className="mb-4 text-5xl font-bold">Bienvenido a Club Campestre</span>
          <p className="mb-8 text-xl">Tu escape perfecto para el deporte y la recreación</p>
          
          {status === "authenticated" && (
            <div className="mb-8 w-full max-w-3xl space-y-4 rounded-lg bg-white py-4 border-[1px] shadow-sm border-gray-300">
              <span className="text-2xl font-semibold text-stone-500">Tus Reservaciones Activas</span>
              <div className="space-y-3">
                {reservations.length > 0 ? (
                  reservations
                    .filter((reservation: any) => new Date(reservation.endDate) > new Date())
                    .map((reservation: any, index: number) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between rounded-lg py-4 px-6 transition-all hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-left">
                            <h4 className="font-medium text-gray-800">Reserva #{index + 1}</h4>
                            <p className="text-sm text-gray-600">
                              {new Date(reservation.endDate).toLocaleDateString("es-ES", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-gray-800">
                            ${reservation.finalPrice}
                          </span>
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-600">
                            Activo
                          </span>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="text-center text-gray-600">No tienes reservaciones activas</p>
                )}
              </div>
            </div>
          )}
          
          <ButtonReservation />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Nuestras Instalaciones
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-center text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Únete a Nuestra Comunidad
          </h2>
          <p className="mb-8 text-gray-600">
            Descubre un estilo de vida exclusivo y lleno de experiencias memorables
          </p>
          <ButtonReservation />
        </div>
      </div>
    </div>
  );
}

export default Home;

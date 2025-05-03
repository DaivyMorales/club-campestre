import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  reservation?: {
    completeName: string;
    numberOfPeople: number;
    startDate: string;
    endDate: string;
    finalPrice: string;
    payMethod: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  reservation,
}) => (
  <div
    style={{
      background: '#22c55e',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      borderRadius: 12,
      padding: 32,
      maxWidth: 480,
      margin: '0 auto',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    }}
  >
    <h1 style={{ fontSize: 28, marginBottom: 8, fontWeight: 700 }}>
      ¡Hola, {firstName}!
    </h1>
    <p style={{ fontSize: 16, marginBottom: 24 }}>
      Tu reserva en el <b>Club Campestre</b> ha sido realizada con éxito.
    </p>
    {reservation && (
      <div
        style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12, fontWeight: 600 }}>
          Detalles de tu reserva:
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 15 }}>
          <li style={{ marginBottom: 6 }}>
            <strong>Nombre:</strong> {reservation.completeName}
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Número de personas:</strong> {reservation.numberOfPeople}
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Fecha de inicio:</strong> {new Date(reservation.startDate).toLocaleDateString()}
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Fecha de fin:</strong> {new Date(reservation.endDate).toLocaleDateString()}
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Precio total:</strong> {Number(reservation.finalPrice).toLocaleString()} COP
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Método de pago:</strong> {reservation.payMethod}
          </li>
        </ul>
      </div>
    )}
    <p style={{ fontSize: 16, fontWeight: 500 }}>
      Gracias por reservar con nosotros. ¡Te esperamos!
    </p>
  </div>
);
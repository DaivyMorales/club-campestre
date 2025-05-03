import React from "react";

type ToggleComponentProps = {
  value: "Nequi" | "Transferencia Bancaria";
  onChange: (val: "Nequi" | "Transferencia Bancaria") => void;
};

const ToggleComponent = ({ value, onChange }: ToggleComponentProps) => {
  return (
    <div className="w-full max-w-sm rounded-lg border-gray-300 bg-[#f5f5f4] shadow-xs">
      <div
        className={`flex gap-2 items-center justify-start rounded-t-lg border-[1px] px-3 py-2 ${
          value === "Nequi" ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
        onClick={() => onChange("Nequi")}
        style={{ cursor: "pointer" }}
      >
        <div className="h-[30px] w-[15px]">
          <input
            type="radio"
            className="shadow-none"
            checked={value === "Nequi"}
            onChange={e => {
              e.stopPropagation();
              onChange("Nequi");
            }}
            name="payment"
            onClick={e => e.stopPropagation()}
          />
        </div>
        <div className="flex flex-col items-start">
          <p>Nequi</p>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur
          </p>
        </div>
      </div>
      <div
        className={`flex items-center justify-start gap-2 rounded-b-lg border-[1px] px-3 py-2 ${
          value === "Transferencia Bancaria" ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
        onClick={() => onChange("Transferencia Bancaria")}
        style={{ cursor: "pointer" }}
      >
        <div className="h-[30px] w-[15px]">
          <input
            type="radio"
            className="shadow-none"
            checked={value === "Transferencia Bancaria"}
            onChange={e => {
              e.stopPropagation();
              onChange("Transferencia Bancaria");
            }}
            name="payment"
            onClick={e => e.stopPropagation()}
          />
        </div>
        <div className="flex flex-col items-start">
          <p>Transferencia bancaria</p>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToggleComponent;

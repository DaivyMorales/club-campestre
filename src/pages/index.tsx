import ToggleComponent from "@/components/ToggleComponent";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ButtonReservation from "@/components/ButtonReservation";
import { breakfast, lunch, bar } from "@/utils/Food";

function Home() {
  return (
    <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
      {/* <ButtonReservation/> */}

      {/* Breakfast */}
      <div className="flex flex-col">
        <h3 className="mb-4 text-xl font-bold">Desayunos</h3>
        <div className="mb-10 grid w-[1200px] grid-cols-4 gap-x-10">
          {breakfast.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer items-center justify-between  border-b-[1px] border-gray-200 px-2 py-3"
            >
              <div className="justify-betweens flex flex-col items-start gap-4">
                <h4>{item.name}</h4>
                <p className="text-md font-light text-gray-500">
                  {item.description}
                </p>
                <p className="font-semibold">$ {item.price.toLocaleString()}</p>
              </div>
              {item.imageUrl && (
                <img
                  className="h-[95px] w-[95px] rounded-xl border-[1px] border-gray-200 shadow-xs"
                  src={item.imageUrl}
                  alt={item.name}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lunch */}
     <div className="flex flex-col">
     <h3 className="mb-4 text-xl font-bold">Almuerzos</h3>
      <div className="mb-10 grid grid-cols-4 w-[1200px] gap-x-10">
        {lunch.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center justify-between border-b-[1px] border-gray-200 py-3"
          >
            <div className="justify-between flex flex-col items-start gap-4">
              <h4>{item.name}</h4>
              <p className="text-sm font-light text-gray-500">
                {item.description}
              </p>
              <h3>$ {item.price.toLocaleString()}</h3>
            </div>
            {item.imageUrl && (
              <img
                className="h-[120px] w-[120px] rounded-xl"
                src={item.imageUrl}
                alt={item.name}
              />
            )}
          </motion.div>
        ))}
      </div>
     </div>

      {/* Bar */}
     <div className="flex flex-col">
     <h3 className="mb-4 text-xl font-bold">Bar</h3>
      <div className="grid grid-cols-4 w-[1200px] gap-x-10">
        {bar.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center justify-center gap-4 border-b-[1px] border-gray-200 py-3"
          >
            <div className="justify-betweens flex flex-col items-start gap-4">
              <h4>{item.name}</h4>
              <p className="text-sm font-light text-gray-500">
                {item.description}
              </p>
              <h3>$ {item.price.toLocaleString()}</h3>
            </div>
            {item.imageUrl && (
              <img
                className="h-[120px] w-[120px] rounded-xl"
                src={item.imageUrl}
                alt={item.name}
              />
            )}
          </motion.div>
        ))}
      </div>
     </div>
    </div>
  );
}

export default Home;

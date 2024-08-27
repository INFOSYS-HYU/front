import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 transition-all duration-100">
      <motion.div
        className={`w-full rounded-xl p-5 drop-shadow-md flex cursor-pointer ${
          active ? "bg-black" : "bg-gray-6"
        }`}
        onClick={() => setActive(!active)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="relative mr-2 w-5 flex justify-center items-center"
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`absolute w-3 h-0.5 rounded-full ${
              active ? "bg-white" : "bg-black"
            }`}
          />
          <motion.div
            className={`absolute w-3 h-0.5 rounded-full ${
              active ? "bg-white" : "bg-black"
            }`}
            animate={{ rotate: active ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.h1
          className={`text-xl ${active ? "text-white" : "text-darkgray"}`}
          animate={{ color: active ? "#FFFFFF" : "#333333" }}
        >
          {title}
        </motion.h1>
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="w-full rounded-xl bg-white p-8 drop-shadow-md text-lg">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
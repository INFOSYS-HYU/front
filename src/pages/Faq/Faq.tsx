import FaqItem from "@/components/faq/FaqItem";
import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Faq = () => {
  return (
    <div className="flex flex-col gap-16 my-20">
      <h1 className="text-3xl font-bold text-center">FAQ</h1>
      <div className="w-faq my-10 mx-auto flex flex-col gap-5">
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
    </div>
  );
};

export default Faq;

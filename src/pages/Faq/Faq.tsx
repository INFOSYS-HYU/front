import FaqItem from "@/components/faq/FaqItem";
import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Banner from "@/components/ui/banner";

const Faq = () => {
  return (
    <>
      <Banner text="FAQ" />
      <div className="w-faq mb-20 mx-auto flex flex-col gap-5">
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
    </>
  );
};

export default Faq;

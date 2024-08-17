import Banner from "@/components/ui/banner";
import { Button } from "@mui/material";
import React from "react";

const Finance = () => {
  return (
    <div>
      <Banner text="결산안" />
      <div className="w-finance mx-auto mb-20">
        <h1 className="text-2xl font-semibold text-center">2024년도 1분기</h1>
        <Button variant="contained" color="primary" className="mx-auto">
          목록
        </Button>
      </div>
    </div>
  );
};

export default Finance;

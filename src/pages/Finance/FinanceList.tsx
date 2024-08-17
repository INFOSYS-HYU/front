import Banner from "@/components/ui/banner";
import FinanceItem from "@/components/finance/FinanceItem";
import React from "react";

const FinanceList = () => {
  return (
    <div>
      <Banner text="결산안" />
      <div className="w-finance mx-auto">
        <h1 className="text-2xl font-semibold mb-6">2024년도</h1>
        <div className="w-full flex flex-wrap gap-5 mb-20">
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
          <FinanceItem />
        </div>
      </div>
    </div>
  );
};

export default FinanceList;

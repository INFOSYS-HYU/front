import React from "react";
import { Link } from "react-router-dom";

const FinanceItem = () => {
  return (
    <Link
      to="/finance/financedetail"
      className="w-52 h-20 bg-gray-6 drop-shadow-md rounded-lg flex justify-start items-center px-5"
    >
      <p className="text-sm font-semibold hover:text-white">1분기 결산안</p>
    </Link>
  );
};

export default FinanceItem;

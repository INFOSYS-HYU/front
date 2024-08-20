import Banner from "@/components/ui/banner";
import FinanceItem from "@/components/finance/FinanceItem";
import { useEffect, useState } from "react";
import { getAllFinance } from "@/api/notice";

const examples = [
  {
    id: 1,
    year: 2024,
    quarter: 1,
  },
  {
    id: 2,
    year: 2024,
    quarter: 2,
  },
  {
    id: 3,
    year: 2024,
    quarter: 3,
  },
  {
    id: 4,
    year: 2024,
    month: 1,
  },
  {
    id: 5,
    year: 2024,
    month: 1,
  },
];

const FinanceList = () => {
  const [financeList, setFinanceList] = useState([]);

  useEffect(() => {
    const getFinanceList = async () => {
      try {
        // const res = await getAllFinance();
        // setFinanceList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFinanceList();
  }, []);

  return (
    <div>
      <div className="w-finance mx-auto">
        <h1 className="text-2xl font-semibold mb-6">2024년도</h1>
        <div className="w-full flex flex-wrap gap-5 mb-20">
          {examples.map((example) => (
            <FinanceItem
              key={example.id}
              id={example.id}
              quarter={example.quarter}
              month={example.month}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceList;

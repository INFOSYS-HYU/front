import Banner from "@/components/ui/banner";
import FinanceItem from "@/components/finance/FinanceItem";
import { useEffect, useState } from "react";
import { getAllFinance } from "@/api/notice";
interface Finance {
  id: number;
  quarter: number;
  year: number;
  month: number;
}

const FinanceList = () => {
  const [financeList, setFinanceList] = useState<Finance[] | null>(null);

  useEffect(() => {
    const getFinanceList = async () => {
      try {
        const res = await getAllFinance();
        // console.log(res.data.response);
        setFinanceList(res.data.response);
        // financeList && console.log(financeList);
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
          {financeList &&
            financeList.map((example, index) => (
              <FinanceItem
                key={index}
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

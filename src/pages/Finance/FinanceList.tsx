import FinanceItem from "@/components/finance/FinanceItem";
import { useEffect, useState } from "react";
import { getAllFinance } from "@/api/finance";

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
        setFinanceList(res);
        financeList && console.log(financeList);
      } catch (error) {
        console.log(error);
      }
    };
    getFinanceList();
  }, []);

  return (
    <div>
      <div>
        <div className="w-finance mx-auto">
          <h1 className="text-2xl font-semibold mb-6">2024년도</h1>
          <div className="w-full flex flex-wrap gap-5 mb-20">
            {financeList &&
              financeList.map((item, index) => (
                <FinanceItem
                  key={item.id} // 유니크한 key를 사용
                  id={item.id}
                  quarter={item.quarter}
                  month={item.month}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceList;

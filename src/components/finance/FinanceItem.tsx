import { Link } from "react-router-dom";

interface FinanceItemProps {
  id: number;
  month?: number;
  quarter?: number;
}

const FinanceItem = ({ id, month, quarter }: FinanceItemProps) => {
  return (
    <Link
      to={`/notice/finance/${id}`}
      className="w-52 h-20 bg-gray-6 drop-shadow-md rounded-lg px-5 py-auto text-sm font-semibold flex justify-start items-center duration-200 ease-in-out hover:text-white hover:bg-black/85"
    >
      {month ? <p>{month}월 결산안</p> : <p>{quarter}분기 결산안</p>}
    </Link>
  );
};

export default FinanceItem;

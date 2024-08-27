import { Link } from "react-router-dom";
interface NoticeItemProps {
  admin?: boolean;
  id: number;
  title: string;
  uploadDate: string;
  paginationId?: number;

}

const NoticeItem = ({
  id,
  title,
  uploadDate,
}: NoticeItemProps) => {
  return (
    <Link
      to={`/notice/detail/${id}`}
      className="w-full flex items-center px-7 py-4 border-2 border-gray-4 rounded-xl justify-between gap-1 duration-200 ease-in-out hover:border-black hover:cursor-pointer "
    >
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-gray-1 font-semibold">{uploadDate}</p>
    </Link>
  );
};

export default NoticeItem;

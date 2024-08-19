import { Link } from "react-router-dom";
interface NoticeItemProps {
  id: number;
  title: string;
  uploadDate: string;
}

const NoticeItem = ({ id, title, uploadDate }: NoticeItemProps) => {
  return (
    <Link
      to={`/notice/noticeDetail/${id}`}
      className="w-full px-7 py-4 border-2 border-gray-4 rounded-xl flex flex-col gap-1 duration-200 ease-in-out hover:border-black cursor-pointer "
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-base text-gray-1 font-semibold">{uploadDate}</p>
    </Link>
  );
};

export default NoticeItem;

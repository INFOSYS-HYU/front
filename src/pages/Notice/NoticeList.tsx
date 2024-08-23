import { useEffect, useState } from "react";
import NoticeItem from "@/components/notice/NoticeItem";
import Banner from "@/components/ui/banner";
import { Pagination, PaginationItem } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getAllNotice } from "@/api/notice";

// const examples = [
//   {
//     id: 1,
//     title: "공지사항 제목 1",
//     upload_date: "2024.07.22.월",
//   },
//   {
//     id: 2,
//     title: "공지사항 제목 2",
//     upload_date: "2024.07.23.화",
//   },
//   {
//     id: 3,
//     title: "공지사항 제목 3",
//     upload_date: "2024.07.24.수",
//   },
//   {
//     id: 4,
//     title: "공지사항 제목 4",
//     upload_date: "2024.07.25.목",
//   },
//   {
//     id: 5,
//     title: "공지사항 제목 5",
//     upload_date: "2024.07.26.금",
//   },
// ];

const NoticeList = () => {
  const params = useParams();
  const [noticeList, setNoticeList] = useState([]);
  const paginationId = Number(params.paginationId);

  useEffect(() => {
    const getNoticeList = async () => {
      try {
        const res = await getAllNotice(paginationId);
        // console.log(res);
        if (res.data) {
          setNoticeList(res.data);
          console.log(noticeList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNoticeList();
  }, []);

  return (
    <>
      <Banner text="공지사항" />
      <div className="w-noticelist mx-auto flex flex-col gap-16 mb-20">
        <div className="w-full flex flex-col gap-5 ">
          {noticeList.map((item) => (
            <NoticeItem
              key={item.id}
              id={item.id}
              paginationId={paginationId}
              title={item.title}
              uploadDate={item.date}
            />
          ))}
        </div>
        <Pagination
          count={10}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/notice/${item.page}`}
              {...item}
            />
          )}
          className="mx-auto"
        />
      </div>
    </>
  );
};

export default NoticeList;

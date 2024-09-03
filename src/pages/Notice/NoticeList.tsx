import { useEffect, useState } from "react";
import NoticeItem from "@/components/notice/NoticeItem";
import Banner from "@/components/ui/banner";
import { Pagination, PaginationItem } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllNotice, NoticeType } from "@/api/notice";

const NoticeList = () => {
  const { page = "1" } = useParams();
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState<NoticeType[]>([]);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await getAllNotice(currentPage);
        if (res) {
          setNoticeList(res.notices);
          setTotalPages(res.totalPages);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

  const handlePageChange = (event, value) => {
    navigate(`/notice/${value}`);
  };

  return (
    <>
      <Banner text="공지사항" />
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-16 mb-20">
        <div className="w-full px-4 flex flex-col gap-2">
          {noticeList.map((item) => (
            <NoticeItem
              key={item.id}
              id={item.id}
              title={item.title}
              uploadDate={item.date}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/notice/${item.page}`}
                {...item}
              />
            )}
            className="mx-auto"
          />
        )}
      </div>
    </>
  );
};

export default NoticeList;
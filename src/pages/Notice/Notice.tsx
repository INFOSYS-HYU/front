import { getNotice, NoticeType } from "@/api/notice";
import Banner from "@/components/ui/banner";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

const Notice = () => {
  const param = useParams();
  const [notice, setNotice] = useState<NoticeType>();

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const id = Number(param.noticeId);
        const res = await getNotice(id);
        setNotice(res);
      } catch (error) {
        console.log(error);
      }
    };
    getNoticeData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    notice && 
    <>
      <Banner text="공지사항" />
      <div className="max-w-4xl mx-auto flex flex-col gap-16 mb-20">
        <div className="w-full h-notice rounded-md mx-auto">
          <div className="slider-container w-notice h-notice rounded-md mx-auto">
            <Slider {...settings}>
              {notice.img1?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="사진"
                  className="w-full h-notice rounded-md"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full p-8 border-2 border-gray-4 rounded-xl flex flex-col gap-5">
          <h1 className="text-xl font-semibold">{notice?.title}</h1>
          <h2 className="text-base text-gray-1 font-semibold mb-1">
            {notice?.date}
          </h2>
          <div className="min-h-28">
            <p className="text-wrap">{notice?.content}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={`/notice/${param.paginationId}`}>
            <Button size="large" variant="contained" color="primary">
              목록
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notice;

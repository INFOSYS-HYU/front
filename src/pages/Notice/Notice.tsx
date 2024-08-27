import { getNotice, NoticeType } from "@/api/notice";
import Banner from "@/components/ui/banner";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

const example = {
  title: "공지사항 제목",
  upload_date: "2024.12.20",
  description: [
    "일시: ",
    "장소: ",
    "내용: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  ],
  image_url: ["1.jpg", "2.jpg", "5.png"],
};

const Notice = () => {
  const param = useParams();
  const [notice, setNotice] = useState<NoticeType>();

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const id = Number(param.noticeId);
        console.log(id)
        // const params = { id: id };
        const res = await getNotice(id);
        console.log(res);
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
    <>
      <Banner text="공지사항" />
      <div className="w-notice mx-auto flex flex-col gap-16 mb-20">
        <div className="w-full h-notice rounded-md mx-auto">
          <div className="slider-container w-full h-notice rounded-md mx-auto">
            <Slider {...settings}>
              {example.image_url.map((item, index) => (
                <img
                  key={index}
                  src={`/assets/images/${item}`}
                  alt="사진"
                  className="w-full h-notice rounded-md"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full p-8 border-2 border-gray-4 rounded-xl flex flex-col gap-5">
          <h1 className="text-xl font-semibold">{example.title}</h1>
          <h2 className="text-base text-gray-1 font-semibold mb-1">
            {example.upload_date}
          </h2>
          <div className="min-h-28">
            <p className="text-wrap">{example.description}</p>
            {/* {notice.desc.map((item, index) => (
            ))} */}
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

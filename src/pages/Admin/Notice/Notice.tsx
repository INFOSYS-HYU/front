import { getNotice } from "@/api/notice";
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
  const [notice, setNotice] = useState({});

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const id = Number(param.noticeId);
        const params = { id: id };
        // const res = await getNotice({ id, params });
        // setNotice(res.data)
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
            {example.description.map((item, index) => (
              <p key={index} className="text-wrap">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <Button size="large" variant="outlined" color="primary">
            수정
          </Button>
          <Link to={`/admin/notice/${param.paginationId}`}>
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

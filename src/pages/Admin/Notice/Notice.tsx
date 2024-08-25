import { getNotice } from "@/api/notice";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

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
          {/* <Link to={`/admin/notice/${param.paginationId}`}>
            <Button size="large" variant="contained" color="primary">
              목록
            </Button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Notice;

import { getFinance } from "@/api/finance";
import {  } from "@/api/notice";
import Banner from "@/components/ui/banner";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

// example => finance
const example = {
  id: 1,
  year: 2024,
  month: 1,
  image_url: ["1.jpg", "2.jpg", "5.png"],
};

const Finance = () => {
  const param = useParams();
  const [finance, setFinance] = useState({});

  useEffect(() => {
    const getFinanceData = async () => {
      try {
        const id = Number(param.financeId);
        // const params = { id: id };
        const res = await getFinance({ id });
        console.log(res);
        setFinance(res);
      } catch (error) {
        console.log(error);
      }
    };
    getFinanceData();
  }, [param.financeId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="w-finance mx-auto mb-20">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {finance.title}
          {/* {example.year}년도{" "} */}
          {/* {example.quarter ? `${example.quarter}분기` : `${example.month}월`} */}
          {/* {"quarter" in finance && finance.quarter
            ? `${finance.quarter}분기`
            : `${finance.month}월`} */}
        </h1>
        <div className="w-[600px] h-[600px] rounded-md mx-auto">
          <div className="slider-container w-[600px] h-[600px] rounded-md mx-auto">
            <Slider {...settings}>
              {example.image_url.map((item, index) => (
                <img
                  key={index}
                  src={`/assets/images/${item}`}
                  alt="사진"
                  className="w-[600px] h-[600px] rounded-md"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/notice/finance">
            <Button variant="contained" color="primary">
              목록
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Finance;

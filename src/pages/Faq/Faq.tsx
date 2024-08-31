import React from "react";
import FaqItem from "@/components/faq/FaqItem";
import Banner from "@/components/ui/banner";

const Faq = () => {
  const faqData = [
    {
      title: "정보시스템은 어떤 전공인가요?",
      description: "컴퓨터과학과 경영햑의 복합 학문으로 각 학문의 핵심 과목에서 얻은 지식을 기반으로 조직의 생산성을 높이기 위한 정보시스템을 구축, 설계, 운용하는 방법에 대한 지식을 얻는 것이 목적입니다. 즉 조직에서 컴퓨터가 어떻게 활용되고 정보자원이 어떻게 하면 경영 성과를 높일 수 있는가에 관한 구체적인 학문입니다."
    },
    {
      title: "졸업 후 진로가 어떻게 되나요?",
      description: "경영학, 정보컴퓨터공학을 접목한 복합적 학문이라는 이점을 활용하여, 졸업생들은 졸업 후 컴퓨터 및 경영 분야에 광범위하게 진출할 수 있습니다. 주요 진출분야는 IT대기업, 금융권, 대학원, 창업 등이 있습니다."
    },
    {
      title: "학생회비는 어떻게 내면 되나요?",
      description: "정규 신입학생은 입학 전 미리배움터와 새로배움터, 입학 후 공지방을 통해 납부 절차를 안내드립니다. 전과 또는 복무 중 입학 등으로 납부기간을 놓쳤을 경우 학생회장에게 문의하시길 바랍니다. 학생회비는 학생회칙에 의거하여 관리 및 공개되고 있습니다. 정기적으로 인스타, 학생회 웹사이트, 개강총회를 통해 학생회비 결산 내역을 공개합니다."
    },
    {
      title: "학생회실은 어디에 있나요?",
      description: "한양대학교 서울캠퍼스 ITBT관(정보통신관) 202-1호입니다. 상주 학생회는 없으니 참고하시길 바랍니다."
    },
    {
      title: "영어 전공이 많다던데 정말인가요?",
      description: "매해 영어전용수업의 비중은 달라집니다. 타학과보다 영어전용수업이 많은 것은 사실이나 절대평가라는 이점이 존재합니다."
    },
    {
      title: "정보시스템학과에 진학하고 싶은데, 성적이 궁금해요",
      description: "학생회에서 진학 관련 상담은 진행하지 않습니다. 매해 입시가 달라지기 때문에, 입시 전문가와 전문 사이트를 이용해주시길 바랍니다."
    }
  ];

  return (
    <>
      <Banner text="FAQ" />
      <div className="w-faq mb-20 mx-auto flex flex-col gap-5">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Faq;
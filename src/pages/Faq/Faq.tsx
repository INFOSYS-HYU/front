import React from "react";
import FaqItem from "@/components/faq/FaqItem";
import Banner from "@/components/ui/banner";

const Faq = () => {
  const faqData = [
    {
      title: "질문 제목 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "질문 제목 2",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
      title: "질문 제목 3",
      description: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "질문 제목 4",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      title: "질문 제목 5",
      description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
    },
    {
      title: "질문 제목 6",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form."
    },
    {
      title: "질문 제목 6",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form."
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
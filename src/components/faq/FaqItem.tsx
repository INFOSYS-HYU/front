import React, { useState } from "react";

const FaqItem = () => {
  const [active, setactive] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`w-full rounded-xl p-5 drop-shadow-md flex duration-400 ease-in-out ${
          active ? "bg-black" : "bg-gray-6"
        }`}
        onClick={() => setactive(!active)}
      >
        <div className="relative ">
          <div
            className={`absolute w-3 h-0.5 rounded-full  rotate-45 ${
              active ? "bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`absolute left-4 w-3 h-0.5 rounded-full -rotate-45 ${
              active ? "bg-white" : "bg-black"
            }`}
          ></div>
        </div>
        <h1 className={`text-xl ${active ? "text-white" : "text-darkgray"}`}>
          질문 제목
        </h1>
      </div>
      <p
        className={`w-full rounded-xl bg-white p-8 drop-shadow-md text-lg duration-400 ${
          active ? "block" : "hidden"
        } `}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default FaqItem;

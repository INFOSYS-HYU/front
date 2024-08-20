import React, { useState } from "react";

const FaqItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [active, setactive] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`w-full rounded-xl p-5 drop-shadow-md flex duration-400 ease-in-out ${
          active ? "bg-black" : "bg-gray-6"
        }`}
        onClick={() => setactive(!active)}
      >
        <div className={`relative mr-2 w-5 flex justify-center items-center `}>
          <div>
            <div
              className={`absolute w-3 h-0.5 rounded-full rotate-45 ${
                active ? "top-[9px] bg-white" : "left-0 bg-black"
              }`}
            ></div>
            <div
              className={`absolute w-3 h-0.5 rounded-full -rotate-45 ${
                active ? "bottom-[9px] bg-white" : "right-0 bg-black"
              }`}
            ></div>
          </div>
        </div>
        <h1 className={`text-xl ${active ? "text-white" : "text-darkgray"}`}>
          {title}{" "}
        </h1>
      </div>
      <p
        className={`w-full rounded-xl bg-white p-8 drop-shadow-md text-lg duration-400 ${
          active ? "block" : "hidden"
        } `}
      >
        {description}
      </p>
    </div>
  );
};

export default FaqItem;

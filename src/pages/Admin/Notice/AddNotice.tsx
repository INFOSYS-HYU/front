import { addNotice } from "@/api/admin";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface InputType {
  title: string;
  date: string;
  description: string;
  files: File[];
}

const AdminAddNotice: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<InputType>({
    title: "",
    date: "",
    description: "",
    files: []
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInput(prev => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
    addNotice(input)
    navigate('/notice');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h3 className="text-2xl text-center mb-12">추가하기</h3>
      <div className="w-full p-8 border border-gray-300 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-xl mb-2">
              공지사항 제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              placeholder="제목"
              className="w-full h-10 border-2 border-gray-300 rounded-md px-3"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-xl mb-2">
              업로드한 날짜
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={input.date}
              onChange={handleInputChange}
              className="w-full h-10 border-2 border-gray-300 rounded-md px-3"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-xl mb-2">
              내용
            </label>
            <textarea
              id="description"
              name="description"
              value={input.description}
              onChange={handleInputChange}
              placeholder="내용"
              className="w-full h-52 border-2 border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="files" className="text-xl mb-2">
              파일 선택
            </label>
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleFileChange}
              multiple
              className="w-full"
            />
          </div>
          <div>
            {input.files.map((file, index) => (
              <div key={index} className="text-sm text-gray-600">{file.name}</div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            제출
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddNotice;
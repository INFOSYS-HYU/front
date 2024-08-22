import React, { useState } from "react";

interface Files {
  file: File;
}

const AdminAddNotice = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;

    //   if (newFiles) {
    //     const fileArray: File[] = Array.from(newFiles).map((file) => ({
    //       file: file,
    //     }));
    //     console.log(fileArray);
    //     setFiles((prevfiles) => [...prevfiles, fileArray.file]);
    //   }
    // };

    // const [files, setFiles] = useState<FileWithId[]>([]);

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const selectedFiles = e.target.files;
    //   if (selectedFiles) {
    //     const newFiles: FileWithId[] = Array.from(selectedFiles).map((file) => ({
    //       id: crypto.randomUUID(), // 고유한 ID 생성
    //       file: file,
    //     }));
    //     setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    //   }
  };

  return (
    <div>
      <h3 className="text-2xl text-center mb-12">추가하기</h3>
      <div className="w-[476px] p-8 border border-gray-4 rounded-xl mx-auto">
        <form className="flex flex-col gap-3">
          <div className="flex gap-6">
            <label htmlFor="title" className="text-2xl text-nowrap">
              공지사항 제목
            </label>
            <input
              type="text"
              id="title"
              placeholder="제목"
              className="w-full h-10 border-2 border-black rounded-md px-1"
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="uploadDate" className="text-2xl text-nowrap">
              업로드한 날짜
            </label>
            <input
              type="date"
              id="uploadDate"
              className="w-full h-10 border-2 border-black rounded-md px-1"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-2xl text-nowrap">
              내용
            </label>
            <textarea
              id="description"
              placeholder="내용"
              className="w-full h-52 border-2 border-black rounded-md p-1"
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="uploadFile" className="text-2xl text-nowrap">
              파일 선택
            </label>
            <input
              type="file"
              id="uploadFile"
              onChange={handleFileUpload}
              multiple
            />
          </div>
          {/* <div>
            {files.map((file) => (
              <div key={file.id}>{file.file.name}</div>
            ))}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default AdminAddNotice;

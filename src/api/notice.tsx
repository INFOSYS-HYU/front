import axios from "axios";

const context = "http://localhost:3001";

// finance - 전체 결산안 가져오기
export const getAllFinance = async () => {
  return await axios.get(context + "/api/finance");
};
// finance - 특정 결산안 가져오기
export const getFinance = async ({ id }: { id: number }) => {
  return await axios.get(`${context}/api/finance/`, {
    params: { id: id },
  });
};

// notice - 페이지별로 전체 공지사항 가져오기
export const getAllNotice = async (page: number) => {
  return await axios.get(`${context}/api/notice/${page}`);
};
// notice - 특정 공지사항 가져오기
export const getNotice = async ({
  id,
  params,
}: {
  id: number;
  params: { [key: string]: any };
}) => {
  return await axios.get(`${context}/api/notice/${id}`, {
    params: params,
  });
};

// notice - 새 공지사항 생성 이건 이미지까지 받아야함
export const createNotice = async (notice: {
  title: string;
  content: string;
}) => {
  return await axios.post(`${context}/api/admin/notice`, notice);
};

// notice - 공지사항 수정 얘도 이미지까지..
export const updateNotice = async (notice: {
  id: number;
  title: string;
  content: string;
}) => {
  return await axios.put(`${context}/api/admin/notice/${notice.id}`, notice);
};

// notice - 공지사항 삭제
export const deleteNotice = async (id: number) => {
  return await axios.delete(`${context}/api/admin/notice/${id}`);
};

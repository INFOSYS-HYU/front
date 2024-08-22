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
export const getAllNotice = async (paginationId: number) => {
  return await axios.get(`${context}/api/notice/${paginationId}`);
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

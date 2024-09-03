import axios from "axios";

const context = "http://localhost:3001";

// 타입 정의
export interface NoticeType {
  id: number;
  title: string;
  content: string;
  date: string;
  img1?: string[];
}


// notice - 페이지별로 전체 공지사항 가져오기
export const getAllNotice = async (page = 1) => {
  try {
    const response = await axios.get<{ notices: NoticeType[]; totalPages: number; currentPage: number }>(`${context}/api/notice/${page}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(`Error fetching notices for page ${page}:`, error);
    throw error;
  }
};

// notice - 최근 공지사항 4개 가져오기
export const getRecentNotices = async () => {
  try {
    const response = await axios.get(`${context}/api/notice/recent`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recent notices:", error);
    throw error;
  }
};

// notice - 특정 공지사항 가져오기
export const getNotice = async (id: number) => {
  try {
    const response = await axios.get<NoticeType>(`${context}/api/notice/detail/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(`Error fetching notice for id ${id}:`, error);
    throw error;
  }
};

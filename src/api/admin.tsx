import axios from 'axios';

const context = "http://localhost:3001";

export interface InputType {
  title: string;
  content: string;
  image?: File[];
}

export interface NoticeType extends InputType {
  NoticeID: number;
  Upload_DATE: string;
}

export const addNotice = async (input: InputType): Promise<NoticeType> => {
  try {
    const response = await axios.post<NoticeType>(`${context}/api/admin/notice`, input, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('공지사항이 성공적으로 추가되었습니다:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('공지사항 추가 중 오류 발생:', error.response?.data || error.message);
    } else {
      console.error('공지사항 추가 중 알 수 없는 오류 발생:', error);
    }
    throw error;
  }
};


// notice - 새 공지사항 생성
export const createNotice = async (notice: { title: string; content: string }) => {
  try {
    const response = await axios.post<Notice>(`${context}/api/notice`, notice);
    return response.data;
  } catch (error) {
    console.error("Error creating notice:", error);
    throw error;
  }
};

// notice - 공지사항 수정
export const updateNotice = async (notice: { id: number; title: string; content: string }) => {
  try {
    const response = await axios.put<Notice>(`${context}/api/notice/${notice.id}`, notice);
    return response.data;
  } catch (error) {
    console.error(`Error updating notice for id ${notice.id}:`, error);
    throw error;
  }
};

// notice - 공지사항 삭제
export const deleteNotice = async (id: number) => {
  try {
    const response = await axios.delete(`${context}/api/notice/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting notice for id ${id}:`, error);
    throw error;
  }
};
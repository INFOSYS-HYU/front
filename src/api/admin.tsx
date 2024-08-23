import axios from 'axios';

const context = "http://localhost:3001";

interface InputType {
  title: string;
  content: string;
  image?: File[];
}

interface NoticeType extends InputType {
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
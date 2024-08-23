const context = "http://localhost:3001";

interface InputType {
    title: string;
    date: string;
    description: string;
    files: File[];
  }
export const addNotice = async (input:InputType) => {
  try {
    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('date', input.date);
    formData.append('description', input.description);

    // 파일 추가
    input.files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const response = await fetch(`${context}/api/admin/notice`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('서버 응답이 실패했습니다.');
    }

    const result = await response.json();
    console.log('공지사항이 성공적으로 추가되었습니다:', result);
    return result;
  } catch (error) {
    console.error('공지사항 추가 중 오류 발생:', error);
    throw error;
  }
};

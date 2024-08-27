import axios from "axios";

const context = "http://localhost:3001";

// 타입 정의
export interface FinanceItem {
    id: number;
    year: number;
    month: number;
    quarter: number;
}
  

// finance - 전체 결산안 가져오기
export const getAllFinance = async () => {
    try {
      const response = await axios.get(`${context}/api/finance`);
      return response.data.response;
    } catch (error) {
      console.error("Error fetching all finance data:", error);
      throw error;
    }
  };
  
  // finance - 특정 결산안 가져오기
  export const getFinance = async (id: number) => {
    try {
      const response = await axios.get<FinanceItem>(`${context}/api/finance/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching finance data for id ${id}:`, error);
      throw error;
    }
  };
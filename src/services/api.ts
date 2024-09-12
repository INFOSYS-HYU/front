import { User } from "@/atoms/atom";
import axios from "../utils/axios";
import { useGoogleLogin } from "@react-oauth/google";
import { m } from "framer-motion";

interface LoginResponse {
  user: User;
  accessToken: string;
}

export const loginWithGoogle = async (
  token: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.get<LoginResponse>("/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Failed to login with Google");
  }
};

export const refreshToken = async (): Promise<string> => {
  try {
    const response = await axios.post<{ accessToken: string }>(
      "/auth/refresh-token"
    );
    return response.data.accessToken;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw new Error("Failed to refresh token");
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axios.post("/auth/logout");
  } catch (error) {
    console.error("Logout failed:", error);
    throw new Error("Failed to logout");
  }
};

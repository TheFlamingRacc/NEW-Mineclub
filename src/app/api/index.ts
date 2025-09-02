import axios from "axios";
import { cookies } from "next/headers";

export type UserAuth = {
  userName: string,
  userLogo: string,
  userEmail: string,
  userSetBackground: string,
  userSavedImages: [],
  userBills: [],
}

export type MascotImagesData = MascotImageItem[]

export type MascotImageItem = {
  image: string,
  id: number,
  likes: number,
  likedByUser: boolean,
  savedByUser: boolean
}

export const httpClient = axios.create({
  baseURL: "https://raw-umbertapir.onpella.app",
});

// VERIFY_TOKEN

export async function verifyTokenServer() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt-token")?.value;

  if (!token) {
    return { status: "unauthorized", user: { userName: '', userLogo: '' } };
  }

  try {
    const res = await httpClient.post<UserAuth>(
      "/api/verify-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const { userName, userLogo } = res.data;

    if (res.status === 200) {
      return { status: "authorized", user: { userName, userLogo } };
    }

    if (res.status === 401) {
      return { status: "unauthorized", user: { userName: '', userLogo: '' } };
    }

    return { status: "error", user: {userName: '', userLogo: ''}};
  } catch (err) {
    console.error("Verify token error:", err);
    return { status: "error", user: {userName: '', userLogo: ''} };
  }
}


export async function verifyTokenClient() {
  const res = await fetch("/api/verify-token", { method: "POST" });
    if (res.status === 200) return "authorized";
    if (res.status === 401) return { status: "unauthorized", user: { userName: '', userLogo: '' } };
    return  { status: "error", user: {userName: '', userLogo: ''} }; // будь-які інші коди (403, 500, 502 тощо)
}

// GET MASCOT_IMAGES

export async function getMascotImages() {
  try {
    const res = await httpClient.get<MascotImageItem>('/mascot-images')
  } catch (err) {
    console.error(err)
  }
}
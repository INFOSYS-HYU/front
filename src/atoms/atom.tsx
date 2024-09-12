import { atom } from 'recoil';
import { GalleryItem } from '@/types/gallery';
import { Event } from '@/types/calendar';

//캘린더
export const calendarDateState = atom<Date>({
    key: 'calendarDateState',
    default: new Date(),
})
export const calendarModalState = atom<boolean>({
    key: 'calendarModalState',
    default:false,
})

export const calendarSelectDateState = atom<Event[]|null>({
    key: 'calendarSelectEventState',
    default: null,
})

export const calendarEventState = atom<Event[] | null>({
    key: "calendarEventState",
    default:null,
})

//갤러리
export const galleryModalState = atom<boolean>({
    key: 'galleryModalState',
    default: false,
})
export const galleryModalSelectState = atom<GalleryItem | null>({
    key: 'galleryModalSelectState',
    default: null,
})

//auth
export interface User {
    user_id: string;
    name: string;
    email: string;
  }
  
  export interface AuthState {
    user: User | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    loading: boolean;
  }
  
  export const authState = atom<AuthState>({
    key: 'authState',
    default: {
      user: null,
      accessToken: null,
      refreshToken: localStorage.getItem('refreshToken'),
      loading: true,
    },
  });
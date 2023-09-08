import {Dispatch, SetStateAction } from "react";


export interface User {
  name?: string;
  email?: string;
  profileImg?: string;
  bio?: string;
  displayName?: string
}

export interface Links {
  _id: string
  siteLink: string
  siteName: string
  linkImg: string
}
export interface IFile {
  url: string;
  name: string;
}

export type appContextType = {
  links: Links[] | null;
  user: User | null;
  token: null | string;
  description: null | string;
  loading: boolean;
  regError: string;
  loginError: string;
  updateError: string;
  emailVerified: string;
  emailVerifiedLogin: string;
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  updateUser: (displayName: string, desc: string) => Promise<void>;
  updateUserPhoto: (profileImg: string) => Promise<void>;
  changePass: (currentPassword: string, newPassword: string) => Promise<void>;
  logout: () => void;
  getLinks: () => Promise<void>;
  createSitelink: (siteLink: string, siteName: string) => Promise<void>;
  editLinks: (id: string, siteLink: string, siteName: string) => Promise<void>;
  editThumbmail: (id: string, linkImg: string) => Promise<void>;
  deleteLink: (id: string) => Promise<void>;
  setRegError: Dispatch<SetStateAction<string>>;
  setLoginError: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
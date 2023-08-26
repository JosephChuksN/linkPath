import {Dispatch, SetStateAction } from "react";


export type appContextType = {
  links: [];
  user: null | string;
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
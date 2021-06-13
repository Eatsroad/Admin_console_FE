export interface UserSignupdata {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  user_role: string;
}

export interface SignupState {
  user: UserSignupdata;
}

export interface UserSignupResponse {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
}

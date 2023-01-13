export type User = {
  name: string;
  last_name: string;
  email: string;
  password: string;
};

export interface UserResponse {
  id: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
  confirmed: boolean;
}

export interface LoginUser {
  email: string;
  password: string;
}

export type TokenReponse = {
  token: string;
  user: UserResponse;
};

export interface authInterface {
  userId: string;
}

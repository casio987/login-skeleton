export interface IRegisterResponse {
  status: number;
  token: string; 
}

export interface ILoginResponse {
  status: number;
  token: string;
}

export interface IGetUserResponse {
  status: number;
  userDetails: IGetUserResponseBody;
}

export interface IGetUserResponseBody {
  _id: string;
  username: string;
}
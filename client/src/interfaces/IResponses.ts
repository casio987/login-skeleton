export interface IRegisterResponse {
  status: number;
  data: IRegisterResponseBody; 
}
export interface IRegisterResponseBody {
  username: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  token: IRegisterResponseBody // TODO: change to string type
}
export interface IRegisterResponse {
  status: number;
  data: IRegisterResponseBody; 
}
export interface IRegisterResponseBody {
  username: string;
  password: string;
}
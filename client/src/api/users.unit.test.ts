import axios from "axios";
import { registerUser, loginUser, getUser } from "./users";


describe("users api call tests", () => {
  afterEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  })
  
  describe("register user", () => {
    const postSpy = jest.spyOn(axios, "post");
    beforeEach(() => {
      postSpy.mockReturnValueOnce(Promise.resolve({
        status: 201,
        data: "some-mock-token"
      }))
    });
    
    it("should be properly called", async () => {
      await registerUser("username", "password");
      expect(postSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/users/register`, {
        username: "username",
        password: "password"
      });
    });

    it("should return token", async () => {
      const { token } = await registerUser("username", "password");
      expect(token).toEqual("some-mock-token");
    });
    
    it("should store token in sessionstorage if successful", async () => {
      const { token } = await registerUser("username", "password");
      expect(sessionStorage.getItem(process.env.REACT_APP_TOKEN!)).toEqual(token);
    });
  });

  describe("login user", () => {
    const postSpy = jest.spyOn(axios, "post");
    beforeEach(() => {
      postSpy.mockReturnValueOnce(Promise.resolve({
        status: 201,
        data: "some-mock-token"
      }))
    });
    
    it("should be properly called", async () => {
      await loginUser("username", "password");
      expect(postSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/users/login`, {
        username: "username",
        password: "password"
      });
    });

    it("should return token", async () => {
      const { token } = await loginUser("username", "password");
      expect(token).toEqual("some-mock-token");
    });
    
    it("should store token in sessionstorage", async () => {
      const { token } = await loginUser("username", "password");
      expect(sessionStorage.getItem(process.env.REACT_APP_TOKEN!)).toEqual(token);
    });

  });
  describe("get user", () => {
    const getSpy = jest.spyOn(axios, "get");
    beforeEach(() => {
      getSpy.mockReturnValueOnce(Promise.resolve({
        status: 201,
        data: {
          _id: "some-user-id-value",
          username: "some-username-received"
        }
      }));
      sessionStorage.setItem(process.env.REACT_APP_TOKEN!, "this-is-a-token...of-my-appreciation");
    });
    
    it("should be properly called", async () => {
      await getUser();
      expect(getSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/users`, {
        headers: {
          "Authorization": "Bearer this-is-a-token...of-my-appreciation"
        }
      });
    });

    it("should return status and user details", async () => {
      const { status, userDetails } = await getUser();
      expect(status).toEqual(201);
      expect(userDetails).toEqual({
        _id: "some-user-id-value",
        username: "some-username-received"
      });
    });
  });
});
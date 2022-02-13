import { fireEvent, render, waitFor } from "@testing-library/react";
import LoginPage from "./LoginPage";
import * as userApiCalls from "../../api/users";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));

describe("Login Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should render", () => {
    const { queryAllByText } = render(<LoginPage />);
    expect(queryAllByText("Login")).not.toBeNull();
    expect(queryAllByText("username")).not.toBeNull();
    expect(queryAllByText("password")).not.toBeNull();
    expect(queryAllByText("New around? Register here!")).not.toBeNull();
  });

  it("should handle redirect to register page button click", () => {
    const { getByText } = render(<LoginPage />);
    fireEvent.click(getByText("New around? Register here!"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/signup");
  });

  it("should handle successful login click", async () => {
    const loginUserMock = jest.spyOn(userApiCalls, "loginUser");
    loginUserMock.mockReturnValueOnce(Promise.resolve({
      status: 201,
      token: "some-mock-token"
    }));
    const { getByRole } = render(<LoginPage />);
    fireEvent.click(getByRole("button", { name: "Login" }));
    await waitFor(() => 
      expect(mockHistoryPush).toHaveBeenCalledWith("/landing")
    );
  });

  it("should handle unsuccessful login click when incorrect password is provided", async () => {
    const loginUserMock = jest.spyOn(userApiCalls, "loginUser");
    loginUserMock.mockReturnValueOnce(Promise.reject({
      response: {
        status: 401
      }
    }));
    const { getByRole, queryByText } = render(<LoginPage />);
    fireEvent.click(getByRole("button", { name: "Login" }));
    await waitFor(() => 
      expect(queryByText("Your password is incorrect")).not.toBeNull()
    );
  });

  it("should handle unsuccessful login click when non existing username is provided", async () => {
    const loginUserMock = jest.spyOn(userApiCalls, "loginUser");
    loginUserMock.mockReturnValueOnce(Promise.reject({
      response: {
        status: 404
      }
    }));
    const { getByRole, queryByText } = render(<LoginPage />);
    fireEvent.click(getByRole("button", { name: "Login" }));
    await waitFor(() => 
      expect(queryByText("The username you've entered is not connected to an account")).not.toBeNull()
    );
  });
});
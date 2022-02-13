import { fireEvent, render, waitFor } from "@testing-library/react";
import SignUpPage from "./SignUpPage";
import * as userApiCalls from "../../api/users";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));

describe("Sign up page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should render", () => {
    const { queryAllByText } = render(<SignUpPage />);
    expect(queryAllByText("Register")).not.toBeNull();
    expect(queryAllByText("username")).not.toBeNull();
    expect(queryAllByText("password")).not.toBeNull();
    expect(queryAllByText("confirm password")).not.toBeNull();
    expect(queryAllByText("Already have an account? Login here!")).not.toBeNull();
  });

  it("should handle redirect to login page button click", () => {
    const { getByText } = render(<SignUpPage />);
    fireEvent.click(getByText("Already have an account? Login here!"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should handle successful register click", async () => {
    const registerUserMock = jest.spyOn(userApiCalls, "registerUser");
    registerUserMock.mockReturnValueOnce(Promise.resolve({
      status: 201,
      token: "some-mock-token-string"
    }));
    const { getByRole } = render(<SignUpPage />);
    fireEvent.click(getByRole("button", { name: "Register" }));
    await waitFor(() => 
      expect(mockHistoryPush).toHaveBeenCalledWith("/landing")
    );
  });

  it("should handle unsuccessful register click when an existing username is provided", async () => {
    const registerUserMock = jest.spyOn(userApiCalls, "registerUser");
    registerUserMock.mockReturnValueOnce(Promise.reject({
      response : {
        status: 400
      }
    }));
    const { getByRole, queryByText } = render(<SignUpPage />);
    fireEvent.click(getByRole("button", { name: "Register" }));
    await waitFor(() => 
      expect(queryByText("A user with that username already exists"))
    );
  });

  it("should handle unsuccessful register click when mismatching passwords are provided", () => {
    const { getByTestId, getByRole, queryByText } = render(<SignUpPage />);
    const passwordInput = getByTestId("password-textfield");
    const confirmPasswordInput = getByTestId("confirm-password-textfield");
    fireEvent.change(passwordInput, { target : { value: "some-mock-password" } });
    fireEvent.change(confirmPasswordInput, { target : { value: "some-mock-confirm-password" } });
    fireEvent.click(getByRole("button", { name: "Register" }));
    expect(queryByText("The passwords do not match")).not.toBeNull();
  });
});
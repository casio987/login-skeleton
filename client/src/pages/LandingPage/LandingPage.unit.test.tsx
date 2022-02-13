import { fireEvent, render, waitFor } from "@testing-library/react";
import LandingPage from "./LandingPage";
import * as userApiCalls from "../../api/users";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));

describe("Landing page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.clear();
  });

  it("should render", () => {
    const { getByTestId } = render(<LandingPage />);
    expect(getByTestId("landing-page-navbar")).not.toBeNull();
    expect(getByTestId("landing-page-account-icon")).not.toBeNull();
  });

  it("should handle drop down click", () => {
    const { getByTestId, queryByText } = render(<LandingPage />);
    expect(queryByText("Profile")).toBeNull();
    expect(queryByText("Logout")).toBeNull();
    fireEvent.click(getByTestId("landing-page-account-icon"));
    expect(queryByText("Profile")).not.toBeNull();
    expect(queryByText("Logout")).not.toBeNull();
  });

  it("should handle logout", () => {
    const { getByTestId, getByText } = render(<LandingPage />);
    fireEvent.click(getByTestId("landing-page-account-icon"));
    fireEvent.click(getByText("Logout"));
    expect(sessionStorage.getItem(process.env.REACT_APP_TOKEN!)).toEqual("");
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should handle successful profile click", async () => {
    const getUserMock = jest.spyOn(userApiCalls, "getUser");
    getUserMock.mockReturnValueOnce(Promise.resolve({
      status: 201,
      userDetails: {
        _id: "some-mock-id",
        username: "some-mock-username"
      }
    }));
    const { getByTestId, getByText } = render(<LandingPage />);
    fireEvent.click(getByTestId("landing-page-account-icon"));
    fireEvent.click(getByText("Profile"));
    await waitFor(() =>
      expect(
        getByText(
          "Token still valid and username received is some-mock-username"
        )
      ).not.toBeNull()
    );
  });

  it("should handle unsuccessful profile click", async () => {
    const getUserMock = jest.spyOn(userApiCalls, "getUser");
    getUserMock.mockReturnValueOnce(Promise.reject({
      status: 401
    }));
    const { getByTestId, getByText, queryByText } = render(<LandingPage />);
    fireEvent.click(getByTestId("landing-page-account-icon"));
    fireEvent.click(getByText("Profile"));
    await waitFor(() =>
      expect(
        queryByText(
          "Token still valid and username received is"
        )
      ).toBeNull()
    );
  });
});
import { render, fireEvent } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));

describe("ErrorPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should render", () => {
    const { queryByText } = render(<ErrorPage />);
    expect(queryByText("Whoops, something went wrong...")).not.toBeNull();
    expect(queryByText("CLICK HERE TO TRY AGAIN")).not.toBeNull();
  });

  it("should handle try again button click", () => {
    const { getByText } = render(<ErrorPage />);
    fireEvent.click(getByText("CLICK HERE TO TRY AGAIN"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  }); 
});
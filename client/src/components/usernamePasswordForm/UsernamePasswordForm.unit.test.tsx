import UsernamePasswordForm from "./UsernamePasswordForm";
import { fireEvent, render } from "@testing-library/react";

describe("UsernamePasswordForm", () => {
  const mockUsernameChange = jest.fn();
  const mockPasswordChange = jest.fn()
  const mockConfirmPasswordChange = jest.fn();
  
  it("should render without confirm password textfield normally", () => {
    const { queryAllByText, queryByText } = render(
      <UsernamePasswordForm
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        error={undefined}
      />
    );
    expect(queryAllByText("username")).not.toBeNull();
    expect(queryAllByText("password")).not.toBeNull();
    expect(queryByText("confirm password")).toBeNull();
  });

  it("should render with confirm password textfield normally", () => {
    const { queryAllByText } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error={undefined}
      />
    );
    expect(queryAllByText("username")).not.toBeNull();
    expect(queryAllByText("password")).not.toBeNull();
    expect(queryAllByText("confirm password")).not.toBeNull();
  });

  it("should render with error message when trying to log in with a non existing username", () => {
    const { queryByText } = render(
      <UsernamePasswordForm
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        error="user-not-found"
      />
    );
    expect(queryByText("The username you've entered is not connected to an account")).not.toBeNull();
  });

  it("should render with error message when trying to log in with an incorrect password", () => {
    const { queryByText } = render(
      <UsernamePasswordForm
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        error="incorrect-password"
      />
    );
    expect(queryByText("Your password is incorrect")).not.toBeNull();
  });

  it("should render with error message when trying to sign up with an already existing username", () => {
    const { queryByText } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error="user-already-exists"
      />
    );
    expect(queryByText("A user with that username already exists")).not.toBeNull();
  });

  it("should render with error message when trying to sign up with mismatched passwords", () => {
    const { queryByText } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error="mismatch-passwords"
      />
    );
    expect(queryByText("The passwords do not match")).not.toBeNull();
  });


  it("should handle username change when textfield is changed", () => {
    const { getByTestId } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error="mismatch-passwords"
      />
    );
    const usernameInput = getByTestId("username-textfield");
    fireEvent.change(usernameInput, { target: { value: "this-is-a-mock-username" } });
    expect(mockUsernameChange).toHaveBeenCalled();
  });

  it("should handle password change when textfield is changed", () => {
    const { getByTestId } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error="mismatch-passwords"
      />
    );
    const passwordInput = getByTestId("password-textfield");
    fireEvent.change(passwordInput, { target: { value: "this-is-a-mock-password" } });
    expect(mockPasswordChange).toHaveBeenCalled();
  });

  it("should handle confirm password change when textfield is changed", () => {
    const { getByTestId } = render(
      <UsernamePasswordForm
        confirmPasswordValue="confirm-password-value"
        handleUsernameChange={mockUsernameChange}  
        handlePasswordChange={mockPasswordChange}
        handleConfirmPasswordChange={mockConfirmPasswordChange}
        error="mismatch-passwords"
      />
    );
    const confirmPasswordInput = getByTestId("confirm-password-textfield");
    fireEvent.change(confirmPasswordInput, { target: { value: "password-to-be-confirmed" } });
    expect(mockConfirmPasswordChange).toHaveBeenCalled();
  });
});
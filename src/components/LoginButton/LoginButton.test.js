import { fireEvent, render, screen } from '@testing-library/react';
import LoginButton from './LogIn.jsx';

// Log in button test
describe("Login button", () => {
    it("should render 'log in' text in the button", () => {
        render(<LoginButton />);

        // Search 'Log in' text in HTML
        const loginButton = screen.getByText("Log in");

        // Expect Log in to be rendered in HTML
        expect (loginButton).toBeDefined();
    });

    it("should trigger 'log in' props when clicked", () =>{

        // Create a mock function
        const mockedLogin = jest.fn();
        render(<LoginButton login={mockedLogin} />);
        
        // Expect the funtion not to be called.
        expect(mockedLogin).not.toBeCalled();

        // Expect the funtion to be called when clicked.
        const loginButton = screen.getByText("Log in");
        fireEvent.click(loginButton);
        expect(mockedLogin).toBeCalled;
    })
});
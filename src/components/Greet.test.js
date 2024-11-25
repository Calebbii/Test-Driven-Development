import { render, screen } from "@testing-library/react";
import Greet from './Greet'

test("Render Greet Correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test('Greet renders with a name', () => {
    render(<Greet name= "Edwin"/>)
    const textElement = screen.getByText('Hello Edwin');
    expect(textElement).toBeInTheDocument();
})
import { render, screen } from "@testing-library/react"
import App from "./App"
import { expect } from "vitest"
import userEvent from "@testing-library/user-event"
describe("App", () => {
    test("first test", () => {
        render(<App />)
        const linkElement = screen.getByText(/click me/i)
        expect(linkElement).toBeInTheDocument()
    })
    test("seccond test", () => {
        render(<App />)
        const linkElement = screen.getByText(/more details/i)
        expect(linkElement).toBeInTheDocument()
    })
    test("click user",async () => {
        const user = userEvent.setup()
        render(<App />)
        const buttonElement = screen.getByTestId("1")
        await user.click(buttonElement)
        const linkElement = screen.getByAltText("qr code")
        expect(linkElement).toBeInTheDocument()

        const buttonElement2 = screen.getByTestId("2")
        await user.click(buttonElement2)
        const linkElement2 = screen.getByText(/GMT/)
        expect(linkElement2).toBeInTheDocument()
    })
})
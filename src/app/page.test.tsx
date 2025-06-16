import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	it("renders Next.js logo", () => {
		render(<Home />);
		const text = screen.getByText("What's on the agenda today?");
		expect(text).toBeInTheDocument();
	});
});

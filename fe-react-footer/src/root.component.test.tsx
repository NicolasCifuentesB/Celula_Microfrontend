import { render } from "@testing-library/react";
import Root from "./app/root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/BCI/)).toBeInTheDocument();
  });
});

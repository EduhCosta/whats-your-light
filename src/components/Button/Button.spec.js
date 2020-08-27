import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

const renderComponent = (overProps = {}) => {
  const props = { ...overProps };
  return render(<Button {...props} />);
};

describe("Button Component", () => {
  it("Should be rendered a button", () => {
    const { container } = renderComponent();
    const element = container.querySelector("button");
    expect(element).toBeDefined();
  });

  it("Should be rendered the children text", () => {
    const { queryByTestId } = renderComponent({ children: "Good test" });
    const element = queryByTestId("btn");
    expect(element.textContent).toEqual("Good test");
  });

  it("Should call onClick", () => {
    const spy = jest.fn();
    const { queryByTestId } = renderComponent({ onClick: spy });
    const element = queryByTestId("btn");
    fireEvent.click(element);
    expect(spy).toHaveBeenCalled();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

const renderComponent = (overProps = {}) => {
  const props = { ...overProps };
  return render(<Title {...props} />);
};

describe("Title Component", () => {
  it("Should be rendered a title", () => {
    const { container } = renderComponent();
    const element = container.querySelector("h1");
    expect(element).toBeDefined();
  });

  it("Should be rendered a emphasis text", () => {
    const { container } = renderComponent();
    const element = container.querySelector("span");
    expect(element).toBeDefined();
  });
});

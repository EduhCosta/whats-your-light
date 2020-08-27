import React from "react";
import { render } from "@testing-library/react";

import Thumbnail from "./Thumbnail";

const renderComponent = (overProps = {}) => {
  const props = { ...overProps };
  return render(<Thumbnail {...props} />);
};

describe("Thumbnail Component", () => {
  it("Should be rendered a Thumbnail", () => {
    const { container } = renderComponent();
    const element = container.querySelector("img");
    expect(element).toBeDefined();
  });
});

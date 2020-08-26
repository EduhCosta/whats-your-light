import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

const renderComponent = (overProps = {}) => {
  const props = { ...overProps };
  return render(<Home {...props} />, { wrapper: MemoryRouter });
};

describe("Home Screen", () => {
  it("Should be rendered the title", () => {
    const { container } = renderComponent();
    const element = container.querySelector("h1");
    expect(element).toBeDefined();
  });

  it("The title, must be `Welcome to iClinic`", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("title");
    expect(element.textContent).toEqual("Welcome to iClinic");
  });

  it("Should be rendered the subtitle", () => {
    const { container } = renderComponent();
    const element = container.querySelector("h2");
    expect(element).toBeDefined();
  });

  it("The subtitle, must be `Frontend Challenge`", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("subtitle");
    expect(element.textContent).toEqual("Frontend Challenge");
  });

  it("Should be rendered a button", () => {
    const { container } = renderComponent();
    const element = container.querySelector("button");
    expect(element).toBeDefined();
  });

  it("The button`s text, must be `start`", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("btn-start");
    expect(element.textContent).toEqual("start");
  });

  it("Should redirect the user to other screen", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("btn-start");
    fireEvent.click(element);
    expect(window?.location?.pathname).toEqual("/your-light");
  });
});

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import YourLight from "./YourLight";

const renderComponent = (overProps = {}) => {
  const props = { ...overProps };
  return render(<YourLight {...props} />, { wrapper: MemoryRouter });
};

describe("YourLight Screen", () => {
  it("Should be rendered the master name tag", () => {
    const { container } = renderComponent();
    const element = container.querySelector("h1");
    expect(element).toBeDefined();
  });

  it("The title, must be `You master is Darth Vader`", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("https://swapi.dev/api/people/4").reply(200, {
      name: "Darth Vader",
    });

    const { queryByTestId } = renderComponent();

    await waitFor(() => {
      const element = queryByTestId("master-name");
      expect(element.textContent).toEqual("You master is Darth Vader");
    });
  });

  it("The title, must be `You master is Luke Skywalker`", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("https://swapi.dev/api/people/1").reply(200, {
      name: "Luke Skywalker",
    });

    const { queryByTestId } = renderComponent();

    await waitFor(() => {
      const element = queryByTestId("master-name");
      expect(element.textContent).toEqual("You master is Luke Skywalker");
    });
  });

  it("Should be rendered two buttons", () => {
    const { container } = renderComponent();
    const element = container.querySelector("button");
    expect(element).toHaveLength(2);
  });

  it("The button`s text, must be `back`", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("btn-back");
    expect(element.textContent).toEqual("back");
  });

  it("Should redirect the to YourLight screen", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("btn-back");
    fireEvent.click(element);
    expect(window?.location?.pathname).toEqual("/");
  });

  it("The button`s text, must be `choose your path again, Padawan`", () => {
    const { queryByTestId } = renderComponent();
    const element = queryByTestId("btn-select-path");
    expect(element.textContent).toEqual("choose your path again, Padawan");
  });
});

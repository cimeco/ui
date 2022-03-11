import React from "react";
import { mount } from "enzyme";
import Headline from "./headline";

describe("<Headline />", () => {
  const headlineText = "lorem ipsum head";

  it("contains expected text", () => {
    const component = mount(<Headline text={headlineText} />);
    expect(component.text()).toEqual(headlineText);
  });

  it("contains expected classes", () => {
    const headlineClasses = "classA";

    const component = mount(
      <Headline text={headlineText} classes={headlineClasses} />
    );

    expect(component.find("h2.classA").length).toEqual(1);
    expect(component.find("h2.classB").length).toEqual(0);
  });

  it("contains expected link", () => {
    const headlineUrl = "http://localhost";

    const component = mount(<Headline text={headlineText} url={headlineUrl} />);

    expect(component.find("h2 a").length).toEqual(1);
  });
});

import React from "react";
import { mount } from "enzyme";
import Carousel from "./carousel";

describe("<Carousel />", () => {
  it("is amp-carousel", () => {
    const component = mount(<Carousel height={1} width={1.71} />);

    expect(component.find("amp-carousel").length).toEqual(1);
  });

  it("contains expected children", () => {
    const component = mount(
      <Carousel height={1} width={1.71}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>
    );

    expect(component.find("div").length).toEqual(2);
  });
});

import React from "react";
import { shallow } from "enzyme";
import SectionContainer from "./section-container";

describe("<SectionContainer />", () => {
  it("should render a section html tag with attribute className: defaultClasses and classes, attribute id: featureId nested a div className: containerClasses with children", () => {
    const defaultClasses = "default-classes";
    const classes = "custom-classes";
    const containerClasses = "container-classes";
    const featureId = "feature-1";
    const children = <p>Test Children</p>;
    const wrapper = shallow(
      <Section
        defaultClasses={defaultClasses}
        classes={classes}
        containerClasses={containerClasses}
        featureId={featureId}
      >
        {children}
      </Section>
    );
    expect(wrapper.find("section").hasClass(defaultClasses)).toBe(true);
    expect(wrapper.find("section").hasClass(classes)).toBe(true);
    expect(wrapper.find("section").prop("id")).toBe(featureId);
    expect(wrapper.find("div").hasClass(containerClasses)).toBe(true);
    expect(wrapper.find("div").contains(children)).toBe(true);
  });
});

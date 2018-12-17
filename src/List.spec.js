import React from "react";
import List from "./List";

describe("List Component", () => {
  it("renders the List wrapper with list elements", () => {
    const wrapper = shallow(<List items={["A", "Z"]} />);
    expect(wrapper.find("li")).to.have.length(2);
    expect(wrapper.find(".list")).to.have.length(2);
  });
});

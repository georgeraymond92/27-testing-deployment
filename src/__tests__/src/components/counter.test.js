import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";

describe("<Counter />", () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });
  it('should fail this test', () => {
    expect(1+1).toEqual(2);
  })
});

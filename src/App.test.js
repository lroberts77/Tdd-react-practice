import React from 'react';
import Counter from './Counter';
import { shallow, mount } from 'enzyme';
import App from './App';


describe("Counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("Counter app");
  })

  test("render a button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  })

  test("render a button with text of decrement", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  test("render a button with text of reset", () => {
    expect(wrapper.find("#reset-btn").text()).toBe("Reset");
  })

  test("render the click event of increment-btn and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  test("render the click event of decrement-btn and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

  test("render the click event of reset-btn and reset counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("2")
    wrapper.find("#reset-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("0")
  });
});

describe("counter test mount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })

    test("render the click event of decrement-btn and decrement counter value", () => {
      wrapper.find("#increment-btn").simulate("click")
      expect(wrapper.find("#counter-value").text()).toBe("1")
      wrapper.find("#decrement-btn").simulate("click")
      expect(wrapper.find("#counter-value").text()).toBe("0")
    })

})
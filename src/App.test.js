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
    expect(wrapper.find("h1").text()).toContain("Score");
  })

  test("render a button with text of increment", () => {
    expect(wrapper.find("#increment-btna").text()).toBe("+1");
    expect(wrapper.find("#increment-btnb").text()).toBe("+1");
  })

  test("render a button with text of decrement", () => {
    expect(wrapper.find("#decrement-btna").text()).toBe("-1");
    expect(wrapper.find("#decrement-btnb").text()).toBe("-1");
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-valuea").text()).toBe("0");
  })

  test("render a button with text of reset", () => {
    expect(wrapper.find("#reset-btna").text()).toBe("Reset");
  })

  // test("render a button with text of square", () => {
  //   expect(wrapper.find("#square-btna").text()).toBe("Square");
  // })

  test("render the click event of increment-btna and increment counter valuea", () => {
    wrapper.find("#increment-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("1")
  })

  test("render the click event of decrement-btna and decrement counter valuea", () => {
    wrapper.find("#increment-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("1")
    wrapper.find("#decrement-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("0")
  })

  // test("render the click event of squared-btna and square counter value", () => {
  //   wrapper.find("#increment-btna").simulate("click")
  //   expect(wrapper.find("#counter-value").text()).toBe("1")
  //   wrapper.find("#increment-btna").simulate("click")
  //   expect(wrapper.find("#counter-value").text()).toBe("2")
  //   wrapper.find("#square-btna").simulate("click")
  //   expect(wrapper.find("#counter-value").text()).toBe("4")
  //   wrapper.find("#square-btna").simulate("click")
  //   expect(wrapper.find("#counter-value").text()).toBe("16")
  // })

  test("render the click event of reset-btna and reset counter valuea", () => {
    wrapper.find("#increment-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("1")
    wrapper.find("#increment-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("2")
    wrapper.find("#reset-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("0")
  });
});

describe("counter test mount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })

    test("render the click event of decrement-btna and decrement counter value", () => {
      wrapper.find("#increment-btna").simulate("click")
      expect(wrapper.find("#counter-valuea").text()).toBe("1")
      wrapper.find("#decrement-btna").simulate("click")
      expect(wrapper.find("#counter-valuea").text()).toBe("0")
    })

})
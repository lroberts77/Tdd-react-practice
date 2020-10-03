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

  test("render a div for the timer displaying 0:00", () => {
    expect(wrapper.find('div.timer').text()).toContain("0:00");
  })

  test("render buttons to increment and decrement the timer by 10 seconds", () => {
    expect(wrapper.find("#timerPlus10s").text()).toContain("+10s");
    expect(wrapper.find("#timerMinus10s").text()).toContain("-10s");
  })

  test("render buttons to adjust the timer by 1 minute", () => {
    expect(wrapper.find("#timerPlus1min").text()).toContain("+1 min");
    expect(wrapper.find("#timerMinus1min").text()).toContain("-1 min");
  })

  test("render a button with the text Start", () => {
    expect(wrapper.find("#start-stop").text()).toContain("Start");
  })

  test("render a button with the text Reset", () => {
    expect(wrapper.find("#reset-timer").text()).toContain("Reset");
  })

  test("render a div for number of fouls", () => {
    expect(wrapper.find("#fouls-a").text()).toContain("0");
    expect(wrapper.find("#fouls-b").text()).toContain("0");
  })

  test("render the title of teams", () => {
    expect(wrapper.find("#team-a").text()).toContain("TEAM A");
    expect(wrapper.find("#team-b").text()).toContain("TEAM B");
  })

  test("render a button with text of +1", () => {
    expect(wrapper.find("#increment-btna").text()).toBe("+1");
    expect(wrapper.find("#increment-btnb").text()).toBe("+1");
  })

  test("render a button with text of +1 for fouls", () => {
    expect(wrapper.find("#foulsplus1-btna").text()).toBe("+1");
    expect(wrapper.find("#foulsplus1-btnb").text()).toBe("+1");
  })

  test("render a button with text of +3", () => {
    expect(wrapper.find("#increment3-btna").text()).toBe("+3");
    expect(wrapper.find("#increment3-btnb").text()).toBe("+3");
  })

  test("render a button with text of -1", () => {
    expect(wrapper.find("#decrement-btna").text()).toBe("-1");
    expect(wrapper.find("#decrement-btnb").text()).toBe("-1");
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-valuea").text()).toBe("0");
    expect(wrapper.find("#counter-valueb").text()).toBe("0");
  })

  test("render a button with text of reset", () => {
    expect(wrapper.find("#reset-btna").text()).toBe("Reset");
    expect(wrapper.find("#reset-btnb").text()).toBe("Reset");
  })

  test("render a button for fouls with text of reset", () => {
    expect(wrapper.find("#fouls-btna").text()).toBe("Reset");
    expect(wrapper.find("#fouls-btnb").text()).toBe("Reset");
  })

  // test("render a button with text of square", () => {
  //   expect(wrapper.find("#square-btna").text()).toBe("Square");
  // })

  test("render the click event of increment-btn and increment counter value", () => {
    wrapper.find("#increment-btna").simulate("click");
    expect(wrapper.find("#counter-valuea").text()).toBe("1");
    wrapper.find("#increment-btnb").simulate("click");
    expect(wrapper.find("#counter-valueb").text()).toBe("1");
  })

  test("render the click event of timerPlus10s, timerMinus10s to adjust timer value", () => {
    wrapper.find("#timerPlus10s").simulate("click");
    expect(wrapper.find("#sec").text()).toBe("10");
    wrapper.find("#timerMinus10s").simulate("click");
    expect(wrapper.find("#sec").text()).toBe("00");
  })

  test("render the click event of timerPlus1min to adjust timer value", () => {
    wrapper.find("#timerPlus1min").simulate("click");
    expect(wrapper.find("#min").text()).toBe("1");
  })

  test("render the click event of foulsplus1-btn and increment counter value", () => {
    wrapper.find("#foulsplus1-btnb").simulate("click");
    expect(wrapper.find("#fouls-b").text()).toBe("1");
    wrapper.find("#foulsplus1-btna").simulate("click");
    expect(wrapper.find("#fouls-a").text()).toBe("1");
  })

  test("render the click event of increment3-btn and increment counter value", () => {
    wrapper.find("#increment3-btna").simulate("click");
    expect(wrapper.find("#counter-valuea").text()).toBe("3");
    wrapper.find("#increment3-btnb").simulate("click");
    expect(wrapper.find("#counter-valueb").text()).toBe("3");
  })

  test("render the click event of decrement-btn and decrement counter value", () => {
    wrapper.find("#increment-btna").simulate("click");
    expect(wrapper.find("#counter-valuea").text()).toBe("1");
    wrapper.find("#decrement-btna").simulate("click");
    expect(wrapper.find("#counter-valuea").text()).toBe("0");
    wrapper.find("#increment-btnb").simulate("click");
    expect(wrapper.find("#counter-valueb").text()).toBe("1");
    wrapper.find("#decrement-btnb").simulate("click");
    expect(wrapper.find("#counter-valueb").text()).toBe("0");
  })

  test("counter value doesn't go below 0 when decrement button is clicked", () => {
    wrapper.find("#decrement-btna").simulate("click");
    expect(wrapper.find("#counter-valuea").text()).toBe("0");
    wrapper.find("#decrement-btnb").simulate("click");
    expect(wrapper.find("#counter-valueb").text()).toBe("0");
  });

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
  test("render the click event of fouls-btn and reset fouls counter", () => {
    wrapper.find("#foulsplus1-btna").simulate("click");
    expect(wrapper.find("#fouls-a").text()).toBe("1");
    wrapper.find("#fouls-btna").simulate("click");
    expect(wrapper.find("#fouls-a").text()).toBe("0");
    wrapper.find("#foulsplus1-btnb").simulate("click");
    expect(wrapper.find("#fouls-b").text()).toBe("1");
    wrapper.find("#fouls-btnb").simulate("click");
    expect(wrapper.find("#fouls-b").text()).toBe("0");
  })

  test("render the click event of reset-btn and reset counter value", () => {
    wrapper.find("#increment-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("1")
    wrapper.find("#increment3-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("4")
    wrapper.find("#reset-btna").simulate("click")
    expect(wrapper.find("#counter-valuea").text()).toBe("0")
    wrapper.find("#increment-btnb").simulate("click")
    expect(wrapper.find("#counter-valueb").text()).toBe("1")
    wrapper.find("#increment3-btnb").simulate("click")
    expect(wrapper.find("#counter-valueb").text()).toBe("4")
    wrapper.find("#reset-btnb").simulate("click")
    expect(wrapper.find("#counter-valueb").text()).toBe("0")
  });
});

describe("counter test mount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })

    test("render the click event of decrement-btn, decrement and reset counter value", () => {
      wrapper.find("#increment-btna").simulate("click");
      expect(wrapper.find("#counter-valuea").text()).toBe("1");
      wrapper.find("#increment3-btna").simulate("click");
      expect(wrapper.find("#counter-valuea").text()).toBe("4");
      wrapper.find("#decrement-btna").simulate("click");
      expect(wrapper.find("#counter-valuea").text()).toBe("3");
      wrapper.find("#reset-btna").simulate("click");
      expect(wrapper.find("#counter-valuea").text()).toBe("0");
      wrapper.find("#increment-btnb").simulate("click");
      expect(wrapper.find("#counter-valueb").text()).toBe("1");
      wrapper.find("#increment3-btnb").simulate("click");
      expect(wrapper.find("#counter-valueb").text()).toBe("4");
      wrapper.find("#decrement-btnb").simulate("click");
      expect(wrapper.find("#counter-valueb").text()).toBe("3");
      wrapper.find("#reset-btnb").simulate("click");
      expect(wrapper.find("#counter-valueb").text()).toBe("0");
    })

    test("render a button with the text Stop", () => {
      wrapper.find("#start-stop").simulate("click")
      expect(wrapper.find("#start-stop").text()).toContain("Stop");
    })

    test("timer is reset to 0:00 when reset-timer is clicked", () => {
      wrapper.find("#start-stop").simulate("click")
      wrapper.find("#start-stop").simulate("click")
      wrapper.find("#reset-timer").simulate("click")
      expect(wrapper.find("div.timer").text()).toContain("0:00");
    })

})
import {checkURL} from "../js/urlChecker"

describe("urlChecker tests", ()=> {

  test("checkURL is a function", () => {
    expect(typeof(checkURL)).toBe("function");
  });

  test("The following Url is valid", () => {
    expect(checkURL("https://www.udacity.com/")).toBe(true);
  });

  test("The following Url is not valid", () => {
    expect(checkURL("www.udacity.com/")).toBe(false);
  });

})

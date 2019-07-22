import { Greeter } from "../src/greeter";
import * as chai from "chai";

const expect = chai.expect;

describe("Greeter", () => {
  it("should greet with message", () => {
    const greeter = new Greeter("friend");
    expect(greeter.greet()).to.equal("Bonjour, friend!");
  });
});

import { applyToJob, whoSaidHi, validateJob } from "../index";
import { context, storage, VM } from "near-sdk-as";
import { LAST_SENDER_KEY } from "../model";

describe("contract", () => {
  it("should say Hi", () => {
    applyToJob();
    expect(VM.logs()).toIncludeEqual(context.sender + " says \"Hi!\"", "logs should be updated")
    expect(storage.get<string>(LAST_SENDER_KEY)).toBe(context.sender);
  });

  it("should return who said Hi!", () => {
    applyToJob();
    expect(whoSaidHi()).toBe(context.sender, "last who said high should be " + context.sender);
  });

  //Por revisar parametros
  it("should generate a contract", () => {
    validateJob();
    expect(VM.logs()).toIncludeEqual(context.sender + " says \"Hi!\"", "logs should be updated")
    expect(storage.get<string>(LAST_SENDER_KEY)).toBe(context.sender);
  });
});

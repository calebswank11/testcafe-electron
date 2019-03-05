import { Selector } from "testcafe";

fixture`testing test`.page`./index.html`;

test("test 1", async t => {
  console.log("firing test here");
  const test = await Selector("#testingReact").innerText;
  await t.expect(test).eql("Testing File");
});

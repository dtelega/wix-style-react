import * as React from "react";
import CircularProgressBar from "../../src/CircularProgressBar";
import { circularProgressBarTestkitFactory } from "../../dist/testkit";
import { circularProgressBarTestkitFactory as circularProgressBarEnzymeTestkitFactory } from "../../dist/testkit/enzyme";
import { circularProgressBarTestkitFactory as circularProgressBarPuppeteerTestkitFactory } from "../../dist/testkit/puppeteer";
import * as enzyme from "enzyme";
import * as puppeteer from "puppeteer";

function CircularProgressBarWithMandatoryProps() {
  return <CircularProgressBar />;
}

function CircularProgressBarWithAllProps() {
  return (
    <CircularProgressBar
      dataHook="hook"
      error
      errorLabel="label"
      errorMessage="message"
      light
      shouldLoadAsync
      showProgressIndication
      size="large"
      value="value"
    />
  );
}

async function testkits() {
  const testkit = circularProgressBarTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = circularProgressBarEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await circularProgressBarPuppeteerTestkitFactory({
    dataHook: "hook",
    page
  });
}

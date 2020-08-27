import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { testkit as inputTestkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';

export const numberInputDriverFactory = (base, body) => {
  const getInputDriver = () => inputTestkit(base, body);
  const getTickerDriver = () =>
    tickerDriverFactory(base.$('[data-hook="number-input-ticker"]'));
  return {
    ...baseUniDriverFactory(base),
    ...getInputDriver(),
    /** Click on ticker up */
    clickOnIncrement: () => getTickerDriver().clickUp(),
    /** Click on ticker down */
    clickOnDecrement: () => getTickerDriver().clickDown(),
    isDownDisabled: () => getTickerDriver().isDownDisabled(),
    isUpDisabled: () => getTickerDriver().isUpDisabled(),
  };
};

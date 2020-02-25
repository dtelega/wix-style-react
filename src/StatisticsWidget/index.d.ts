import * as React from 'react';

export interface StatisticsWidgetProps {
  dataHook?: string;
  /** The old name of the items props. Will be removed in future.
   * @deprecated
   * */
  statistics?: StatisticsWidgetItem[];
  items?: StatisticsWidgetItem[];
}

export default class StatisticsWidget extends React.PureComponent<
  StatisticsWidgetProps
> {}

export type StatisticsWidgetItem = {
  value: string;
  valueInShort?: string;
  description?: string;
  descriptionInfo?: string;
  percentage?: number;
  invertedPercentage?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void;
};

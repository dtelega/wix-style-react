import * as React from 'react';

export interface DraggableProps {
  droppable?: boolean;
  withHandle?: boolean;
  containerId?: string;
  groupName?: string;
  renderItem?: (data: object) => React.ReactNode;
  index?: number;
  id?: number | string;
  item?: object;
  onMoveOut?: (id: any) => void;
  onDrop?: Function;
  onHover?: HoverEventFn;
  onDragStart?: DragEventFn;
  onDragEnd?: DragEventFn;
  shift?: number[];
  hasDragged?: boolean;
  setWrapperNode?: (node: HTMLElement, index: number, item: object) => void;
  animationDuration?: number;
  animationTiming?: string;
  canDrag?: DragEventFn;
  delay?: number;
  listOfPropsThatAffectItems?: any[];
}

export default class Draggable extends React.Component<DraggableProps> {}

export type DragEventParams = {
  id: string | number;
  index: number;
  containerId: string;
  groupName: string;
  item: object;
};

export type DragEventFn = (params: DragEventParams) => void;

export type HoverEventFn = (params: {
  removedIndex: number | string;
  addedIndex: number | string;
  id: any;
  item: object;
}) => void;

export enum ActionType {
  INC = "INC",
  DEC = "DEC",
  SQR = "SQR",
}
type Action = {
  type: ActionType;
  payload: number;
};

type initValueType = {
  count: number;
  square: number;
};
export let initValue: initValueType = {
  count: 0,
  square: 2,
};

export const reducer = (state: initValueType, action: Action) => {
  switch (action.type) {
    case ActionType.INC:
      return { ...state, count: state.count + action.payload };
    case ActionType.DEC:
      return { ...state, count: state.count - action.payload };
    case ActionType.SQR:
      return { ...state, square: state.square * action.payload };
    default:
      return { ...state };
  }
};

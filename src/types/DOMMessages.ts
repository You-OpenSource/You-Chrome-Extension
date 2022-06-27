export type DOMMessage = {
  type: "GET_DOM";
};

export type DOMMessageResponse = {
  negativeCount: number;
  positiveCount: number;
};

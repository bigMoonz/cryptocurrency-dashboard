import { Price } from '.';

export enum ActionTypes {
  SET_PRICES = 'SET_PRICES',
  PRICES_LOADING_START = 'PRICES_LOADING_START',
  PRICES_LOADING_STOP = 'PRICES_LOADING_STOP',
}

export interface ISetPricesAction {
  type: ActionTypes.SET_PRICES;
  payload: { [id: string]: Partial<Price> };
}

export interface IPricesLoadingStartAction {
  type: ActionTypes.PRICES_LOADING_START;
}

export interface IPricesLoadingStopAction {
  type: ActionTypes.PRICES_LOADING_STOP;
}

export type Actions =
  | ISetPricesAction
  | IPricesLoadingStartAction
  | IPricesLoadingStopAction;

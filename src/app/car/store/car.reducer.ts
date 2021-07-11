import { Action, createReducer, on } from '@ngrx/store';
import { Car } from '../pages/interfaces/car.interface';
import * as CarActions from './car.actions';

export const key = 'car';
export const initialState: Car = { name: 'Seat', price: 45000, isEnabled: false };

const carReducer = createReducer(
  initialState,
  on(CarActions.priceUp, (state) => ({ ...state, price: state.price + 1 })),
  on(CarActions.changeStatus, (state) => ({ ...state, isEnabled: !state.isEnabled })),
  on(CarActions.resetCar, (state) => initialState),
  on(CarActions.setCar, (state, { car }) => ({ name: car.name, price: car.price, isEnabled: car.isEnabled })),
);

export function reducer(state: Car, action: Action) {
  return carReducer(state, action);
}

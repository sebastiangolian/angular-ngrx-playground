import { createAction, props } from '@ngrx/store';
import { Car } from '../pages/interfaces/car.interface';

export const changeStatus = createAction('[Car Component] - change status');
export const priceUp = createAction('[Car Component] - price up');
export const setCar = createAction(
  '[Car Component] - set car',
  props<{ car: Car }>()
);
export const resetCar = createAction('[Car Component] - reset');

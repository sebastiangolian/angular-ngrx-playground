import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CarActions from '../../store/car.actions';
import { Car } from '../interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent {
  car$: Observable<Car> = new Observable();

  constructor(private store: Store<Car>) {
    this.car$ = store.select((car: Car) => car);
  }

  changeStatus() {
    this.store.dispatch(CarActions.changeStatus());
  }

  priceUp() {
    this.store.dispatch(CarActions.priceUp());
  }

  setCar() {
    const car: Car = { name: 'Skoda', price: 7000, isEnabled: true };
    this.store.dispatch(CarActions.setCar({ car: car }));
  }

  resetCar() {
    this.store.dispatch(CarActions.resetCar());
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './pages/car/car.component';
import * as CarReducer from './store/car.reducer';

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    StoreModule.forFeature(CarReducer.key, CarReducer.reducer),
  ],
})
export class CarModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './pages/counter/counter.component';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    //imports
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature('counterValue', counterReducer),
  ],
})
export class CounterModule {}

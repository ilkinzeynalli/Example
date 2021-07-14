import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SummaryPipe } from './pipes/summary.pipe';
import { ProductComponent } from './product.component';
import { InputEmailDirective } from './directives/input-email.directive';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputEmailDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }

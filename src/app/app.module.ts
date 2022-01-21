import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';
import { SummaryPipe } from './summary.pipe';
import { InputEmailDirective } from './input-email.directive';

@NgModule({
  declarations: [ProductComponent, SummaryPipe, InputEmailDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ProductComponent],
})
export class AppModule {}

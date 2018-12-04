import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPrestamoComponent } from './form-prestamo/form-prestamo.component';
import { ListPrestamoComponent } from './list-prestamo/list-prestamo.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';

@NgModule({
  declarations: [FormPrestamoComponent, ListPrestamoComponent, FormRegistroComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentModule { }

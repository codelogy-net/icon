import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    IconComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }

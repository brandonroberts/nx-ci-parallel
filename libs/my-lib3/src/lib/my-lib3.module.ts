import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLib2Module } from '@nx-ci-parallel/my-lib2';

@NgModule({
  imports: [CommonModule, MyLib2Module],
})
export class MyLib3Module {}

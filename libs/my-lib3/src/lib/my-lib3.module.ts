import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLib2Module } from '@nx-ci-parallel/my-lib2';
import { MyLibModule } from '@nx-ci-parallel/my-lib';
import { MyLib4Module } from '@nx-ci-parallel/my-lib4';

@NgModule({
  imports: [CommonModule, MyLib2Module, MyLibModule, MyLib4Module],
})
export class MyLib3Module {}

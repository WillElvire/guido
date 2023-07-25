import { InternalizationModule } from './internalization.module';
import { ComponentsModule } from './../../components/component.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceModule } from './services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const apiModule = [ HttpClientModule ]

export const defaultModule = [
  CommonModule,
  RouterModule,
  ComponentsModule,
  FormsModule,
  ServiceModule,
  InternalizationModule,
  ReactiveFormsModule
]

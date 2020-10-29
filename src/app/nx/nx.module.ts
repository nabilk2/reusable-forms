import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxExpertModule,
    NxToolbarModule,
    NxButtonModule,
    NxInputModule,
    NxFormfieldModule,
    NxHeadlineModule
  ],
  exports: [
    NxExpertModule,
    NxToolbarModule,
    NxButtonModule,
    NxInputModule,
    NxFormfieldModule,
    NxHeadlineModule
  ]
})
export class NxModule { }

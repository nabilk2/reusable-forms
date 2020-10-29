import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';



@NgModule({
  exports: [
    NxExpertModule,
    NxToolbarModule,
    NxButtonModule,
    NxInputModule,
    NxFormfieldModule,
    NxHeadlineModule,
    NxLinkModule,
    NxCheckboxModule
  ]
})
export class NxModule { }

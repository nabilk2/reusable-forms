import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AgeComponent {

  constructor(public controlContainer: ControlContainer) {}

}

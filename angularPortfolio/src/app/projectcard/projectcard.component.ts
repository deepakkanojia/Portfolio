import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.scss'
})
export class ProjectcardComponent {

  @Input() projectName: string = " ";

}

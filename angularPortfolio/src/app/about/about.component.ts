import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectcardComponent } from "../projectcard/projectcard.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProjectcardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private tittleService:Title){
    this.tittleService.setTitle('Deepak - About Me')
  }

}

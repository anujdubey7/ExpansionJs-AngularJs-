import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructureDirectivesComponent } from './components/structure-directives/structure-directives.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent,StructureDirectivesComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

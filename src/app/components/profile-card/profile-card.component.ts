import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() image: string = '';
  @Input() name: string = ''; 
  @Input() description: string = '';
  @Input() profileLink: string = '#';
  @Input() backgroundColor: string = '#ffffff';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  standalone: true,
  imports: [],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent {
  message: string = 'Bonjour, monde!'
  ngOnInit(): void {
  }
  changerMessage(): void {
  this.message = 'Nouveau message!';
  }
  }


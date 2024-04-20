import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control_flow_for';

  productList = [
    {id: 1, name: 'I Phone'},
    {id: 2, name: 'I Pad'},
    {id: 3, name: 'Macbook'},
    {id: 4, name: 'HP Laptop'},
    {id: 5, name: 'Samsung TV'}
  ];
}

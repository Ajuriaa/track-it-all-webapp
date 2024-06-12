import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../shared/primary-button/primary-button.component';

export interface IPerson {
  name: string;
  age?: number;
  mail: string;
  phone: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public adriel: IPerson = {
    name: 'Adriel',
    mail: 'test@test.com',
    phone: '123456789'
  }

  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  title = 'Cities';

  city$: Object;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCity().subscribe(
      cityService => this.city$ = cityService
    );
  }

}

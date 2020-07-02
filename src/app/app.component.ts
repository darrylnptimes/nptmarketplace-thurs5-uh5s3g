import { Component, OnInit } from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import { MessageService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]

})
export class AppComponent { 

    heroes = HEROES;

    selectedHero: Hero;

    cars: Car[];

    sectors: SelectItem[];

    users: SelectItem[];

    revenues: SelectItem[];

    ratings: SelectItem[];

    prices: SelectItem[];

    cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;

    yearTimeout: any;

    constructor(private carService: CarService) {
      this.carService.getCars().subscribe((data: any) => {
      console.log(data);
      }, (err) => {
      })
     }

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero)
    }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);

        this.brands = [
            { label: 'All Companies', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.sectors = [
            { label: 'All Sectors', value: null },
            { label: 'Arts & Culture', value: 'Arts & Culture' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.users = [
            { label: 'All Number of Users', value: null },
            { label: '1 (just me)', value: '1 (just me)' },
            { label: '2-4', value: '2-4' },
            { label: '5-10', value: '5-10' },
            { label: '11-50', value: '2-4' },
            { label: '51-100', value: '2-4' },
            { label: '100-1000', value: '100-1000' },
            { label: '1000+', value: '1000+' }
        ];

        this.revenues = [
            { label: 'All Revenues', value: null },
            { label: '$0-100k', value: '$0-100k' },
            { label: '$100k-$250k', value: '$100k-$250k' },
            { label: '$250k-$750k', value: '$250k-$750k' },
            { label: '$750k-$1mil', value: '$750k-$1mil' },
            { label: '$1mil-$5mil', value: '$1mil-$5mil' },
            { label: '$5mil +', value: '$5mil +' }
        ];

        this.ratings = [
            { label: 'All Ratings', value: null },
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Fiat', value: '3' },
            { label: 'Honda', value: '4' },
            { label: 'Jaguar', value: '5' },
            { label: 'Mercedes', value: '6' },
            { label: 'Renault', value: '7' },
            { label: 'VW', value: '8' },
            { label: 'Volvo', value: '9' },
            { label: 'Ten', value: '10' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.prices = [
            { label: 'All Prices', value: null },
            { label: 'Arts & Culture', value: 'Arts & Culture' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.cols = [
            { field: 'brand', header: 'Company Name' },
            { field: 'sector', header: 'NonProfit Sector'},
            { field: 'revenue', header: 'Annual Contribution Revenue' },
            { field: 'user', header: 'Number of Users' },
            { field: 'rating', header: 'Overall Rating' }
        ];

        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return parseInt(filter) > value;
        }
    }

    onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }

        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    }
}

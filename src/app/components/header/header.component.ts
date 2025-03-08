  import { JsonPipe } from '@angular/common';
  import { Component, inject } from '@angular/core';
  import {FormsModule} from '@angular/forms';
  import { RouterLink } from '@angular/router';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faMagnifyingGlass, faCircleXmark, faHouse} from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from '../home/home.component';
import { SearchService } from '../../services/search.service';

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [
      FontAwesomeModule, RouterLink,
      FormsModule,JsonPipe,
      HomeComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
  })
  export class HeaderComponent {

    magnifier = faMagnifyingGlass;
    cancel = faCircleXmark;
    home = faHouse;
    search : string ="";
    searcher=inject(SearchService)
    constructor(){};

    onKeydownFunction(event:Event,value:string){
      const customEvent = event as KeyboardEvent;
      if (customEvent.key === 'Enter') {
        // Handle form submission
        console.log(`Pressed key: ${customEvent.key}`)
        this.searchApplication(value);
        customEvent.preventDefault();
      }
    }
    
    protected searchApplication(value:string){
      /// to implement backend call/API 
      this.searcher.getSearchTerm(value);
      this.search ='';
    }
  }
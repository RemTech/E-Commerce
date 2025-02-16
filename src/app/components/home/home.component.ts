import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  dataFromNavbar!: string ;

  constructor (private search:SearchService) {}
  
  ngOnInit(){
    this.search.searchKeyword$.subscribe(record => {
     this.dataFromNavbar = record;
    } )
  }
}
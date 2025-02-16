import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { };

  private readonly keyword$ = new BehaviorSubject<string>("");
  public searchKeyword$ = this.keyword$.asObservable();

  getSearchTerm(value: string) {
    this.keyword$.next(value);
  }
}
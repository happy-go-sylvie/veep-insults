import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Character } from './character';

@Injectable({
  	providedIn: 'root'
})
export class CharacterService {
	private charactersUrl = environment.apiUrl;

  constructor(
  	private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
		return this.http.get<Character[]>(this.charactersUrl)
    	.pipe(
      	tap(_ => this.log('fetched characters')),
      	catchError(this.handleError<Character[]>('getCharacters', []))
    	);
  }

  private log(message: string): void {
    console.log(`CharacterService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
    	console.error(error);
      return of(result as T);
    };
  }
}

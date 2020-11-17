import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Api } from '../models';
const { pokeApi } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  getApis(): Observable<Api[]> {
    return this.http.get<Api[]>(pokeApi).pipe(
      map((res: object) => {
        return Object.entries(res).map((item) => {
          return {
            name: item[0],
            url: item[1],
          };
        });
      })
    );
  }
}

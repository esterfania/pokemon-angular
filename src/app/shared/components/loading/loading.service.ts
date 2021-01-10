import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject = new Subject<LoadingType>();

  getLoadingStatus(): Observable<LoadingType> {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start(): void {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop(): void {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}

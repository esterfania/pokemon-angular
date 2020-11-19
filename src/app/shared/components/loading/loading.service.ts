import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { LoadingType } from "./loading-type";
import { startWith } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class LoadingService implements OnInit {

    loadingSubject = new Subject<LoadingType>();

    ngOnInit(): void {
    }

    getLoadingStatus() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        return this.loadingSubject.next(LoadingType.LOADING)
    }

    stop() {
        return this.loadingSubject.next(LoadingType.STOPPED)
    }


}
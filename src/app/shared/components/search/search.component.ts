import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce = new Subject<any>();
  @Output() typing = new EventEmitter<string>();
  @Input() value: string;

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(100)).subscribe((filter: any) => {
      this.typing.emit(filter.value);
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}

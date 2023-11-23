import { R3TargetBinder } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star-comp',
  templateUrl: './star-comp.component.html',
  styleUrls: ['./star-comp.component.css'],
})
export class StarCompComponent implements OnChanges {
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  StarWidth: number = 75;
  constructor() {}

  ngOnChanges(): void {
    this.StarWidth = (this.rating * 75) / 5;
  }

  onClick() {
    this.ratingClicked.emit(`This Product has ${this.rating} ratings`);
  }
}

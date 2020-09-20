import {Directive, ElementRef, Input} from '@angular/core';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const weekdays: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

@Directive({
  selector: '[appHumanReadableDate]'
})
export class HumanReadableDateDirective {
  @Input() public publishedAt: string;

  constructor(private el: ElementRef) {
  }

  public ngOnInit(): void {
    const publishedAtDate: Date = new Date(this.publishedAt);
    const weekday: number = publishedAtDate.getDay();
    const month: number = publishedAtDate.getMonth();
    const day: number = publishedAtDate.getDate();
    const year: number = publishedAtDate.getFullYear();

    this.el.nativeElement.textContent = `${weekdays[weekday]}, ${months[month]} ${day}, ${year}`;
  }

}

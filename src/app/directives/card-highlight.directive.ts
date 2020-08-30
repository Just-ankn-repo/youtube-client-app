import { Directive, ElementRef, Input } from '@angular/core';
import { cardHighlightsColors } from '../constants/colors.const';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {
  public cardHighlightBackgrounfColor: string;
  @Input() public publishedAt: string;

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    let colorByPublish: string;
    const currentDate: number = new Date().getTime();
    const publishedAtDate: number = new Date(this.publishedAt).getTime();
    const differenceTimeInDay: number = Math.round((currentDate - publishedAtDate) / (24 * 3600 * 1000));

    switch (true) {
      case differenceTimeInDay <= 7 :
        colorByPublish = cardHighlightsColors.newPublishColor;
        break;
      case differenceTimeInDay <= 30 :
        colorByPublish = cardHighlightsColors.recentPublishColor;
        break;
      case differenceTimeInDay <= 180 :
        colorByPublish = cardHighlightsColors.oldPublishColor;
        break;
      default:
        colorByPublish = cardHighlightsColors.oldestPublishColor;
    }

    this.el.nativeElement.style.background = colorByPublish;
  }
}

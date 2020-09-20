import {Component, EventEmitter, Output} from '@angular/core';
import {ICustomCard} from "../../../youtube/models/custom-card.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss']
})
export class CreateCardFormComponent {
  @Output() public newCustomCard: EventEmitter<ICustomCard> = new EventEmitter();

  customCard: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    thumbnailUrl: new FormControl(),
    videoUrl: new FormControl(),
  })

  createCustomCard() {
    const customCardWithCurrenDate = {...this.customCard.value, creationDate: new Date()}
    this.newCustomCard.emit(customCardWithCurrenDate);
    this.customCard.reset();
  }
}

import {ICustomCard} from "../youtube/models/custom-card.model";

export interface StoreState {
    readonly customCards: ICustomCard[];
}

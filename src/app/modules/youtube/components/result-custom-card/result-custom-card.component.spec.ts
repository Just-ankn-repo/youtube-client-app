import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultCustomCardComponent} from './result-custom-card.component';

describe('ResultCustomCardComponent', () => {
    let component: ResultCustomCardComponent;
    let fixture: ComponentFixture<ResultCustomCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultCustomCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultCustomCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { SortByDatePipe } from './sort-by-date.pipe';

describe('SortByDatePipe', () => {
  it('create an instance', () => {
    const pipe: SortByDatePipe = new SortByDatePipe();
    expect(pipe).toBeTruthy();
  });
});

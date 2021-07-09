import { InvalidInputError } from './invalid-input-error';

describe('InvalidInputError', () => {
  it('should create an instance', () => {
    expect(new InvalidInputError()).toBeTruthy();
  });
});

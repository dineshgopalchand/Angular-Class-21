import { UnAuthrizedAccessError } from './un-authrized-access-error';

describe('UnAuthrizedAccessError', () => {
  it('should create an instance', () => {
    expect(new UnAuthrizedAccessError()).toBeTruthy();
  });
});

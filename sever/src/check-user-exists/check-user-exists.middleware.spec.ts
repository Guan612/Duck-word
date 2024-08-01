import { CheckUserExistsMiddleware } from './check-user-exists.middleware';

describe('CheckUserExistsMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckUserExistsMiddleware()).toBeDefined();
  });
});

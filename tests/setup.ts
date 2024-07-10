import nock from 'nock';

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  nock.cleanAll();
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

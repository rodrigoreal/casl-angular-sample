import { LazyloadedModule } from './lazyloaded.module';

describe('LazyloadedModule', () => {
  let lazyloadedModule: LazyloadedModule;

  beforeEach(() => {
    lazyloadedModule = new LazyloadedModule();
  });

  it('should create an instance', () => {
    expect(lazyloadedModule).toBeTruthy();
  });
});

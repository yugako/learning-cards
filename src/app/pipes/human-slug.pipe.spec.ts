import { HumanSlugPipe } from './human-slug.pipe';

describe('HumanSlugPipe', () => {
  it('create an instance', () => {
    const pipe = new HumanSlugPipe();
    expect(pipe).toBeTruthy();
  });
});

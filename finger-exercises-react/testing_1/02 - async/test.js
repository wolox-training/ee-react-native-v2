import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    const data = await getData(true);
    expect(data).toEqual('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    getData(true).then(data => { expect(data).toEqual('data'); });
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    try {
      await getData(false);
    } catch (err) {
      expect(err).toEqual(new Error('error'));
    }
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
    getData(false).catch(err => { expect(err).toEqual(new Error('error')); });
  });
});

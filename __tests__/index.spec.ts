import extractDomain from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    const url1 = 'https://www.example.com/page';
    const url2 = 'http://www.example.com/page';
    const url3 = 'www.example.com/page';

    const res1 = extractDomain(url1);
    const res2 = extractDomain(url2);
    const res3 = extractDomain(url3);

    expect(res1).toBe('www.example.com');
    expect(res2).toBe('www.example.com');
    expect(res3).toBe('www.example.com');
  });

  test('with ip', () => {
    const url4 = 'http://127.0.0.1';
    const res4 = extractDomain(url4);
    expect(res4).toBe('127.0.0.1');
  });
});

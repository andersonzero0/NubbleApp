import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('maria')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('MaRiA')).toBe('Maria');
    });
  });

  it('should remove leading and trailing spaces', () => {
    expect(stringUtils.capitalizeFirstLetter('  Ana Maria  ')).toBe(
      'Ana Maria',
    );
    expect(stringUtils.capitalizeFirstLetter('Ana Maria  ')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('  Ana Maria')).toBe('Ana Maria');
  });
});

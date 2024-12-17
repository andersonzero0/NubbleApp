import React from 'react';

import {renderScreen} from 'test-utils';

import {AppStack} from '@routes';

describe('integration: SearchScreen', () => {
  test('Search Flow', () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);
  });
});

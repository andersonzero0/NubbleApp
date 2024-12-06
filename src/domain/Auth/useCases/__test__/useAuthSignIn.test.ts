import {renderHook} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {useAuthSignIn} from '../useAuthSignIn';

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', () => {
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });

    result.current.signIn({email: 'anderson@email.com', password: '123'});
  });

  it('calls the onError function with a message if sign-in fails', () => {
    const {} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
});

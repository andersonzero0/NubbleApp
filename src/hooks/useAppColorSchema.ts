import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';

export function useAppColorSchema() {
  const onSystemChange = useSettingsService();

  useEffect(() => {
    onSystemChange.onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preferences => {
      onSystemChange.onSystemChange(preferences.colorScheme);
    });

    return () => subscription.remove();
  }, [onSystemChange]);
}

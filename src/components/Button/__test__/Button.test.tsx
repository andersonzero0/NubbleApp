import React from 'react';

import {render, fireEvent, screen} from 'test-utils';

import {Button, ButtonProps} from '../Button';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  const titleElement = screen.getByText(/button title/i);

  return {
    titleElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });
});
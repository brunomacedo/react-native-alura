import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing React Native', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  test('page contains the app component', async () => {
    const component = <App />;
    const {findAllByText} = render(component);
    const app = await findAllByText(/Lorem ipsum dolor sit amet/);
    expect(app).toBeTruthy();
  });
});

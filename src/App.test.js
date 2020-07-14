import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Counter Testing', () => {
  test('render the title of counter', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Counter app');
    expect(linkElement).toBeInTheDocument();
  })

});



import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Counter Testing', () => {
  test('render the title of counter', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Counter app');
    expect(linkElement).toBeInTheDocument();
  })

});



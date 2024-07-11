import React from 'react';
import { render } from '@testing-library/react';
import Comic from './Comic';

test('renders Comic component', () => {
  const { getByText } = render(<Comic title="Test Title" imageUrl="https://example.com/test.png" date="Test Date" />);
  expect(getByText('Test Title')).toBeInTheDocument();
  expect(getByText('Test Date')).toBeInTheDocument();
});

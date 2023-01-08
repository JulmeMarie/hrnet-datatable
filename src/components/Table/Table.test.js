import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

describe('<Table />', () => {
  test('it should mount', () => {
    render(<Table />);

    const Table = screen.getByTestId('Table');

    expect(Table).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  test('it should mount', () => {
    render(<Pagination />);

    const Pagination = screen.getByTestId('Pagination');

    expect(Pagination).toBeInTheDocument();
  });
});
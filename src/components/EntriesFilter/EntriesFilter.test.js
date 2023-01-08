import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EntriesFilter from './EntriesFilter';

describe('<EntriesFilter />', () => {
  test('it should mount', () => {
    render(<EntriesFilter />);
    
    const entriesFilter = screen.getByTestId('EntriesFilter');

    expect(entriesFilter).toBeInTheDocument();
  });
});
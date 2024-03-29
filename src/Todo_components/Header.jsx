import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ButtonGroup>
        {filters.map((value, index) => (
          <Button
            key={index}
            variant={filter === value ? 'primary' : 'secondary'}
            onClick={() => onFilterChange(value)}
          >
            {value}
          </Button>
        ))}
      </ButtonGroup>
      <hr />
    </header>
  );
}
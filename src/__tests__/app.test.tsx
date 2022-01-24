import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from "../components/content/content";

const testText = "Test Text";

test('Renders content component', () => {
  render(<Content><p>{testText}</p></Content>);
  const linkElement = screen.getByText(testText);
  expect(linkElement).toBeInTheDocument();
});

// Unable to render components using @amsterdam/asc-ui package

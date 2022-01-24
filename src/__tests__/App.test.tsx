import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from "../components/layout/layout";

const testText = "Test Text";

test('Renders layout component', () => {
  render(<Layout><p>{testText}</p></Layout>);
  const linkElement = screen.getByText(testText);
  expect(linkElement).toBeInTheDocument();
});

// Unable to render components using @amsterdam/asc-ui package

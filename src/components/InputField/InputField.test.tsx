import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders the label correctly', () => {
    render(<InputField label="Test Label" />);
    expect(screen.getByText('Test Label')).not.toBeNull();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<InputField placeholder="test-input" disabled />);
    expect(screen.getByPlaceholderText('test-input')).toBeDisabled();
  });
});
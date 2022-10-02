import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomSelect from '.';
import PropsInterface from './types/CustomSelectProps';

const testingProps: PropsInterface = {
  id: 'test',
  label: 'Test',
  initial: 0,
  options: ['a', 'b', 'c'],
  callback: () => {},
};

describe('CustomSelect', () => {
  it('should be rendered', () => {
    render(<CustomSelect {...testingProps} />);
    const customSelect = screen.getByTestId('custom-select');
    expect(customSelect).toBeInTheDocument();
  });
  it('should open dropdown', () => {
    render(<CustomSelect {...testingProps} />);
    const customSelectButton = screen.getByRole('button');
    fireEvent.click(customSelectButton);
    const customSelectDropdown = screen.getByLabelText(/test/i);
    expect(customSelectDropdown).toHaveClass('open');
  });
  it('should close dropdown', async () => {
    render(<CustomSelect {...testingProps} />);
    const customSelectButton = screen.getByRole('button');
    fireEvent.click(customSelectButton);
    userEvent.click(document.body);
    const customSelectDropdown = screen.getByLabelText(/test/i);
    expect(customSelectDropdown).not.toHaveClass('open');
  });
  it('should have good initial value', () => {
    render(<CustomSelect {...testingProps} />);
    const customSelectDropdown = screen.getByLabelText(/test/i);
    const selected = within(customSelectDropdown).getByRole('option', {
      selected: true,
    });
    expect(selected).toHaveTextContent(
      testingProps.options[testingProps.initial]
    );
  });
  it('should change current value', () => {
    render(<CustomSelect {...testingProps} />);
    const customSelectButton = screen.getByRole('button');
    fireEvent.click(customSelectButton);
    const customSelectDropdown = screen.getByLabelText(/test/i);
    fireEvent.click(within(customSelectDropdown).getByText('c'));
    const selectedOption = within(customSelectDropdown).getByRole('option', {
      selected: true,
    });
    expect(selectedOption).toHaveTextContent('c');
  });
});

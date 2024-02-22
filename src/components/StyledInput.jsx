import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4f46e5; // A shade of blue for focus
  }

  &.error {
    border-color: #f87171; // A shade of red for errors
  }

  &.readOnly {
    background-color: #f3f4f6; // A light grey background for read-only mode
    border-color: #e5e7eb;
  }
`;

export default StyledInput;
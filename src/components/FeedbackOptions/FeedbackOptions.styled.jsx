import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 4px 8px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.accent};
  }
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

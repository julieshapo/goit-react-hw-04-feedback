import styled from 'styled-components';

export const Text = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 18px;
  margin: 0;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

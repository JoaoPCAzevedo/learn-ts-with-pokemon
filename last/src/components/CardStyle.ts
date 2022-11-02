import styled from 'styled-components';

export const StyledCard = styled.div`
  width: calc(33.33% - 15px);
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 0 15px 15px 0;
  border-radius: 15px;
  padding: 15px;
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  p {
    text-transform: capitalize;
  }
`;
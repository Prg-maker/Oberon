import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 15.3rem 15.3rem 15.3rem 15.3rem;
  grid-template-rows: 15.3rem 15.3rem ;


  justify-content: center;
  align-items: center;


  gap: 3.1rem;
  padding:3.1rem 0;


  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

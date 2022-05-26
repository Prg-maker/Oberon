import styled from 'styled-components';

export const Container = styled.div`
  width:70% ;
  height: 100%;

  margin: 0 auto;
  display: flex;
  padding-top: 25px;
  padding-bottom: 150px;
  gap: 15px;

  display: grid;
  grid-template-columns: auto auto auto ;
  grid-template-areas: auto auto auto auto auto ;
  overflow:scroll;

  &::-webkit-scrollbar{
    background: var(--color-bck);
  }   


  @media(max-width:970px){
    display: grid;
    grid-template-columns: auto auto  ;
    grid-template-areas: auto auto auto auto auto ;
  }

  @media(max-width:600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 55px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 100px;
  background-color:var(--color-bck_details);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 10;
  left: 20px;
  top:20px;


  @media (max-width:600px) {
    right: 0;
    bottom: 50px;
  }

  a{
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    text-align: center;
    color: var(--color-bck-white);
    cursor: pointer;
    text-decoration: none;
    font-size:14px ;
    &:hover{
      filter: brightness(0.8);
    }
  }

`;


export const ButtonDetails = styled.button`
 


  a{
   
  }
 
`
export const Separete = styled.div`
  width: 90%;
  height: 5%;
  background-color: var(--color-bck_options);
  border-radius: 10px;
`
export const ButtonDelete = styled.button`
  width: 100%;
  height: 45%;
  background-color: transparent;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  color: var(--color-bck-white);
  cursor: pointer;
  &:hover{
    filter: brightness(0.8);
  }
`
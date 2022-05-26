import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  img{
    width: 12.5rem;
    height: 12.5rem;
   
    margin-top: 15px;
    margin-bottom:4.625rem;
    border-radius: 50%;

    @media (max-width:600px) {
      width: 6rem;
      height: 6rem;
      @media (max-height:480px) {
        margin-bottom: 2rem;
      } 
    }
  }

`;


export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .name{
    padding-bottom: 50px;
  }
 
 
  
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;

  color: var(--color-bck-white);
`
export const Input = styled.input`
  min-width: 25rem;
  height: 50px;




  padding-left: 10px;

  background: #FFFFFF;
  border-radius: 5px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  border: 2px solid #fff;

  &::placeholder{
    font-size: 14px;
  }

  &:focus , &:hover{
    border: 2px solid orange;
  }

  @media (max-width:600px) {
    min-width: 50%;
    min-height: 25%;
  }

  @media (max-width:300px) {
  }
`

export const ButtonEnterInProfile = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  
  gap: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  text-align: center;

  color: #000000;

  background: var(--color-text_secondary);


  margin-top: 50px ;

  &:hover{
    gap: 30px;
    transition: 0.2s;
    filter:brightness(1.5);
  }
`
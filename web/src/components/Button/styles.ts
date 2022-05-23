import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  width: 9rem;
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


  &:hover{
    gap: 30px;
    transition: 0.2s;
    filter:brightness(1.5);
  }




  @media(max-width: 500px){
    width: 7rem;
    font-size: .8rem;
    .arrow{
      width: 18px;
    }

  }

`;

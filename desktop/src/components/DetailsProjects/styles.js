import styled , {css} from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  margin-right: 50px;
  margin-top: 6.5rem;
  z-index: 15;
  width: 275px;
  height: 230px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #393939;
  border-radius: 10px;
  display: flex;
  flex-direction: column;


  .div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .btc{
    width: 50px;
    height: 50px;
    left: 23px;
    top: 32px;
    border-radius: 50%;

    background: #274690;
    margin-right: 10px;

  }

  @media(max-width:500px){
    left: 20px;
    
  }


  
`;


export const Separete = styled.div`
  width: 175px;
  height: 5px;
  left: 82px;
  top: 52px;

  background: #EA8C55;
  border-radius: 50px;
`

const styleButton = css`
  width: 70%;
  height: 30px;
  margin-top: 26px;
  margin-left: 32px;

  display: flex;
  align-items:center;
  justify-content: center;
  border-radius: 7px;

  position: relative;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  cursor:pointer;


  &:hover{
    filter: brightness(.9);
    transition: .2s;
  }
`

export const ButtonCreateProject = styled.a`
  ${styleButton}
  background-color: white;
  text-decoration:none;
  color: var(--color-text-black);
`
export const Exit = styled.button`
  ${styleButton}


`
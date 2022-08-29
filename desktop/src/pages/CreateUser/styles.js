import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  >div{
    margin-top: 20px;
  }

  img{
    width: 12.5rem;
    height: 12.5rem;
    margin-bottom:74px;

    @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    margin: 0 25px;
    }
  }

`;


export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows:   auto auto;
  position:relative;
  .github{
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 20px;
    padding-bottom: 25px;
   

    strong{
      font-style: normal;
      font-weight: 700;
      font-size: 12px;

      color: var(--color-bck_gray);
    }
  }

  .senha{
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 15px;
  }

  .name{
    margin-right: 50px;
    padding-bottom: 50px;
  }


  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    margin: 0 25px;
    div{
      width: 100%;
    }

  }
  @media(max-width: 600px){

    .buttons{
      display: flex;
      position: relative;
    }
  }

  .buttons{
    display: flex;
    flex-direction: column;

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
  width: 20rem;
  height: 2.5rem;
  left: 363px;
  top: 347px;
  padding-left: 10px;

  background: #FFFFFF;
  border-radius: 5px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-top: 5px;
  color: #000000;
  border: 1px solid white;

  &::placeholder{
    font-size: 14px;
  }

  &:focus , &:hover{
    border: 1px solid orange;
  }


  @media(max-width: 700px){
    width: 100%;
  }

`

export const ButtonCreateProfile = styled.button`
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


  position: relative;
  top: 50%;
  left: 50%;


  &:hover{
    gap: 30px;
    transition: 0.2s;
    filter:brightness(1.5);
  }

  @media (max-width:700px) {
    position: relative;
    left: 50%;
    top: 0%;

  }

`



export const ButtonBack = styled.a`
  width: 150px;
  height: 45px;
  border-radius: 7px;
  


  background: var(--color-progress_red);

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
  text-decoration: none;

  &:hover{
    transition: 0.2s;
    filter:brightness(1.5);
  }

  @media (max-width:700px) {
    position: absolute;
    left: 0;
  }
`
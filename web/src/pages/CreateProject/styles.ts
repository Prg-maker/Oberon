import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 200px;
    height: 200px;
    margin-top: 15px;
    margin-bottom:74px;
  }

`;


export const Form = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows:   auto auto;


  .github{
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 15px;
    strong{
      font-style: normal;
      font-weight: 700;
      font-size: 12px;

      color: var(--color-bck_gray);
    }
  }

  .name{
    margin-right: 50px;
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
  width: 311px;
  height: 40px;
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
`
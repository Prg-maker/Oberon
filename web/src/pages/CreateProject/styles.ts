import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding-top: 33px;
`;


export const ContainerWrapper = styled.form`
  position: relative;
  width: 70%;
  height: 80%;
  background: var(--color-bck-cardP);
  margin: 2.77rem auto 0 auto;
  
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding-left: 133px;

  .button{
    position: relative;
    left: 55px;
  }

  @media(max-width: 1000px){
    display: flex;
    flex-direction: column  ;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    gap: 20px;

    .name{
      margin-top: 20px;
    }

  
  }
  

  @media(max-width: 500px){
    overflow: hidden;
    width: 80%;
    .button{
      padding: 50px;
    }
  }

`
export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 30px;  
  color: #FFFFFF;

  @media(max-width: 1000px){
    margin-bottom: 15px;  
  }

  @media(max-width: 500px){
    font-size: 0.7rem;
    
  }

  @media(max-height: 500px){
    display:none ;
  }
`
export const Input = styled.input`
  width: 80%;
  height: 4rem;
  border-radius: 7px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  padding-left: 5px;
  text-overflow: ellipsis;
  border: 2px solid var(--color-bck-white);



  &:focus, &:hover{
    border: 2px solid orange;

  }

  @media(max-width: 1000px){
    width: 100%;
    flex-direction: column  ; 
  }


  @media(max-width: 500px){
    width: 100%;
    height: 2rem;
    font-size: 0.7rem;
    padding: 0 20px;

  }



`
export const TextArea = styled.textarea`
  width: 100%;
  height: 181px;
  resize: none;
  outline: none;
  border-radius: 7px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding-left: 5px;
  text-overflow: ellipsis;
  border: 2px solid var(--color-bck-white);

  padding: 5px 0 0 10px;

  border: 2px solid var(--color-bck-white);

  &:focus, &:hover{
    border: 2px solid orange;

  }


  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-bck);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-bck_options);
    border-radius: 20px;
    border: 3px solid var(--color-bck);
  }

  @media(max-width: 1000px){
    width: 100%;
    padding: 5px 20px;
    flex-direction: column  ;
  }


  @media(max-width: 500px){
    width: 100%;
    height: 7rem;
    font-size: 0.7rem;
    padding: 0 10px;
  }

`

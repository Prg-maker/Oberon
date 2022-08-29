import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90vh;
  width: 90vw;
  background-color: transparent;
  position: absolute;
 
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 50%;
  background: white;
  border-radius: 10px;
`

export const Text = styled.h3`
  font-size: 20px;

`

export const Button  = styled.button`
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  background: var(--color-text_delete);
  width: 10%;
  height: 25px;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 25px;

`
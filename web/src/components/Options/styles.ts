import styled from 'styled-components';

export const OptionsContainer= styled.div`
  width: 100px;
  height: 95px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: red;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px  ;
  z-index: 10;


  right: -90px;
  top: 0;
`;


export const ButtonLogin = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px  10px  0 0;
  color: var(--color-text_secondary);

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;

`
export const Separete = styled.div`
  width: 100%;
  height: 2px;
  background-color: var( --color-text-black);
`
export const ButtonDelete = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0   0 10px  10px  ;
  color: var( --color-text_delete);

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  cursor: pointer;

`
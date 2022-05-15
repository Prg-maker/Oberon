import styled from 'styled-components';

export const Container = styled.div`
  max-width: 15rem;
  min-width: 15rem;
  height: 15rem;
  background: var( --color-card);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items:center;
  color: var(--color-primary_text);
  >div{
    width: 100%;
    margin-top:1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    position: relative;

    svg{
      position: absolute;
      right: 0.9rem;
    }
  }
`;


export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
export const Name = styled.strong`
  padding-top: 43px;
  padding-right: 5px;
`
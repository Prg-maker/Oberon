import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  width: 15rem;
  height: 15rem;
  background: var( --color-card);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items:center;
  color: var(--color-primary_text);

  @media (max-width: 600px) {
    max-width: 50%;
    max-height:100%;
  }

  >div{
    width: 100%;
    margin-top:1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    position: relative;

    .ponts {
      position: absolute;
      right: 0.9rem;

    }
  }

  .user{
    background: var(--color-bck_gray);
    border-radius: 50%;
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
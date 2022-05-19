import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width:70% ;
  height: 80px;
  background: var( --color-bck_options);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

 
`;


export const Name = styled.strong`
  font-weight: 700;
  color: var(--color-bck-white);
  padding-left: 2rem;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 600px) {
    padding-left: 1rem ;
    font-size: 10px;
  }
`
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`
import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  width: 15rem;
  height: 15rem;
  background: var(--color-primary_text);
  border-radius: 10px;
  @media (max-width: 600px) {
    max-width: 50%;
    max-height:100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;


  .PlusCircle{
    cursor: pointer;
  }
`;

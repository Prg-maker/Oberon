import styled from 'styled-components';

export const Container = styled.div`
  max-width: 200px;
  height: 200px;
  background: var(--color-bck-cardP);
  border-radius: 10px;
  position: relative;
  z-index: 10;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    color: var(--color-bck-white);
    padding-top:10px;
  }

  @media (max-width:600px) {
    height: 300px;
    padding-bottom:30px;
  }

`;

export const Status = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 20px;
`


export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 29px;
  color: var(--color-bck-white);
  margin-left: 25px;

`
export const Details = styled.p`
  /*font-family: 'Inter';

  max-width: 100px;
  max-height: 100px;
  text-overflow: clip;*/
  line-height: 18px;
  margin-left: 25px;
  color: var(--color-bck-white);
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
  width: 80%;
  overflow: hidden;   
  text-overflow:ellipsis;
  overflow: auto;
  height: 50%;
  &::-webkit-scrollbar{
    background: var(--color-bck-cardP);
  }   
`
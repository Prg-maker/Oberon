import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: hidden;
  height: 100%;
  padding-top: 33px;
  margin: 0 auto;

  .details{
    color: var(--color-bck-white);

    >strong{
      font-weight: 700;
      font-size: .8rem;
    }
  }
`;


export const Project = styled.div`
  height: 100%;
  margin: 2.5rem 0 0  4rem    ;

`
export const Title = styled.div`
  font-size: 1.50rem;
  color: var(--color-bck-white);
  font-weight: bold;
  padding-bottom: 1.5rem;
`
export const Progress = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  >strong{
    color: var(--color-bck-white);
    font-weight: 700;
    font-size: .8rem;
  }

  .progress{
    background-color: var(--color-bck-white);
    position: relative;
    width: 50%;
    height: 7px;
    margin-left: .5rem;
    border-radius: 10px;
  }

  
` 
export const ProjectInProgress = styled.div`
  max-width: 90%;
  min-width: 50%;
  height: 7px;

  position: absolute;
  z-index: 10;
  border-radius:  10px;
  background-color: var( --color-progress_yellow);
  left: -2px;

` 
export const Details = styled.p`
  width: 100%;
  flex-wrap: wrap;
  margin:0.6rem 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding-right: 25px;
  opacity: 0.5;

  &:hover{
    opacity: 1;

  }
`
export const Repository = styled.div`

  display: flex;
  flex-direction: column;
  >strong{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
  }
` 
export const LinkRepository = styled.a`
`
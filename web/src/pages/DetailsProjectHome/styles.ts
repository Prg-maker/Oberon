import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding-top: 33px;
  margin: 0 auto;

  .details{
    color: var(--color-bck-white);

    >strong{
      font-weight: 700;
      font-size: .8rem;
      opacity: 0.8;
      @media (min-width: 400px) {
        font-size: 1.25rem;
      }
    }
  }
`;


export const Project = styled.div`
  height: 100%;


  @media (min-width: 400px) {
    margin: 2.5rem auto 0  auto    ;
    width: 70%;

  }

  @media (max-width: 389px) {
    margin: 0 auto;
    margin: 2.5rem 0 0  3rem;
  }
`
export const Title = styled.div`
  font-size: 1.50rem;
  color: var(--color-bck-white);
  font-weight: bold;
  padding-bottom: 1.5rem;

  @media (min-width: 400px) {
    padding-bottom: 4.3rem;
    font-size: 2.25rem;
  }
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

  @media (min-width: 400px) {
    padding-bottom: 5.8rem;
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
  width: 90%;
  max-height: 200px;
  flex-wrap: wrap;
  margin:0.6rem 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding-right: 25px;
  
  overflow: auto;
  border-bottom: 2px solid orange;
  @media (min-width: 800px) {
    overflow: auto;
    border-bottom:none;
  }
  @media (max-height: 490px) {
    height: 100px;
  }
`
export const Repository = styled.div`
  @media (min-width: 400px) {
    padding-top: 2%;
  }
  display: flex;
  flex-wrap: wrap;
  padding-top: 10%;

  >strong{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    color:var(--color-bck-white);
  }
` 
export const LinkRepository = styled.a`
  color: var(--color-progress_green);
  font-size:0.8rem;
  font-weight: bold;
  padding-left: 10px;
`
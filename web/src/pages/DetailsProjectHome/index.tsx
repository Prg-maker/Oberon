import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IsOpenDetailsProject } from "../../utils/isOpenDetailsProject";
import { Container, Project, Title, Progress , ProjectInProgress , Details, Repository , LinkRepository,} from "./styles";
//'/project/:id

interface ProjectProps{
  title: string;
  details:string;
  repositoryGit:string;
  progress: number | 0;
}

export function DetailsProjectHome() {
  const [project , setProject] = useState<ProjectProps>()
  const token = localStorage.getItem('token')
  const {id} = useParams()

  useEffect(()=> {
    async function get(){
      try{
      const  {data} = await api.get(`/project/${id}`, {

        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer '+token
        },      
      }) 

      setProject(data)

     }catch(err){
      return alert(err)
     }

    }

    get()

  }, [])
  const colorProgressCard = project?.progress <= 30? 'var(--color-progress_red)' :  project?.progress <= 70 ? 'var(--color-progress_yellow)' : 'var(--color-progress_green)'


  return (
    <Container>
      <IsOpenDetailsProject />
      <Project>
        <Title>{project?.title}</Title>
        <Progress>
         {
           project?.progress ? 
           <>
             <strong>Progresso</strong>

            <div className="progress">
              <ProjectInProgress
                style={{
                  width:`${project?.progress}%`,
                  background:colorProgressCard 
                }}            
              />
            </div>
           </>
           : 
           <h1>Progresso nao registrado</h1>
         }

        </Progress>

        <div className="details">
          <strong>Detalhes:</strong>
          <Details>
           {project?.details}
           
          </Details>
        </div>

        <Repository>
          <strong>Repositorio no github:</strong>
          <LinkRepository href={project?.repositoryGit}>{project?.repositoryGit}</LinkRepository>
        </Repository>
      </Project>
    </Container>
  );
}

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




  return (
    <Container>
      <IsOpenDetailsProject />
      <Project>
        <Title>{project?.title}</Title>
        <Progress>
          <strong>Progresso</strong>
          <div className="progress">
            <ProjectInProgress />
          </div>
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

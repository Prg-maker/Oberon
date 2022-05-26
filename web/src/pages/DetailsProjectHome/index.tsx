import { IsOpenDetailsProject } from "../../utils/isOpenDetailsProject";
import { Container, Project, Title, Progress , ProjectInProgress , Details, Repository , LinkRepository,} from "./styles";

export function DetailsProjectHome() {
  return (
    <Container>
      <IsOpenDetailsProject />
      <Project>
        <Title>Fist Project</Title>

        <Progress>
          <strong>Progresso</strong>
          <div className="progress">
            <ProjectInProgress />
          </div>
        </Progress>

        <div className="details">
          <strong>Detalhes:</strong>
          <Details>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellat corporis esse soluta, dolorem magnam quod consequatur error
            odit modi, optio rem quia? Vero laborum assumenda, iste velit
            deleniti earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellat corporis esse soluta, dolorem magnam quod consequatur error
            odit modi, optio rem quia? Vero laborum assumenda, iste velit
            deleniti earum.
           
          </Details>
        </div>

        <Repository>
          <strong>Repositorio no github:</strong>
          <LinkRepository href="#">https://github.com/Prg-maker/TDD</LinkRepository>
        </Repository>
      </Project>
    </Container>
  );
}

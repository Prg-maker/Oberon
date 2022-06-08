import { useContext, useState } from "react"
import { DetailsProject } from "../components/DetailsProjects"
import { Header } from "../components/Header"
import { UserContext } from "../context/UserProvider";

interface Props{
  name: string;
  nameGithub:string
}

export function IsOpenDetailsProject(){

  const {state} = useContext(UserContext)
  const {name , nameGithub} = state

  const [isOpenDetailsProject , setIsOpenDetailsProject] = useState(false)

  function toggleOpenDetailsProject(){
    setIsOpenDetailsProject(!isOpenDetailsProject)
  }


  return(
    <>
      <Header data={{name , nameGithub}} isOpenDetailsProject={toggleOpenDetailsProject}/>
      { isOpenDetailsProject && <DetailsProject/>}
    </>
  )
}
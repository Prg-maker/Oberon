import { useState } from "react"
import { DetailsProject } from "../components/DetailsProjects"
import { Header } from "../components/Header"

export function IsOpenDetailsProject(){

  const [isOpenDetailsProject , setIsOpenDetailsProject] = useState(false)

  function toggleOpenDetailsProject(){
    setIsOpenDetailsProject(!isOpenDetailsProject)
    
  }


  return(
    <>
      <Header isOpenDetailsProject={toggleOpenDetailsProject}/>
      { isOpenDetailsProject && <DetailsProject/>}
    </>
  )
}
import {Error, UseFinUserById , Id} from './type/data-user-props-find'
import {prisma} from '../prisma'

export class useFindUserById implements UseFinUserById{
  async findById(data:Id){

    const userId = await prisma.user.findFirst({
      where:{
        id:data.id
      }
    })

    return null


  }
}
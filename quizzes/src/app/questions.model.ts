import { Answer } from "./answer.model"

export class Questions{
    index(index: any) {
      throw new Error('Method not implemented.')
    }
    id:any=""
    subjectId:string = ""
    quest:string=""
    answers:Answer[] = []
    correctAnswer:string = ""
}
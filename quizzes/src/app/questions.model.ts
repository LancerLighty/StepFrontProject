import { Answer } from "./answer.model"

export class Questions{
    id:any=""
    subjectId:string = ""
    quest:string=""
    answers:Answer[] = []
    correctAnswer:string = ""
}
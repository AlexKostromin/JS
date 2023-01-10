import {StudentType} from "./02";
import {addSkill, doesStudentLiveIN, makeStudentActive} from "./03";

let student:StudentType

beforeEach(()=> {
    student =  {
        id: 1,
        name: "Sanya",
        age:25,
        isActive: true,
        address: {
        streetTitle:"Voistrochenko",
            city: {
            title:"Bryansk",
                countryTitle:"Russia"
        }
    },
    technologies: [
        {
            id:1,
            title:"HTML"
        },
        {
            id:2,
            title:"CSS"
        },
        {
            id:3,
            title:"React"
        }
        ]
}
})

test ("new tech skill should be added to student", ()=>{
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})
test ("does student lives in city", ()=>{
   let result1 = doesStudentLiveIN(student, "Moscow")
   let result2 = doesStudentLiveIN(student, "Bryansk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
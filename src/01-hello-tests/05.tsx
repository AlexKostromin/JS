export type ManType ={
    name:string
    age:number
}

const people:Array<ManType> = [
    {name:"Anrew Ivanov", age:33},
    {name:"Alexander Petrov", age:24},
    {name:"Dmitry Sidorov", age:18}
]


const dimychTransformator = (man: ManType) => ({
     stack:["css, html", "js", "react"],
     firstName:man.name.split("")[0],
     lastName:man.name.split("")[1]
 })


const devs = [
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName:"Ivanov"
    },
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName:"Petrov"
    },
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName:"Sidorov"
    }


]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]


const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack:["css, html", "js", "react"],
    firstName:man.name.split("")[0],
    lastName:man.name.split("")[1]
}))

const messages = people.map(p=>`Hello ${p.name.split(" ")[0]}. Welcome to IT-incubator`)

 export const createGreetingMessage = (people:Array<ManType>) => {
    return people.map(p=>`Hello ${p.name.split(" ")[0]}. Welcome to IT-incubator`)
}
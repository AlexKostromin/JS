type TechType ={
    id:number
    title:string
}

type CityType ={
    title:string
    countryTitle:string
}

type AddressType ={
    streetTitle:string
    city:CityType
}

export type StudentType= {
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechType>
}

 export const student: StudentType = {
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
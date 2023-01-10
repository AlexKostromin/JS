import {student, StudentType} from "./02";
import {CityType, governmentBuildingsType, HouseType} from "./02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill

    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = false
}

export const doesStudentLiveIN = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (governmentBuildingsType: governmentBuildingsType, staff: number) =>{
    governmentBuildingsType.staffCount -= staff
}

export const toHireStaff = (governmentBuildingsType: governmentBuildingsType, staff: number) =>{
    governmentBuildingsType.staffCount +=staff
}

export const createMessage = (city:CityType) =>{
 return `Hello ${city.title} citizens. I want you be Happy. All ${city.citizensNumber} men`
}

import {CityType, governmentBuildingsType, HouseType} from "./02_02";

export const demolishHousesOnTheStreet = (city: CityType, Street: string) =>{
    city.houses = city.houses.filter(h=>h.address.street.title !== Street)
}

export const getBuildingsWithStaffCountGreaterThen = (staff: Array<governmentBuildingsType>, count: number) =>{
   return  staff = staff.filter(s => s.staffCount>count)
}
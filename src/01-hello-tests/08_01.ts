import {users} from "./08_01.test";


export const usersArray1 = ["Dimych", "Natasha", "Valera", "Katya"]


export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}



const user = {id:100500, name: 'Igor'}

users[user.id.toString()] = user

delete users[user.id]

users[user.id].name = "Vitya"

export const usersArray = [
    {id:101, name: 'Dimych'},
    {id:3232312, name: 'Natasha'},
    {id:1212, name: 'Valera'},
    {id:1, name: 'Katya'}
]

usersArray.push(user)
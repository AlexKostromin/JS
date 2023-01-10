import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateTitleCompany, updateTitleCompanyTitle, upgradeCompanies,
    upgradeUserLaptop,
    userType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('referece type test', ()=>{
    let user:userType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})
test('change address', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: ['CSS', 'html', 'js', 'react']
    }

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)
})
test('upgrade laptop to mackbook address', ()=>{
    let user:UserWithLaptopType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Mackbook')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Mackbook')
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop.title).toBe('ZenBook')
})
test('change house to  address', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: ['CSS', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})
test('add books to user', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: ['CSS', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
})
test('update js to ts', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: ['CSS', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})
test('remove boook js ', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        books: ['CSS', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
})
test('companies test ', ()=>{
    let user:UserWithLaptopType & WithCompaniesType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        companies: [{id:1, title:'Epam'}, {id:2, title:'It-Incubator'}]
    }

    const userCopy = upgradeCompanies(user, {id:3, title:'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies.length).toBe(3)

})
test('update title company test ', ()=>{
    let user:UserWithLaptopType & WithCompaniesType = {
        name:'Dimych',
        hair: 32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop: {
            title:'ZenBook'
        },
        companies: [{id:1, title:'Eпам'}, {id:2, title:'It-Incubator'}]
    }

    const userCopy = updateTitleCompany(user, 1, 'Epam')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')

})
test('update company ', ()=>{

    let companies = {
        'Dimych': [{id:1, title:'Eпам'}, {id:2, title:'It-Incubator'}],
        'Artem': [{id:2, title:'It-Incubator'}]
    }
    const copy = updateTitleCompanyTitle(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')

})
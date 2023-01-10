export type userType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = userType & {
    laptop: LaptopType
}
export type UserWithBooksType = userType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string };
export type WithCompaniesType = userType & {
    companies: Array<CompanyType>
}


export function makeHairStyle(u: userType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair/power
    return copy
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function moveUser(u: UserWithLaptopType & UserWithBooksType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    /*copy.address = {...copy.address, city: city}*/

}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
    /*copy.address = {...copy.address, city: city}*/
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [
            ...u.books, newBook
        ]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(el => el === oldBook ? newBook : el)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookforremove: string) {
    return {
        ...u,
        books: u.books.filter(el => el !== bookforremove)
    }
}

export function upgradeCompanies(u: UserWithLaptopType & WithCompaniesType, NewCompany: {}) {
    return {
        ...u,
        companies: [...u.companies, NewCompany]
    }
}

export function updateTitleCompany(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map((el) => el.id === id ? {...el, title: title} : el)
    }
}

export function updateTitleCompanyTitle(companies: { [key:string]:Array<CompanyType>}, userName: string, companyId: number, newTitle: string) {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(el=>el.id===companyId ? {...el, title: newTitle} : el)

    return companyCopy
}



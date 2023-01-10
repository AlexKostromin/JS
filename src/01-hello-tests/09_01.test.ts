function increseAge(u: userType) {
    u.age++
}

type userType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test('reference type test', () => {
    let user: userType = {
        name: 'Dimych',
        age: 32,
        address:{
            title:'Voistrochenko'
        }
    }

    increseAge(user)
    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})
test('reference object type test', () => {
    let user: userType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Bryansk'
        }
    }
   // let addr = user.address

    let user2:userType = {
        name:'Lesha',
        age: 21,
        address : user.address
    }
  user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')

        })
test('reference array type test', () => {
    const address = {
        title: 'Bryansk'
    }

    let user: userType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
   // let addr = user.address

    let user2:userType = {
        name:'Lesha',
        age: 21,
        address : address
    }

    const users = [user, user2, {name:'Katya', age: 4,  address:address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'


  user2.address.title = 'Kanary'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')

        })
test('array test', () => {
    let users = [
        {
            name: 'Sasha',
            age: 26
        },
        {
            name: 'Olya',
            age: 23
        }
    ]

    let admins = users
    admins.push({name: 'Bandit', age: 10})
    expect(users[2]).toEqual({name: 'Bandit', age: 10})
})
test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = adminsCount + 1


})
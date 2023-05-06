import { action, autorun, observable, reaction, runInAction, when } from 'mobx'

class Person {
  @observable
  firstName: string = ''
  @observable
  lastName: string = ''

  @observable
  age: number = 50

  @observable
  isAlive: boolean = true

  constructor(props: Partial<Person>) {
    Object.assign(this, props)

    when(
      () => this.age > 99,
      () => this.bury()
    )
  }

  @action
  updateName(name: string) {
    this.firstName = name
  }

  @action
  updateLastName(lastName: string) {
    this.lastName = lastName
  }

  @action
  setAge(age: number) {
    this.age = age
  }

  @action
  bury() {
    this.isAlive = false
  }
}

const person = new Person({ firstName: 'Dror', lastName: 'Avidov' })

person.updateName('Mai')
person.updateLastName('Aloni')

runInAction(() => {
  person.updateName('Racheli')
  person.updateLastName('Verechzon')
})

const updater = () => {
  person.updateName('Maayan')
  person.updateLastName('Zilberberg')
}

updater()

autorun(() => {
  console.log(
    `*** Person name is: ${person.firstName}, ${person.lastName}, age: ${person.age} - ${person.isAlive}`
  )
})

reaction(
  () => (person.isAlive = false),
  () => console.log('RIP')
)

person.setAge(101)

console.log(
  `*** Person name is: ${person.firstName}, ${person.lastName}, age: ${person.age} - ${person.isAlive}`
)

export {}

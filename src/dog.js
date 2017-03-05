/* eslint-disable no-console */
// @flow
export default class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    console.log(`Wah wah, I'm ${this.name}`)
  }
}

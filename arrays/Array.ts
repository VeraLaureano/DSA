type arr = [unknown] | []

export class Array {
  private long: number
  private array: arr

  constructor (long: number) {
    this.long = long
    this.array = []
  }

  public getArray (): arr {
    return this.array
  }

  public getLong (): number {
    return this.long
  }

  public randomLoad (): arr {
    for (let i = 0; i < this.long; i++) {
      this.array[i] = Math.floor(Math.random() * 100)
    }
    return this.array
  }

  public toString(): string {
    let text = ''
    for (let i = 0; i < this.long; i++) {
      i !== this.long - 1 
        ? text += this.array[i] + ', '
        : text += this.array[i]
    }
    return text
  }
}

const myArray = new Array(10)
console.log(myArray.randomLoad())
console.log(myArray.toString())



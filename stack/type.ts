export class Stack {
  private _data: number[];

  constructor() {
    this._data = [];
  }

  push(value: number): void {
    this._data.push(value)
  }

  pop(): number | undefined {
    return this._data.pop()
  }

  peek(): number | undefined {
    return this._data[this._data.length - 1];
  }

  size(): number {
    return this._data.length
  }

  isEmpty(): boolean {
    return this._data.length === 0
  }
}

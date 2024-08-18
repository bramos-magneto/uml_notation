export abstract class Bird {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk(): void {
    console.info(`The bird ${this.name} is walking`);
  }

  public get getName(): string {
    return this.name;
  }
}

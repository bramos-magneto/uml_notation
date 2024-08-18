import { Bird } from "./bird.abstract";

export abstract class FlyingBird extends Bird {
  constructor(name: string) {
    super(name);
  }

  fly(): void {
    console.info(`The bird ${this.getName} is flaying`);
  }
}

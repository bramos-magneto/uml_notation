import { Bird } from "./bird.abstract";

export abstract class SwimmingBird extends Bird {
  constructor(name: string) {
    super(name);
  }

  swim(): void {
    console.info(`The bird ${this.getName} is swimming`);
  }
}

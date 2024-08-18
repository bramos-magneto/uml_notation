import { IFax } from "./fax.interface";

export class Fax implements IFax {
  fax(): void {
    console.log("Sending documents");
  }
}

import { IFax } from "./fax.interface";
import { IPrinter } from "./printer.interface";
import { IScan } from "./scan.interface";

export class SuperMachine implements IFax, IPrinter, IScan {
  fax(): void {
    console.log("Sending documents");
  }
  print(): void {
    console.log("Printing some documents");
  }
  scan(): void {
    console.log("Scanning documents");
  }
}

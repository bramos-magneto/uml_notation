import { IPrinter } from "./printer.interface";

export class Printer implements IPrinter {
  print(): void {
    console.log("Printing some documents");
  }
}

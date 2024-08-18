import { IScan } from "./scan.interface";

export class Scan implements IScan {
  scan(): void {
    console.log("Scanning documents");
  }
}

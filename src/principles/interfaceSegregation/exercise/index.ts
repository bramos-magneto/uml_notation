// import { FaxExercise } from "./faxExercise.class";
// import { PrinterExercise } from "./printerExercise.class";
// import { ScanExercise } from "./scanExercise.class";

import { Fax } from "./solution/fax.class";
import { Printer } from "./solution/printer.class";
import { Scan } from "./solution/scan.class";
import { SuperMachine } from "./solution/superMachine.class";

/**
 * Ejercicio de Segregacion de interfaces
 *
 * Una maquina multi servicios
 *
 * ¿Como deberiamos refactorizar estas maquinas de oficina
 * para que cumpla con el principio de segregacion de interfaces?
 *
 * Tip: una impresora que envia fax?
 */

export const exercise = () => {
  // const printer = new PrinterExercise();
  // const fax = new FaxExercise();
  // const scanner = new ScanExercise();

  // printer.print();
  // printer.fax();
  // printer.scan();

  // fax.print();
  // fax.fax();
  // fax.scan();

  // scanner.print();
  // scanner.fax();
  // scanner.scan();

  const printer = new Printer();
  const fax = new Fax();
  const scanner = new Scan();
  const superMachine = new SuperMachine();

  printer.print();
  fax.fax();
  scanner.scan();

  superMachine.fax();
  superMachine.print();
  superMachine.scan();
};

import { INotification } from "./notification.interface";

export class EmailService implements INotification {
  notify(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

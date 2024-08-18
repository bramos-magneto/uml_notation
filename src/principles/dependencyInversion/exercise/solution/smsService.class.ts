import { INotification } from "./notification.interface";

export class SmsService implements INotification {
  notify(message: string): void {
    console.log(`Sending sms with message: ${message}`);
  }
}

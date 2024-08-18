import { INotification } from "./notification.interface";

export class Notification {
  private notificationService: INotification;

  constructor(notificationService: INotification) {
    this.notificationService = notificationService;
  }

  notify(message: string): void {
    this.notificationService.notify(message);
  }
}

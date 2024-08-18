// import { NotificationExercise } from "./notificationExercise.bad.class";
import { EmailService } from "./solution/emailService.class";
import { Notification } from "./solution/notification.class";
import { SmsService } from "./solution/smsService.class";

/**
 * Ejercicio de Inversion de dependencias
 *
 * ¿Como deberiamos refactorizar este notificador para que cumpla
 * con el principio de inversion de dependencias?
 */

export const exercise = () => {
  // const notificator = new NotificationExercise();
  // notificator.notify("I'm an email message");

  const emailService = new EmailService();
  const smsService = new SmsService();

  let notificator = new Notification(emailService);
  notificator.notify("Hallo Welt! :D");

  notificator = new Notification(smsService);
  notificator.notify("Hallo Leute! :D");
};

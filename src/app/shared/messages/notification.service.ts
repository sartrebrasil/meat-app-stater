import { EventEmitter } from '@angular/core';

export class NotificationService {
    notifier = new EventEmitter<String>();

    notify(message: String) {
        this.notifier.emit(message);
    }

}

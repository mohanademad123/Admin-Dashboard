import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messageService = inject(MessageService);

  showMessage(severity: string, summary: string, detail: string) {
    if (this.messageService) {
      this.messageService.add({ severity, summary, detail });
    }
  }
}

import { Component } from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, HttpClientModule, NgIf],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div *ngIf="models$ | async as models; else loading">
      <pre>{{ models | json }}</pre>
    </div>
    <ng-template #loading>Loading models...</ng-template>
  `,
})
export class AppComponent {
  name = 'Angular';
  models$: Observable<any>;

  constructor(private http: HttpClient) {
    this.models$ = this.http.get('/models');
  }
}

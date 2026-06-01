// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly SHEET_URL = 'https://script.google.com/macros/s/AKfycbxZw7XV9O4R3Az72_eVW8HRpVMq0RFXoP937KU2yUbLgGXTv_b9PFIwHJhXszHPmRsb/exec';

  constructor(private http: HttpClient) {}

  submitForm(form: { name: string; email: string; subject: string; message: string }) {
    return this.http.post(this.SHEET_URL, JSON.stringify(form), {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
    });
  }
}
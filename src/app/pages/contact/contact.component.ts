import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SectionHeaderModel } from 'src/app/shared/components/section-header/section-header.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sectionHeaderModel: SectionHeaderModel = {
    title: 'Vamos conversar?',
    description: 'Tem um projeto em mente ou quer trocar uma ideia?<br>Me mande uma mensagem.'
  }
  constructor(private http: HttpClient) {
  }

  onSubmit(form: NgForm) {
    const url = 'https://formsubmit.co/ajax/moisesmarchinipereira@gmail.com';
    const body = {
      ...form.value,
      _captcha: false
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, body,{ headers }).subscribe({
      next: (response) => {
        console.log('Enviado com sucesso');
        form.resetForm();
      },
      error: (err) => {
        console.log('Erro ao enviar dados');
      }
    })
  }
}

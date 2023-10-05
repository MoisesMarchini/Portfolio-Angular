import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/app/environments/environment';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';

@Component({
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  animations: [fadeInOutAnimation]
})
export class EmailFormComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  get pageTitle() { return environment.sectionsTitle[3] }
  get languageData() { return environment.languageData }

  contactFormData = {
    name: '',
    email: '',
    body: ''
  }

  submitContactForm(form: NgForm) {
    if (form.invalid)
      return;
  }
}

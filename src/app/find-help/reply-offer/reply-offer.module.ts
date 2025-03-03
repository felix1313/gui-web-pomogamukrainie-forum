import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferComponent } from './reply-offer.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [ReplyOfferComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
    RecaptchaV3Module,
  ],
  exports: [ReplyOfferComponent],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      // TODO generate new key and replace
      useValue: '6LdqANUbAAAAAIPOBYv8_eQw8Bti4TVXzAmca1zI',
    },
  ],
})
export class ReplyOfferModule {}

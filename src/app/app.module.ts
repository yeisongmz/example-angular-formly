import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    MatNativeDateModule,
    FormlyMatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */

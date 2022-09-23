import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Datepicker1',
      type: 'datepicker',
      props: {
        label: 'Fecha de Solicitud',
        placeholder: 'Fecha de Solicitud',
        description: 'Fecha de carga',
        required: false,
      },
    },
    {
      key: 'Input1',
      type: 'input',
      props: {
        label: 'Registro Nro.',
        placeholder: 'Registro Nro.',
        description: 'Registro Nro.',
        required: false,
      },
    },
    {
      key: 'Input2',
      type: 'input',
      props: {
        label: 'Nombres',
        placeholder: 'Nombres',
        description: 'Nombres',
        required: false,
      },
    },
    {
      key: 'Input3',
      type: 'input',
      props: {
        label: 'Apellidos',
        placeholder: 'Apellidos',
        description: 'Apellidos',
        required: false,
      },
    },
    {
      key: 'Input4',
      type: 'input',
      props: {
        label: 'CI Nro.',
        placeholder: 'CI Nro.',
        description: 'CI Nro.',
        required: false,
      },
    },
    {
      key: 'Input5',
      type: 'input',
      props: {
        label: 'Grupo Sanguíneo',
        placeholder: 'Grupo Sanguíneo',
        description: 'Grupo Sanguíneo',
        required: false,
      },
    },
    {
      key: 'Input6',
      type: 'input',
      props: {
        label: 'Apellidos',
        placeholder: 'Apellidos',
        description: 'Apellidos',
        required: false,
      },
    },
    {
      key: 'Datepicker2',
      type: 'datepicker',
      props: {
        label: 'Fecha de Nacimiento',
        placeholder: 'Fecha de Nacimiento',
        description: 'Fecha de Nacimiento',
        required: false,
      },
    },
    {
      key: 'Input7',
      type: 'input',
      props: {
        label: 'Lugar de Nacimiento',
        placeholder: 'Lugar de Nacimiento',
        description: 'Lugar de Nacimiento',
        required: false,
      },
    },
    {
      key: 'Input8',
      type: 'input',
      props: {
        label: 'Departamento',
        placeholder: 'Departamento',
        description: 'Departamento',
        required: false,
      },
    },
    {
      key: 'Input9',
      type: 'input',
      props: {
        label: 'Ciudad',
        placeholder: 'Ciudad',
        description: 'Ciudad',
        required: false,
      },
    },
    {
      key: 'Input10',
      type: 'input',
      props: {
        label: 'Barrio o Localidad',
        placeholder: 'Barrio o Localidad',
        description: 'Barrio o Localidad',
        required: false,
      },
    },
    {
      key: 'Input11',
      type: 'input',
      props: {
        label: 'Dirección física',
        placeholder: 'Dirección física',
        description: 'Dirección física',
        required: false,
      },
    },
    {
      key: 'Input12',
      type: 'input',
      props: {
        label: 'Teléfono',
        placeholder: 'Teléfono',
        description: 'Teléfono',
        required: false,
      },
    },
    {
      key: 'Input13',
      type: 'input',
      props: {
        label: 'Institución o Empresa donde trabaja',
        placeholder: 'Institución o Empresa donde trabaja',
        description: 'Institución o Empresa donde trabaja',
        required: false,
      },
    },
    {
      key: 'Input14',
      type: 'input',
      props: {
        label: 'Departamento laboral',
        placeholder: 'Departamento laboral',
        description: 'Departamento laboral',
        required: false,
      },
    },
    {
      key: 'Input15',
      type: 'input',
      props: {
        label: 'Ciudad laboral',
        placeholder: 'Ciudad laboral',
        description: 'Ciudad laboral',
        required: false,
      },
    },
    {
      key: 'Input16',
      type: 'input',
      props: {
        label: 'Barrio o Localidad laboral',
        placeholder: 'Barrio o Localidad laboral',
        description: 'Barrio o Localidad laboral',
        required: false,
      },
    },
  ];

  submit() {
    if (true) {
      alert(JSON.stringify(this.fields));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */

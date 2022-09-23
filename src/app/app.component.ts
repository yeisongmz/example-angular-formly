import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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
        required: false,
      },
    },
    {
      key: 'Input1',
      type: 'input',
      props: {
        label: 'Registro Nro.',
        placeholder: 'Registro Nro.',
        required: false,
      },
    },
    {
      key: 'Input2',
      type: 'input',
      props: {
        label: 'Nombres',
        placeholder: 'Nombres',
        required: false,
      },
    },
    {
      key: 'Input3',
      type: 'input',
      props: {
        label: 'Apellidos',
        placeholder: 'Apellidos',
        required: false,
      },
    },
    {
      key: 'Input4',
      type: 'input',
      props: {
        label: 'CI Nro.',
        placeholder: 'CI Nro.',
        required: false,
      },
    },
    {
      key: 'Input5',
      type: 'input',
      props: {
        label: 'Grupo Sanguíneo',
        placeholder: 'Grupo Sanguíneo',
        required: false,
      },
    },
    {
      key: 'Datepicker2',
      type: 'datepicker',
      props: {
        label: 'Fecha de Nacimiento.',
        placeholder: 'Fecha de Nacimiento',
        required: false,
      },
    },
    {
      key: 'Input7',
      type: 'input',
      props: {
        label: 'Lugar de Nacimiento',
        placeholder: 'Lugar de Nacimiento',
        required: false,
      },
    },
    {
      key: 'Input8',
      type: 'input',
      props: {
        label: 'Departamento',
        placeholder: 'Departamento',
        required: false,
      },
    },
    {
      key: 'Input9',
      type: 'input',
      props: {
        label: 'Ciudad',
        placeholder: 'Ciudad',
        required: false,
      },
    },
    {
      key: 'Input10',
      type: 'input',
      props: {
        label: 'Barrio o Localidad',
        placeholder: 'Barrio o Localidad',
        required: false,
      },
    },
    {
      key: 'Input11',
      type: 'input',
      props: {
        label: 'Dirección física',
        placeholder: 'Dirección física',
        required: false,
      },
    },
    {
      key: 'Input12',
      type: 'input',
      props: {
        label: 'Teléfono',
        placeholder: 'Teléfono',
        required: false,
      },
    },
    {
      key: 'Input13',
      type: 'input',
      props: {
        label: 'Institución o Empresa donde trabaja',
        placeholder: 'Institución o Empresa donde trabaja',
        required: false,
      },
    },
    {
      key: 'Input14',
      type: 'input',
      props: {
        label: 'Departamento laboral',
        placeholder: 'Departamento laboral',
        required: false,
      },
    },
    {
      key: 'Input15',
      type: 'input',
      props: {
        label: 'Ciudad laboral',
        placeholder: 'Ciudad laboral',
        required: false,
      },
    },
    {
      key: 'Input16',
      type: 'input',
      props: {
        label: 'Barrio o Localidad laboral',
        placeholder: 'Barrio o Localidad laboral',
        required: false,
      },
    },
  ];

  ngOnInit(): void {
    let modelInit = {
      Datepicker1: '2022-09-23T04:00:00.000Z',
      Input1: '68468',
      Input2: 'Yeison',
      Input3: 'Gimenez',
      Input4: '6253219',
      Input5: 'NA',
      Datepicker2: '1996-03-18T04:00:00.000Z',
      Input7: 'Luque',
      Input8: 'Central',
      Input9: 'Luque',
      Input10: 'Moracue',
      Input11: 'Sub Oficial Ignacio Vera',
      Input12: '0992682485',
      Input13: 'CDS',
      Input14: 'Developers',
      Input15: 'Asuncion',
      Input16: 'NA',
    };
    //this.model = modelInit;
  }

  submit() {
    if (true) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */

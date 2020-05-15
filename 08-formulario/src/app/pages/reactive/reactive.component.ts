import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [
  ]
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder,
               private validador: ValidadoresService ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  agregarPasatiempos() {
    this.pasatimepos.push( this.fb.control('', [Validators.required]));
  }

  borrarPasatiempo( i: number ) {
    this.pasatimepos.removeAt(i);
  }

  get pasatimepos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get usuarioNoValido(){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      email: [''],
      usuario: ['', , this.validador.existeUsuario],
      direccion: this.fb.group({
        distrito: ['', [Validators.required]],
        ciudad: ['', [Validators.required]]
      }),
      pasatiempos: this.fb.array([])
    });
  }

  guardar(){
    console.log(this.forma);

    if ( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      } );
    }
  }
}


const titulo = document.getElementById('titulo');
const contenido = document.getElementById("myTextarea");
const licencia = document.getElementById('licencia');
const error = document.getElementById('e');

function limpiarFormulario(){
  error.style.display = 'none';
  titulo.style.background = '#FAFCFF';
  document.getElementById('til').style.background = '#FAFCFF';
  document.getElementById('til').style.color = 'black';
  document.getElementById('rect').style.background = '#EBF4FF';
  document.getElementById('rect').style.color = 'black';
}

function validarTitulo(e){
  if(titulo.value === null || titulo.value === ''){
    error.style.display = 'block';
    titulo.style.background = 'red';
    document.getElementById('til').style.background = 'red';
    document.getElementById('til').style.color = 'white';
    e.preventDefault();
  }
  else {
    titulo.style.background = '#FAFCFF';
    document.getElementById('til').style.background = '#FAFCFF';
    document.getElementById('til').style.color = 'black';
  }
}

function validarContenido(e){
  if(contenido.value === null || contenido.value === ''){
    error.style.display = 'block';
    document.getElementById('des').style.background = 'red';
    e.preventDefault();
  }
}

function validarLicencia(e){
  if(!licencia.checked){
    error.style.display = 'block';
    document.getElementById('rect').style.background = 'red';
    document.getElementById('rect').style.color = 'white';
    e.preventDefault();
  }
  else {
    document.getElementById('rect').style.background = '#EBF4FF';
    document.getElementById('rect').style.color = 'black';
  }
}

function validar(e){
  errors = innerHTML = '';
  validarTitulo(e);
  validarContenido(e);
  validarLicencia(e);
}


const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validar);
formulario.addEventListener('reset',limpiarFormulario);

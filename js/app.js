let listaProductos = [];

const objProducto = {
  idProducto: '',
  nombre: '',
  precioBase: '',
  consumoE: '',
  peso: '',
  color: ''
}

let edit = false;

// inicio para modal
const btnLanzarModal = document.querySelector('#lanzar-modal');

const btnOcultarModal = document.querySelector('#ocultar-modal');

const contModal = document.querySelector('.container__div');

btnLanzarModal.addEventListener('click', (e) => {
  e.preventDefault();
  contModal.classList.add('mostrar');
});

btnOcultarModal.addEventListener('click', (e) => {
  e.preventDefault();
  contModal.classList.remove('mostrar');
});
// fin para modal

const formulario = document.querySelector('#formulario');
const id_ = document.querySelector('#id');
const nombre_ = document.querySelector('#nombre');
const precioBase_ = document.querySelector('#precioBase');
const consumoE_ = document.querySelector('#consumoE');
const peso_ = document.querySelector('#peso');
const color_ = document.querySelector('#color');
const btn_add = document.querySelector('#btn_Add');

// cuando el form detecte el submit va a 
// ejecutar la funcion validar formulario
formulario.addEventListener('submit', validarFormulario);

// function para validad formulario
function validarFormulario(e) {

  e.preventDefault();

  if (id_.value === '', nombre_.value === '' || precioBase_.value === '' || consumoE_.value === '' || peso_.value === '' || color_.value === '') {
    alert('Los campos están vacios.');
    return;
  }
  if (edit) {
    editarProducto();
    edit = false;


  } else {
    // objProducto.idProducto = Date.now();
    objProducto.idProducto = id_.value;
    objProducto.nombre = nombre_.value;
    objProducto.precioBase = precioBase_.value;
    objProducto.consumoE = consumoE_.value;
    objProducto.peso = peso_.value;
    objProducto.color = color_.value;
    addProducto();

  }
}

function addProducto() {
  listaProductos.push({ ...objProducto });

  mostrarProducto();
  formulario.reset();
  cleanObjeto();

}


function cleanObjeto() {
  objProducto.idProducto = '';
  objProducto.nombre = '';
  objProducto.precioBase = '';
  objProducto.consumoE = '';
  objProducto.peso = '';
  objProducto.color = '';
}

function mostrarProducto() {
  cleanHTML();

  const containerProductos = document.querySelector('.container__productos');

  const titulos = document.createElement("p");
  titulos.innerText = "id || Electrodomestico || PrecioBase || consumo E || Peso || Color";

  listaProductos.forEach(producto => {
    const { idProducto, nombre, precioBase, consumoE, peso, color } = producto;

    const parrafo = document.createElement('p');
    parrafo.textContent = `${idProducto + "\t"} | ${nombre + "\t"} | ${"$ " + precioBase + "\t"} | ${consumoE + "\t"} | ${peso + " kg" + "\t"} | ${color + "\t"} `;
    // estaba id aqui debajo
    parrafo.dataset.id = id;

    // button editar
    const edit_btn = document.createElement('button');
    edit_btn.setAttribute("id", "lanzar-modal");
    edit_btn.onclick = () => cargarProductos(producto);
    edit_btn.textContent = 'Editar';
    edit_btn.classList.add('btn', 'container__btn_editar');
    parrafo.append(edit_btn);

    // button eliminar
    const delete_btn = document.createElement('button');
    delete_btn.onclick = () => eliminarProductos(idProducto);
    delete_btn.textContent = 'Eliminar';
    delete_btn.classList.add('btn', 'container__btn_delete');
    parrafo.append(delete_btn);

    const hr = document.createElement('hr');

    containerProductos.appendChild(titulos);
    containerProductos.appendChild(parrafo);
    containerProductos.appendChild(hr);


  });

}


function cleanHTML() {
  const containerProductos = document.querySelector('.container__productos');
  while (containerProductos.firstChild) {
    containerProductos.removeChild(containerProductos.firstChild);
  }
}

function cargarProductos(producto) {
  const { idProducto, nombre, precioBase, consumoE, peso, color } = producto;
  id_.value = idProducto;
  nombre_.value = nombre;
  precioBase_.value = precioBase;
  consumoE_.value = consumoE;
  peso_.value = peso;
  color_.value = color;

  objProducto.idProducto = idProducto;

  formulario.querySelector('button[type="submit"]').textContent = 'Aceptar';
  edit = true;
}

function editarProducto() {
  // objProducto.idProducto = id_.value;
  objProducto.nombre = nombre_.value;
  objProducto.precioBase = precioBase_.value;
  objProducto.consumoE = consumoE_.value;
  objProducto.peso = peso_.value;
  objProducto.color = color_.value;

  listaProductos.map(producto => {

    if (producto.idProducto === objProducto.idProducto) {
      producto.idProducto = objProducto.idProducto;
      producto.nombre = objProducto.nombre;
      producto.precioBase = objProducto.precioBase;
      producto.consumoE = objProducto.consumoE;
      producto.peso = objProducto.peso;
      producto.color = objProducto.color;
    }

  });

  cleanHTML();
  mostrarProducto();

  formulario.reset();

  formulario.querySelector('button[type="submit"]').textContent = 'Añadir';

  edit = false;
}

function eliminarProductos(idProducto) {
  listaProductos = listaProductos.filter(producto => producto.idProducto !== idProducto);

  cleanHTML();
  mostrarProducto();
}

let listaProductos = [];

const objProducto = {
  idProducto: '',
  nombre: '',
  cantidad: '',
  precio: ''
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
const cantidad_ = document.querySelector('#cantidad');
const precio_ = document.querySelector('#precio');
const btn_add = document.querySelector('#btn_Add');

// cuando el form detecte el submit va a 
// ejecutar la funcion validar formulario
formulario.addEventListener('submit', validarFormulario);

// function para validad formulario
function validarFormulario(e) {

  e.preventDefault();

  if (id_.value === '', nombre_.value === '' || cantidad_.value === '' || precio_.value === '') {
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
    objProducto.cantidad = cantidad_.value;
    objProducto.precio = precio_.value;
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
  objProducto.cantidad = '';
  objProducto.precio = '';
}

function mostrarProducto() {
  cleanHTML();

  const containerProductos = document.querySelector('.container__productos');

  listaProductos.forEach(producto => {
    const { idProducto, nombre, cantidad, precio } = producto;

    const parrafo = document.createElement('p');
    parrafo.textContent = `${idProducto} - ${nombre} - ${cantidad} - ${precio} - `;
    // estaba id aqui debajo
    parrafo.dataset.id = id;

    // button editar
    const edit_btn = document.createElement('button');
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
  const { idProducto, nombre, cantidad, precio } = producto;
  id_.value = idProducto;
  nombre_.value = nombre;
  cantidad_.value = cantidad;
  precio_.value = precio;

  objProducto.idProducto = idProducto;

  formulario.querySelector('button[type="submit"]').textContent = 'Aceptar';
  edit = true;
}

function editarProducto() {
  // objProducto.idProducto = id_.value;
  objProducto.nombre = nombre_.value;
  objProducto.cantidad = cantidad_.value;
  objProducto.precio = precio_.value;

  listaProductos.map(producto => {

    if (producto.idProducto === objProducto.idProducto) {
      producto.idProducto = objProducto.idProducto;
      producto.nombre = objProducto.nombre;
      producto.cantidad = objProducto.cantidad;
      producto.precio = objProducto.precio;
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

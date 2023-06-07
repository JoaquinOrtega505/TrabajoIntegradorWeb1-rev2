

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    errorMessage.textContent = 'Todos los campos son obligatorios.';
    successMessage.textContent = '';
    return;
  }

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'El email ingresado no es válido.';
    successMessage.textContent = '';
    return;
  }

  if (message.length > 100) {
    errorMessage.textContent = 'El mensaje no puede superar los 100 caracteres.';
    successMessage.textContent = '';
    return;
  }

  // Código para agregar HTML mostrando los datos enviados
  const messageElement = document.createElement('p');
  messageElement.textContent = `Nombre: ${name}, Email: ${email}, Mensaje: ${message}`;
  successMessage.textContent = 'Datos enviados correctamente:';
  successMessage.appendChild(messageElement);

  // Restablecer campos del formulario
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  errorMessage.textContent = '';
});
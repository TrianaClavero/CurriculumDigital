window.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('Nombre');
    const nombreSpan = document.getElementById('Nombre-span');
    const asunto = document.getElementById('Asunto');
    const asuntoSpan = document.getElementById('Asunto-span');
    const mensaje = document.getElementById('Mensaje');
    const mensajeSpan = document.getElementById('Mensaje-span');
    const form = document.getElementById('form-validation');

    nombre.classList.add('void');
    asunto.classList.add('void');
    mensaje.classList.add('void');

    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalMessage = document.getElementById('modal-message');

    const textRegExp = /^[a-zA-Z\s]+$/;

    const showModal = (message) => {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    };

    const hideModal = () => {
        modal.style.display = 'none';
    };

    closeButton.addEventListener('click', hideModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    nombre.addEventListener('input', () => {
        if (!textRegExp.test(nombre.value)) {
            nombreSpan.textContent = 'El nombre solo debe contener letras y espacios';
            nombre.classList.add('invalid');
        } else if (nombre.value.length <= 2) {
            nombreSpan.textContent = 'El nombre debe tener más de 2 caracteres';
            nombre.classList.add('invalid');
        } else {
            nombreSpan.textContent = '';
            nombre.classList.remove('invalid');
            nombre.classList.remove('void');
        }
    });

    asunto.addEventListener('input', () => {
        if (asunto.value.length <= 2) {
            asuntoSpan.textContent = 'El asunto debe tener más de 2 caracteres';
            asunto.classList.add('invalid');
        } else {
            asuntoSpan.textContent = '';
            asunto.classList.remove('invalid');
            asunto.classList.remove('void');
        }
    });

    mensaje.addEventListener('input', () => {
        if (mensaje.value.length < 10) {
            mensajeSpan.textContent = 'El mensaje debe tener al menos 10 caracteres';
            mensaje.classList.add('invalid');
        } else {
            mensajeSpan.textContent = '';
            mensaje.classList.remove('invalid');
            mensaje.classList.remove('void');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.querySelectorAll('.invalid').length > 0 || form.querySelectorAll('.void').length > 0) {
            showModal('Por favor, complete todos los campos correctamente.');
            return;
        }

        showModal('¡Mensaje enviado con éxito!');
        form.reset();
    });
});
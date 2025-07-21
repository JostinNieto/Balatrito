// Seleccionamos todos los elementos <li>
    const items = document.querySelectorAll('ul li');

    // Recorremos cada uno y le añadimos un event listener
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Haz hecho clic en: ${item.textContent}`);
        });
    });

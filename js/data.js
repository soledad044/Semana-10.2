// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Recupera el dato del localStorage
    const data = localStorage.getItem('username');

    // Selecciona el elemento donde se mostrará el dato
    const dataElement = document.getElementById('data');

    // Verifica si hay algún dato y actualiza el contenido del elemento
    if (data) {
        dataElement.textContent = data;
    } else {
        dataElement.textContent = 'No hay datos disponibles.';
    }
});

// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el botón y el campo de entrada
    const button = document.getElementById('buttonText');
    const input = document.getElementById('inputText');

    // Agregamos un event listener al botón para manejar el clic
    button.addEventListener('click', function() {
        // Obtenemos el valor del campo de entrada
        const inputValue = input.value;

        // Guardamos el valor en localStorage con la clave 'username'
        localStorage.setItem('username', inputValue);

        // Opcional: Limpiamos el campo de entrada después de guardar el valor
        input.value = '';

        // Opcional: Podrías redirigir al usuario a data.html
        window.location.href = 'data.html';
    });
});

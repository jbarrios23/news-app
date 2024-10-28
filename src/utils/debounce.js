
//Función de debounce para optimizar las solicitudes 
//en componentes como la barra de búsqueda.

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

export default debounce;

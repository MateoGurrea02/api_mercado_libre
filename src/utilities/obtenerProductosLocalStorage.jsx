const obtenerProductosLocalStorage = (key) => {
    const elementosString = localStorage.getItem(key);
    return elementosString ? JSON.parse(elementosString) : [];
  };

export default obtenerProductosLocalStorage
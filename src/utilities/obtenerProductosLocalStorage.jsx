const obtenerProductosLocalStorage = () => {
    const productosString = localStorage.getItem('itemsCarrito');
    return productosString ? JSON.parse(productosString) : [];
  };

export default obtenerProductosLocalStorage
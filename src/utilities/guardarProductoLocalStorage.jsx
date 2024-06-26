const guardarProductosLocalStorage = (productos) => {
    localStorage.setItem('itemsCarrito', JSON.stringify(productos));
  };

export default guardarProductosLocalStorage
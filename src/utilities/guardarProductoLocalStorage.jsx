const guardarProductosLocalStorage = (key,elementos) => {
    localStorage.setItem(key, JSON.stringify(elementos));
  };

export default guardarProductosLocalStorage
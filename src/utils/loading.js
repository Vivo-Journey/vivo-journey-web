let isLoading = false;
let listeners = [];

export const setLoading = (value) => {
  isLoading = value;
  listeners.forEach((fn) => fn(isLoading));
};

export const subscribeLoading = (fn) => {
  listeners.push(fn);
  // retorna função para remover listener
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
};

export const getLoading = () => isLoading;

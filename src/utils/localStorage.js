export const LocalStorage = {
  get: (key) => {
    try {
      return localStorage.getItem(key);
    }
    catch (err) {
      throw new Error(err);
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
    }
    catch (err) {
      throw new Error(err);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    }
    catch (err) {
      throw new Error(err);
    }
  }
}
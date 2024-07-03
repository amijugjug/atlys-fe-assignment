export const getItemFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(
        `Error parsing item from localStorage with key "${key}":`,
        error
      );
      return null;
    }
  }
  return null;
};

export const setItemToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    console.error(
      `Error stringifying item for localStorage with key "${key}":`,
      error
    );
  }
};

export const removeItemFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

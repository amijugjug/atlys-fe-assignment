interface CookieItem {
  name: string;
  value: string;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
}

interface CookieCRUDOperations<T> {
  create(item: T): void;
  read(name: string): T | null;
  update(name: string, updatedItem: T): void;
  delete(name: string): void;
}

class CookieService<T extends CookieItem> implements CookieCRUDOperations<T> {
  create(item: T): void {
    let cookieString = `${encodeURIComponent(item.name)}=${encodeURIComponent(item.value)}`;

    if (item.expires) {
      cookieString += `; expires=${item.expires.toUTCString()}`;
    }
    if (item.path) {
      cookieString += `; path=${item.path}`;
    }
    if (item.domain) {
      cookieString += `; domain=${item.domain}`;
    }
    if (item.secure) {
      cookieString += `; secure`;
    }

    document.cookie = cookieString;
  }

  read(name: string): T | null {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        const value = cookie.substring(nameEQ.length);
        return { name, value: decodeURIComponent(value) } as T;
      }
    }

    return null;
  }

  update(name: string, updatedItem: T): void {
    this.create(updatedItem);
  }

  delete(name: string): void {
    this.create({
      name,
      value: '',
      expires: new Date(0),
    } as T);
  }
}

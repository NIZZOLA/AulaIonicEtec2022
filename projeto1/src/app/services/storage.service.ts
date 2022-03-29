import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key:string) {
    return this._storage.get(key);
  }

  public remove(key:string) {
    this._storage.remove(key);
  }

  public getAll() {
    const lista = [];
    this.storage.forEach((value, key, index ) => {
      lista.push(value);
    });
    return lista;
  }

  // public getNewId() {
  //   return Math.max.apply(Math, this.getAll().map(function(o) { return parseInt(o?.id) + 1; }))
  // }
}
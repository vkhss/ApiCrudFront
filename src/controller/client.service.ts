
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Client {
  name: string;
  nickname: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/characters';

  getAll() {
    return this.http.get<Client[]>(this.url);
  }

  getById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  create(Client: Client) {
    return this.http.post(this.url, Client);
  }

  // update(Client: Client) {
  //   return this.http.put(this.url + '/' + Client.id, Client);
  // }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
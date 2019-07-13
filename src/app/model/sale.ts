import {Client} from "./client";
import {Product} from "./product";

export class Sale {


  private _id: number;
  private _client: Client;
  private _products :Array<Product>;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get products(): Array<Product> {
    return this._products;
  }

  set products(value: Array<Product>) {
    this._products = value;
  }
}

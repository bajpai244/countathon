import { t_store } from "../types/index";

export default class Store implements t_store {
  #count: number;

  constructor() {
    this.#count = 0;
  }

  increase() {
    this.#count += 1;
  }

  get() {
    return this.#count;
  }
}

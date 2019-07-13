import {Injectable} from '@angular/core';;
import {ServiceConfig} from "./service-config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GenericService {


  constructor(private http: HttpClient,
              private config: ServiceConfig) {
  }





  get(base: string): any {
    return this.http.get(this.config.url+base);
  }

  put(base: string, object: object): any {

    return this.http.put(this.config.url+base, JSON.stringify(object));
  }

  post(base: string, object: object): any {
    return this.http.post(this.config.url+base, JSON.stringify(object));
  }


  delete(base: string, code: number): any {
    return this.http.delete(this.config.url+base + '/' + code);
  }

}

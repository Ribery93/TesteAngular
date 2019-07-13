export class ServiceConfig {

  private _url : string;


  constructor (){
    this. _url = 'http://localhost:8080/service';
  }


  get url(): string {
    return this._url;
  }

}

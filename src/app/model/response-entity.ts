export class ResponseEntity{

  private _code : number;
  private _mensage : string;

  constructor(){}


  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get mensage(): string {
    return this._mensage;
  }

  set mensage(value: string) {
    this._mensage = value;
  }
}

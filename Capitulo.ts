export default class Capitulo {
  private _titulo: string;
  private _texto: string;

  constructor(titulo: string = '', texto: string = '') {
    this._titulo = titulo;
    this._texto = texto;
  }

  public get getTitulo() : string {
    return this._titulo;
  }

  public set setTitulo(titulo: string) {
    this._titulo = titulo;
  }

  public get getTexto() : string {
    return this._texto;
  }

  public set setTexto(texto: string) {
    this._texto = texto;
  }

  public hashCode(): number {
    return(Math.random() * 100 + 1) + Date.now();
  }

  public equals(obj: object): boolean {
    const capitulo = obj as Capitulo;

    if (this.constructor !== obj.constructor)
      return false;
    else if(this._titulo == undefined && this._texto == undefined)
      return false;
    else if ((this._titulo !== capitulo.getTitulo) && (this._texto !== capitulo.getTexto))
      return false;
    else 
      return true;      
  }
} 
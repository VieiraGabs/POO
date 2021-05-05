export default class Autor {
  private _nome: string;
  private _dataDeNascimento: Date;

  constructor(nome: string, dataDeNascimento: Date = new Date("0000-00-00")) {
    this._nome = nome;
    this._dataDeNascimento = dataDeNascimento;
  }

  public get getNome() : string {
    return this._nome;
  }

  public set setNome(nome: string) {
    this._nome = nome;
  }

  public get getDataDeNascimento() : Date {
    return this._dataDeNascimento;
  }

  public set setDataDeNascimento(dataDeNascimento: Date) {
    this._dataDeNascimento = dataDeNascimento;
  }

  public equals(obj: object): boolean {
    const capitulo = obj as Autor;

    if (this.constructor !== obj.constructor)
      return false;
    else if (this._nome == undefined && this._dataDeNascimento == undefined)
      return false;
    else if ((this._nome !== capitulo.getNome) && (this._dataDeNascimento !== capitulo.getDataDeNascimento))
      return false;
    else
      return true;     
  }
}
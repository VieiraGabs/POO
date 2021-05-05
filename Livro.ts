import Autor from "./Autor";
import Capitulo from "./Capitulo";

export default class Livro {
  private _titulo: string;
  private _ISBN: string;
  private _autores: Autor[] = [];
  private _capitulos: Capitulo[] = [];

  constructor(titulo: string, ISBN: string) {
    this._titulo = titulo;
    this._ISBN = ISBN;
  }

  public get getTitulo() : string {
    return this._titulo;
  }

  public get getISBN() : string {
    return this._ISBN;
  }

  public set setISBN(ISBN : string) {
    this._ISBN = ISBN;
  }

  public get getAutores() : Autor[] {
    return this._autores;
  }

  public set setAutores(autores: Autor[]) {
    this._autores = autores;
  }

  public get getCapitulos() : Capitulo[] {
    return this._capitulos;
  }

  public set setCapitulos(capitulos: Capitulo[]) {
    this._capitulos = capitulos;
  }

  adicionarCapitulo(titulo: string, texto: string): number {
    const nCapitulos = this._capitulos.length;

    this._capitulos.push(new Capitulo(titulo, texto))
    if (nCapitulos >= this._capitulos.length) {
      return -1;
    }
    return nCapitulos;
  }

  removerCapitulo(capituloProcurado: Capitulo): number {
    let i = 0;

    for (i = 0; i <= this._capitulos.length; i++) {
      if (this._capitulos[i].equals(capituloProcurado)) {
        this._capitulos.splice(i, 1)
        break;
      }
    }
    if (i > this._capitulos.length - 1)
      return -1;

    return i;  
  }

  adicionarAutor(nome: string, dataDeNascimento: Date): number {
    const nAutores = this._autores.length;

    this._autores.push(new Autor(nome, dataDeNascimento));
    if (nAutores >= this._autores.length)
      return -1;

    return nAutores;  
  }

  removerAutor(autorProcurado: Autor): number {
    let i = 0;

    for (i = 0; i <= this._autores.length; i++) {
      if (this._autores[i].equals(autorProcurado)) {
        this._autores.splice(i, 1)
        break;
      }
    }
    if (i > this._autores.length - 1)
      return -1;

    return i;  
  }
}
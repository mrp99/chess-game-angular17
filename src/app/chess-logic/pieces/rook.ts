import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Rook extends Piece {
  private _hasMoved: boolean = false;
  protected override _FENChar: FENChar;
  protected override _direcitons: Coords[] = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar = pieceColor === Color.White ? FENChar.WhiteRook : FENChar.BlackRook;
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }

  public set hasMoved(_) {
    this._hasMoved = true;
  }

}


/**
 * _ é um parâmetro que recebe o valor que você está tentando atribuir à propriedade, mas neste caso, você não está
 * usando esse valor (_ é comumente usado quando você não precisa do valor de um parâmetro,
 * mas ainda precisa definir um parâmetro).
*/

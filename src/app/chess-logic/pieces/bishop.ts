import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Bishop extends Piece {
  protected override _FENChar: FENChar = (this.pieceColor === Color.White)
    ? FENChar.WhiteBishop
    : FENChar.BlackBishop;
  protected override _directions: Coords[] =
    [

      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ];

  constructor(private pieceColor: Color) {
    super(pieceColor)
  }

}

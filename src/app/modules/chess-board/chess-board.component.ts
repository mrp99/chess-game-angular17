import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, Coords, FENChar, pieceImagePaths } from 'src/app/chess-logic/models';
import { SelectedSquare } from './models';
import { SafeSquares } from '../../chess-logic/models';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {

  public pieceImagePaths = pieceImagePaths;
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color { return this.chessBoard.playerColor; };
  private get SafeSquares(): SafeSquares { return this.chessBoard.SafeSquares; };
  private selectedSquare: SelectedSquare = { piece: null };
  private pieceSafeSquares: Coords[] = [];

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }

  public isSquareSelected(x: number, y: number): boolean {
    if (!this.selectedSquare.piece) return false;
    return this.selectedSquare.x === x && this.selectedSquare.y === y;
  }

  public isSquareSafeForSelectedPiece(x: number, y: number): boolean {
    return this.pieceSafeSquares.some(coords => coords.x === x && coords.y == y);

  }

  public selectingPiece(x: number, y: number): void {
    const piece: (FENChar | null) = this.chessBoardView[x][y];
    if (!piece) return;
    if (this.isWrongPieceSelected(piece)) return;
    this.selectedSquare = { piece, x, y };
    this.pieceSafeSquares = this.SafeSquares.get(x + "," + y) || [];
  }

  private placingPiece(newX: number, newY: number): void {
    if (!this.selectedSquare.piece) return;
    if (!this.isSquareSafeForSelectedPiece(newX, newY)) return;

    const { x: prevX, y: prevY } = this.selectedSquare;
    this.chessBoard.move(prevX, prevY, newX, newY);
    this.chessBoardView = this.chessBoard.chessBoardView;
  }

  public move(x: number, y: number): void {
    this.selectingPiece(x, y);
    this.placingPiece(x, y);
  }

  public isWrongPieceSelected(piece: FENChar): boolean {
    const isWhitePieceSelected: boolean = piece === piece.toUpperCase();
    return (isWhitePieceSelected && (this.playerColor === Color.Black))
      || (!isWhitePieceSelected && this.playerColor === Color.White);
  }

}

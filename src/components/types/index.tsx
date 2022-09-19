export interface TictacState {
   tictacArr: any[][];
   nextPlayer: Record<string, string>,
   countWin: number
}

export interface winnerCheckWrapTypes {
   matrix: any[][],
   row: number,
   col: number
}
export interface winnerCheckTypes {
   matrix: any[][],
   row: number,
   col: number,
   symbolForRow: number,
   symbolForCol: number,
   horizontalMove: number,
   verticalMove: number,
   isCountWinHoriz: number,
   isCountWinVert: number,
   nextHorizIndex: number,
   nextVertIndex: number
}

export enum TictacActionTypes {
   ENTRY_NUMBER_FOR_WIN = 'ENTRY_NUMBER_FOR_WIN'
}

interface EntryNumberForWinAction {
   type: TictacActionTypes.ENTRY_NUMBER_FOR_WIN
   payload: number;
}

export type TictacAction = EntryNumberForWinAction
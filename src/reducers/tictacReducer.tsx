import { TictacAction, TictacActionTypes, TictacState } from "../components/types"

const initialState: TictacState = {
   tictacArr: Array(Math.trunc(document.documentElement.clientHeight / 30))
      .fill(null)
      .map(() => Array(Math.trunc(document.documentElement.clientWidth / 30)).fill(null)),
   nextPlayer: {
      x: "o",
      o: "x"
   },
   countWin: 4
}

export const tictacReducer = (state = initialState, action: TictacAction): TictacState => {
   switch (action.type) {
      case TictacActionTypes.ENTRY_NUMBER_FOR_WIN:
         return {
            ...state,
            countWin: action.payload
         }
      default:
         return state;
   }
}



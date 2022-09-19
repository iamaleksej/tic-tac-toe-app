import { TictacActionTypes } from "../components/types"

const actionCountWin = (countWin: number) => {
   return {
      type: TictacActionTypes.ENTRY_NUMBER_FOR_WIN,
      payload: countWin
   }
}

export { actionCountWin }
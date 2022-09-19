import { tictacReducer } from "./tictacReducer";
import { actionCountWin } from '../actions';

it('new value - up to how much victory - should be added', () => {
   let action = actionCountWin(6)
   const state = {
      countWin: 4
   }

   let newState = tictacReducer(state, action)

   expect(newState.countWin).toBe(6)
})
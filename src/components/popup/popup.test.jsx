import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from 'react-redux';
import * as actions from '../../actions';
import Popup from './popup'


jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
;
describe('Popup', () => {
   it('should create Popup', () => {
      mockedDispatch.mockReturnValue(jest.fn())

      const component = render(<Popup />)

      expect(component).toMatchSnapshot();
   })


   it('should dispatch action', () => {
      const dispatch = jest.fn();
      mockedDispatch.mockReturnValue(dispatch)
      const mockedActionCountWin = jest.spyOn(actions, 'actionCountWin')

      render(<Popup />)

      fireEvent.click(screen.getByRole('button'))

      expect(dispatch).toHaveBeenCalled
      expect(mockedActionCountWin).toHaveBeenCalled
   })
}) 
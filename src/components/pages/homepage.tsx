import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './homepage.sass'
import { winnerCheckTypes, winnerCheckWrapTypes } from '../types';

const Homepage: React.FC = () => {
   const { tictacArr, nextPlayer, countWin } = useTypedSelector(state => state.tictacData)

   const [currentPlayer, setCurrentPlayer] = useState("x");
   const [matrix, setMatrix] = useState(tictacArr);
   const [firstSquare, setFirstSquare] = useState(false);

   useEffect(() => {
      setCurrentPlayer("x");
   }, []);


   const winnerCheckWrap = ({ matrix, row, col }: winnerCheckWrapTypes) => {
      //проверка горизонтальная направо
      winnerCheck({ matrix, row, col, symbolForRow: 1, symbolForCol: 0, horizontalMove: 1, verticalMove: - 1, isCountWinHoriz: 0, isCountWinVert: -1, nextHorizIndex: 0, nextVertIndex: 1 })
      // горизонталь налево
      winnerCheck({ matrix, row, col, symbolForRow: 1, symbolForCol: 0, horizontalMove: 1, verticalMove: 1, isCountWinHoriz: 0, isCountWinVert: 1, nextHorizIndex: 0, nextVertIndex: -1 })
      // вертикаль вверх
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 1, horizontalMove: 1, verticalMove: 1, isCountWinHoriz: 1, isCountWinVert: 0, nextHorizIndex: -1, nextVertIndex: 0 })
      // вертикаль вниз
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 1, horizontalMove: -1, verticalMove: 1, isCountWinHoriz: -1, isCountWinVert: 0, nextHorizIndex: 1, nextVertIndex: 0 })
      // диагональ налево вверх
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 0, horizontalMove: 1, verticalMove: 1, isCountWinHoriz: 1, isCountWinVert: 1, nextHorizIndex: -1, nextVertIndex: -1 })
      // диагональ направо вверх
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 0, horizontalMove: 1, verticalMove: -1, isCountWinHoriz: 1, isCountWinVert: -1, nextHorizIndex: -1, nextVertIndex: 1 })
      // диагональ направо вниз
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 0, horizontalMove: -1, verticalMove: -1, isCountWinHoriz: -1, isCountWinVert: -1, nextHorizIndex: 1, nextVertIndex: 1 })
      // диагональ направо вниз
      winnerCheck({ matrix, row, col, symbolForRow: 0, symbolForCol: 0, horizontalMove: -1, verticalMove: 1, isCountWinHoriz: -1, isCountWinVert: 1, nextHorizIndex: 1, nextVertIndex: -1 })
   }

   //общая функция для проверки сторон
   const winnerCheck = ({
      matrix, row, col, symbolForRow, symbolForCol, horizontalMove, verticalMove,
      isCountWinHoriz, isCountWinVert, nextHorizIndex, nextVertIndex
   }: winnerCheckTypes) => {
      let counter = 1;
      //начинаем цикл с клетки на которую кликнули [Координаты клетки +/- число сколько подряд нужно для выигрыша], в разные стороны, меняя направление с помощью переменных
      for (let horizontalIndex = row; horizontalIndex !== row + countWin * isCountWinHoriz + symbolForRow; horizontalIndex += horizontalMove) {
         for (let verticalIndex = col; verticalIndex !== col + countWin * isCountWinVert + symbolForCol; verticalIndex += verticalMove) {
            //сравниваем клетку на которую кликнули и соседнюю
            if ((matrix?.[horizontalIndex]?.[verticalIndex] && matrix?.[horizontalIndex + nextHorizIndex]?.[verticalIndex + nextVertIndex]) &&
               (matrix?.[horizontalIndex]?.[verticalIndex] === matrix?.[horizontalIndex + nextHorizIndex]?.[verticalIndex + nextVertIndex])) {
               counter++
               console.log('counter = ' + counter);
               if (counter === countWin) {
                  return alert('Winner');
               }
            }
         }
      }
   }
   //клик на клетку
   const squareClickHandler = (row: number, col: number) => {
      (!(row === 0 && col === 0) && !firstSquare) ? alert('Начало с клетки [0;0]') : setFirstSquare(true)
      if (firstSquare || (row === 0 && col === 0)) {
         setFirstSquare(true)
         setMatrix((currentMatrix: any) => {
            const matrix = [...currentMatrix];
            matrix[row][col] = currentPlayer;
            setCurrentPlayer(nextPlayer[currentPlayer]);
            winnerCheckWrap({ matrix, row, col })
            return matrix;
         });
      }
      else return;
   }

   return (
      <div className="tic-tac">
         {matrix.map((row, rowIdx) =>
            <div className="tic-tac__row" key={rowIdx}>
               {row.map((col: number, colIdx: number) => {
                  return (
                     <div className="tic-tac__item"
                        key={`${rowIdx}_${colIdx}`}
                        onClick={() => squareClickHandler(rowIdx, colIdx)}>{col}</div>
                  )
               })}
            </div>
         )}
      </div>
   )
}

export default Homepage;
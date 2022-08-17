import {useState, useEffect} from 'react';
import { useLocalStorage } from "../useLocalStorage";
import jsonData from '../data.json';
import Board from './Board';
import { useModal } from '../context/modal-context';
import TestModal2 from './modals/TestModal2';

function BoardList({selectedBoard, setSelectedBoard}){
  console.log("selected", selectedBoard)
  const [dataTest, setDataTest] = useLocalStorage("data", jsonData.boards);
  const { setModal } = useModal();
  return (
    <ul className='board-list'>
      {
        dataTest.map((element)=> {
          return(
            <li 
              className={selectedBoard === element.name ? 'board-list-item board-list-item-active heading-M' : 'board-list-item  heading-M'}
              onClick={()=> {setSelectedBoard(element.name)}}>
              {element.name}
            </li>
          )
        })
      }
      <li className='board-list-item heading-M' onClick={() => {setModal(<TestModal2/>)}}>
        Create new board
      </li>
    </ul>
  )
}

export default BoardList
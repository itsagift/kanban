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
    <div className='board-list-container'>
    <div className='board-list-header heading-S'>All Boards</div>
    {/* add board number later!! */}
    <ul className='board-list'>
      {
        dataTest.map((element)=> {
          return(
            <li 
              className={selectedBoard === element.name ? 'board-list-item board-list-item--active heading-M' : 'board-list-item board-list-item--inactive heading-M'}
              onClick={()=> {setSelectedBoard(element.name)}}>
              {element.name}
            </li>
          )
        })
      }
      <li><button className='board-list-item board-list-item--new heading-M' onClick={() => {setModal(<TestModal2/>)}}>
        + Create New Board
      </button></li>
    </ul>
    </div>
  )
}

export default BoardList
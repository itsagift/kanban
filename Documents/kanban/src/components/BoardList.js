import {useState, useEffect} from 'react';
import { useLocalStorage } from "../useLocalStorage";
import jsonData from '../data.json';
import { useModal, unSetModal } from '../context/modal-context';
import NewBoard from './modals/NewBoard';

function BoardList({selectedBoard, setSelectedBoard}){
  
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
              className={selectedBoard.name === element.name ? 'board-list-item board-list-item--active heading-M' : 'board-list-item board-list-item--inactive heading-M'}
              onClick={()=> {setSelectedBoard(element)}}>
              {element.name}
            </li>
          )
        })
      }
      <li><button className='board-list-item board-list-item--new heading-M' onClick={() => {setModal(<NewBoard setModal={setModal}/>)}}>
        + Create New Board
      </button></li>
    </ul>
    </div>
  )
}

export default BoardList
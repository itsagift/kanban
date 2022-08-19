import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const ModalContext = React.createContext()


const Modal = ({ modal, unSetModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, unSetModal);

  useEffect(() => {
    const bind = e => {
      if (e.keyCode !== 27) {
        return
      }
      unSetModal()
    }
    document.addEventListener('keyup', bind)
    return () => { 
      document.removeEventListener('keyup', bind)
    }
  }, [modal, unSetModal])

  return (
    <div className="modal" >
      <div className="modal-content" ref={ref}>
        {modal}
      </div>
    </div>
  )
}

const ModalProvider = props => {
  const [modal, setModal] = useState()
  const unSetModal = useCallback(() => {
    setModal()
  }, [setModal])

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props} >
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a UserProvider')
  }

  return context
}

export { ModalProvider, useModal }
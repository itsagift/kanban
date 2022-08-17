import { ModalProvider } from './modal-context'; 
import { DarkModeProvider } from './dark-mode-context';
import { combineComponents } from './combine';
const providers = [
  ModalProvider,
  DarkModeProvider
]
export const AppContextProvider = combineComponents(...providers);
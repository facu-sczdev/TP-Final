import react, {useState} from 'react'

import {Route, Routes} from 'react-router'
import { ChatProvider } from './context/ChatContext'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import AddContactScreen from './screens/AddContactScreen'

function App(){
  return (
    <ChatProvider>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/chat/:contactId' element={<ChatScreen/>}/>
      <Route path='/add-contact' element={<AddContactScreen/>}/>
    </Routes>
    </ChatProvider>
  )

}
export default App;

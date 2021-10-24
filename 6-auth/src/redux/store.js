import { configureStore } from '@reduxjs/toolkit'
import ChatsReducer from './ChatsSlice'
import MessagesReducer from './MessagesSlice'
import socketsMiddleware from './socketsMiddleware'

export const store = configureStore({
  reducer: {
    chats: ChatsReducer,
    messages: MessagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketsMiddleware),
})

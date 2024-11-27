import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./app/App.tsx";
import "@/styles/index.scss"
import  {FunctionsProvider } from "@/context/function.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { NotificationProvider } from "@/context/notification.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <NotificationProvider>
                  <FunctionsProvider>
                      <App />
                  </FunctionsProvider>
              </NotificationProvider>
          </PersistGate>
      </Provider>
  </StrictMode>,
)

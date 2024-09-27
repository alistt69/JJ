import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./app/App.tsx";
import "@/styles/index.scss"
import {FunctionsProvider} from "@/context/context.tsx";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <FunctionsProvider>
                  <App />
              </FunctionsProvider>
          </PersistGate>
      </Provider>
  </StrictMode>,
)

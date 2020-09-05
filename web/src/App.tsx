import React, { FC } from 'react';

import GlobalStyle from "./styles/global";
import SignIn from './pages/SignIn';

import { SessionProvider } from "./hooks/SessionContext"
import ToastContainer from './components/ToastContainer';

const App: FC = () => (
    <>
        <SessionProvider>
            <SignIn />
        </SessionProvider>
        <ToastContainer />
        <GlobalStyle />
    </>
);

export default App;

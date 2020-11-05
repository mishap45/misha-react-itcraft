import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import App from './App'
import { AuthorContextSet, AuthorContext, UserIdContext, SetUserIdContext } from './context/context'

const App_Container = () => {

    const [nameAuthor, setNameAuthor] = useState('gg');
    const [userId, setUserId] = useState(0);

    return (
        <AuthorContext.Provider value={nameAuthor}>
            <AuthorContextSet.Provider value={setNameAuthor}>
                <UserIdContext.Provider value={userId}>
                    <SetUserIdContext.Provider value={setUserId}>
                        <NavigationContainer>
                            <App />
                        </NavigationContainer>
                    </SetUserIdContext.Provider>
                </UserIdContext.Provider>
            </AuthorContextSet.Provider>
        </AuthorContext.Provider>
    );
};

export default App_Container
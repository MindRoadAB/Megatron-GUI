import React, {useState} from 'react';
import {Alert, Container} from "react-bootstrap";

const AlertCtx = React.createContext(null);

const useAlerts = () => React.useContext(AlertCtx);

const AlertContext = ({children}) => {

    const [alertMessage, setAlertMessage] = useState(null);

    const triggerAlert = (heading, message) => {
        setAlertMessage({heading, message});
    }

    return (
        <AlertCtx.Provider value={{
            triggerAlert
        }}>
            {alertMessage &&
                <Container
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        zIndex: 9999,
                        borderRadius: '0px'
                    }}
                >
                    <Alert variant="danger" onClose={() => setAlertMessage(null)}
                           dismissible>
                        <Alert.Heading>{ alertMessage.heading }</Alert.Heading>
                        <p>
                            { alertMessage.message }
                        </p>
                    </Alert>
                </Container>
            }
            { children }
        </AlertCtx.Provider>
    )
}

export { AlertContext, useAlerts };
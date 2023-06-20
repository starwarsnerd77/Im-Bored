import { useEffect, useState } from 'react';
import './Chat.css';
import { IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList } from '@ionic/react';

const Chat: React.FC = () => {
    const [userSelections, setUserSelections] = useState<Array<String>>([]);
    const [gptResponses, setGptResponses] = useState<Array<Array<String>>>([]);

    useEffect(() => setUserSelections(["Replace", "me", "once", "model", "is", "connected", "testing"]), []);
    useEffect(() => setGptResponses([["This is a response! Testing if this wraps appropriately", "r"]]), [])

    const renderMessage = (response: Array<String>) => {
        if (response[1] === "r") {
            return (<div className="message left">{response[0]}</div>);
        } else if (response[1] === "p") {
            return (<div className="message right">{response[0]}</div>)
        }
    }

    const generateScrollList = () => {
        return (
            <div className="responseArea">
                {gptResponses.map((response, index) => renderMessage(response))}
            </div>
        );
    }
    return (
        <div className="chat">
            {generateScrollList()}
            <div className="promptArea">
                <div className="promptSelectionContainer">
                    {userSelections.map((selection, index) => (
                        <IonButton key={index} color="light" shape='round'>{selection}</IonButton>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chat;
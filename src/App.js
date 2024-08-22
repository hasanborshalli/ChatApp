import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/ChatFeed";

import "./App.css";
import { LoginForm } from "./components/LoginForm";
const App = () => {
    if (!localStorage.getItem("username")) {
        return <LoginForm />;
    }
    return (
        <ChatEngine
            height="100vh"
            projectID="5b5d19df-9b1e-4e4d-8d50-a381e3fa1c66"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};
export default App;

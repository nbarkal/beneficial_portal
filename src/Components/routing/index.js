import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../../App";
import LoginPage from "../LoginPage/Loginpage";

const RouterR = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default RouterR;

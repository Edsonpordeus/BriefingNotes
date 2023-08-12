import { Routes, Route } from "react-router-dom";

import { SignIn  } from "../SignIn";
import { SignUp  } from "../SignUp";


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            
        </Routes>
    );
}

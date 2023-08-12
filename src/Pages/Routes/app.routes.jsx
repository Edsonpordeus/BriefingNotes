import { Routes, Route } from "react-router-dom";

import { SignIn  } from "../../Pages/SignIn";
import { SignUp  } from "../../Pages/SignUp";
import { Profile  } from "../../Pages/Profile";
import { MyNotes } from '../../Pages/MyNotes';
import { MyNotesPreview } from '../../Pages/MyNotesPreview';


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<MyNotes />} />
            <Route path="/MyNotesPreview" element={<MyNotesPreview />} />
            
        </Routes>
    );
}

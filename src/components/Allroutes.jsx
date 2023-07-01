import { Routes, Route } from "react-router-dom";
import { Home, Contact, Info, Guide } from "../page";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="info" element={<Info />} />
            <Route path="guide" element={<Guide />} />
        </Routes>
    )
}

import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [show, setShow] = useState(false);

    if (show) {
        document.body.childNodes.item(3).childNodes.item(0).addEventListener("mousedown", (event) => {
            const side = document.getElementById('default-sidebar');
            if (!side.contains(event.target)) {
                setShow(false);
            }
        })
    }

    return (
        <div className="align-middle md:w-96 md:h-screen w-screen h-20">
            <div className="md:fixed top-0 left-0 bottom-0 h-full p-4 md:w-64  bg-purple-600 text-slate-200 flex flex-col justify-center">
                <ul className="md:space-y-5 md:text-xl md:block font-medium md:p-7 text-sm flex justify-evenly items-center gap-2">
                    <li>
                        <Link to="/" ><i className="bi bi-house-door-fill"></i><span className="ml-2">Home</span></Link>
                    </li>
                    <li>
                        <Link to="contact"><i className="bi bi-person-rolodex"></i><span className="ml-2">Contact</span></Link>
                    </li>
                    <li>
                        <Link to="info"><i className="bi bi-info-circle-fill"></i><span className="ml-2">Info</span></Link>
                    </li>
                    <li>
                        <Link to="guide"><i className="bi bi-question-circle-fill"></i><span className="ml-2">Guide</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

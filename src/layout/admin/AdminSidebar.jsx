import { NavLink } from "react-router-dom";
import * as configNav from '../../config/navbar.json';

export const AdminSidebar = () => {
    return (<div className="w-1/5 bg-gray-800 h-screen">
        <div className="text-whit text-white w-full flex justify-end px-5 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
        </div>
        {
            configNav.navbar.map(({ url, name, icon }, key) => {
                return <NavLink key={key} to={url} className="border-b border-gray-700 text-white py-5 pl-5 flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-0.5">
                        <path d={icon} />
                    </svg>
                    <span className="text-lg">{name}</span>
                </NavLink>
            })
        }
    </div>);
}
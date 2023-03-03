import { AdminContent } from "./AdminContent";
import {AdminSidebar} from "./AdminSidebar";

export const AdminLayout = ({children}) => {
    return (<>
        <div className="flex">
            <AdminSidebar />
            <AdminContent>
                {children}
            </AdminContent>
        </div>
    </>);
}
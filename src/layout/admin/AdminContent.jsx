
export const AdminContent = ({children}) => {
    return (<>
        <div className="flex-1 w-full bg-white h-screen justify-center items-center p-8">
            <div className="shadow-2xl border rounded h-full w-full overflow-y-scroll">
                {children}
            </div>
        </div>
    </>);
}
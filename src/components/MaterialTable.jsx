export const Table = ({ children }) => {
    return (<>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    </>);
}

export const THead = ({ children }) => {
    return (<>
        <thead className="bg-gray-50">
            {children}
        </thead>
    </>);
}

export const TBody = ({ children }) => {
    return (<>
        <tbody className="bg-white divide-y divide-gray-200">
            {children}
        </tbody>
    </>)
}

export const Row = ({ children }) => {
    return (<>
        <tr>
            {children}
        </tr>
    </>)
}

export const HeadItem = ({ children }) => {
    return (<>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {children}
        </th>
    </>)
}


export const Item = ({ children }) => {
    return (<>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {children}
        </th>
    </>);
}
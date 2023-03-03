import ReactPaginate from "react-paginate";

export const Pagination = ({ meta, onPageChange }) => {
    return (<>
        <ReactPaginate
            className='flex justify-end mt-5'
            breakLabel="..."
            pageClassName='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
            nextLabel={<NextPage />}
            pageCount={Math.ceil(meta.total / meta.per_page)}
            previousLabel={<PrevLabel />}
            renderOnZeroPageCount={null}
            onPageChange={onPageChange}
            activeLinkClassName='text-blue-500'
        />
    </>);
}

const NextPage = () => {
    return (<>
        <span className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.707 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </span>
    </>);
}


const PrevLabel = () => {
    return (<>
        <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.293 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        </span>
    </>)
}
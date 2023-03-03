import { Link } from "react-router-dom";

export const TitleBar = ({createUrl, title}) => {
    return (
        <div className='py-5 flex border-b border-b-slate-200'>
            <h3 className='text-3xl flex-1 pl-5'>{title}</h3>
            {
                createUrl ?
                    <div className=' flex-2 px-8 pt-2'>
                        <Link to={createUrl} className='bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700'>Add</Link>
                    </div>
                : null
            }
        </div>
    );
}
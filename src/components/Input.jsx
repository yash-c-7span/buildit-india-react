import { Field } from "formik"

export const FormInput = ({ label, id, errorMsg, touched, ...rest }) => {
    return (<div className="grid gap-6 mt-4">
        <div>
            <label htmlFor={id} className="block mb-1 ml-1 text-sm font-medium">{label}</label>
            <Field id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...rest} />
            {
                errorMsg && touched ?
                    <span className="text-red-500">{errorMsg}</span>
                    : null
            }
        </div>
    </div>)
}

export const RadioGroup = ({ label, children, errorMsg, touched }) => {
    return (<>
        <div className="my-4">
            <label className="block mb-1 ml-1 text-sm font-medium">{label}</label>
            <div className="mt-1 flex gap-5">
                {children}
            </div>
            {
                errorMsg && touched ?
                    <span className="text-red-500">{errorMsg}</span>
                    : null
            }
        </div>
    </>)
}

export const RadioInput = ({ id, label, ...rest }) => {
    return (<>
        <label className="inline-flex items-center">
            <Field id={id} type="radio" className="form-radio h-5 w-5 text-gray-600" {...rest} />
            <span className="ml-2 text-gray-700">{label}</span>
        </label>
    </>);
}
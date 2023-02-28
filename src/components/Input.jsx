import { Field } from "formik"

export const FormInput = ({label, id, ...rest}) => {
    return (<div className="grid gap-6 mt-2">
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
            <Field id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...rest}  />
        </div>
    </div>)
}
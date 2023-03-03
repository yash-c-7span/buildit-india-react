import { Form, Formik } from "formik";
import { TitleBar } from "../../components/Card";
import { FormInput, RadioGroup, RadioInput } from "../../components/Input";
import { AdminLayout } from "../../layout/admin/AdminLayout";
import * as Yup from 'yup';
import { brandCreate } from "../../js/brand";

export default function Create() {
    let formSchema = Yup.object({
        name: Yup.string().required(),
        price_on_request: Yup.bool(),
        tag: Yup.string().required(),
        expected_delivery_days: Yup.string().required('expected delivery days is required'),
        loading: Yup.bool(),
        unloading: Yup.bool(),
        freight: Yup.bool(),
    });

    const createData = (values) => {
        console.log(values);
        return false;
        brandCreate(values).then((res) => {
            console.log(res);
        })
    }

    return (
        <AdminLayout>
            <TitleBar title="Create brand" />
            <div className="pl-7">
                <Formik
                    initialValues={{
                        name: '',
                        price_on_request: 'true',
                        tag: '',
                        expected_delivery_days: '',
                        loading: 'true',
                        unloading: 'true',
                        freight: 'true'
                    }}

                    initialTouched={{
                        name: false,
                        price_on_request: false,
                        tag: false,
                        expected_delivery_days: false,
                        loading: false,
                        unloading: false,
                        freight: false
                    }}

                    validationSchema={formSchema}

                    onSubmit={createData}
                >
                    {({ errors, touched }) =>
                        <Form autoComplete="off">
                            {/* <div className="w-1/2">
                                <FormInput name="name" placeholder="Name" label="Brand name" type="text" errorMsg={errors.name} touched={touched.name} />
                                <FormInput name="tag" placeholder="Tag" label="Tag" type="text" errorMsg={errors.tag} touched={touched.tag} />
                                <FormInput name="expected_delivery_days" placeholder="Expected delivery days" label="Expected delivery days" type="text" errorMsg={errors.expected_delivery_days} touched={touched.expected_delivery_days} />

                                <RadioGroup label="Price on request" errorMsg={errors.price_on_request} >
                                    <RadioInput name="price_on_request" label="True" value="true" />
                                    <RadioInput name="price_on_request" label="False" value="false" />
                                </RadioGroup>

                                <RadioGroup label="Loading" errorMsg={errors.loading} touched={touched.loading} >
                                    <RadioInput name="loading" label="True" value="true" />
                                    <RadioInput name="loading" label="False" value="false" />
                                </RadioGroup>

                                <RadioGroup label="Unloading" errorMsg={errors.unloading} touched={touched.unloading} >
                                    <RadioInput name="unloading" label="True" value="true" />
                                    <RadioInput name="unloading" label="False" value="false" />
                                </RadioGroup>

                                <RadioGroup label="Freight" errorMsg={errors.freight} touched={touched.freight} >
                                    <RadioInput name="freight" label="True" value="true" />
                                    <RadioInput name="freight" label="False" value="false" />
                                </RadioGroup>

                                <div className="my-5">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded px-3 py-2 text-white">Submit</button>
                                </div>
                            </div> */}

                            <FilePondDemo />
                        </Form>
                    }
                </Formik>
            </div>
        </AdminLayout>
    )
}

/**
 * 
 * 
 * 
 */

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
const FilePondDemo = () => {

    registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation)
    return (<>
        <div className="w-1/2">
        <FilePond allowMultiple={true} maxFiles={3} imagePreviewHeight={200} imagePreviewMinHeight={200} imagePreviewMaxHeight={true} allowImagePreview={true} />
        </div>
    </>);
}
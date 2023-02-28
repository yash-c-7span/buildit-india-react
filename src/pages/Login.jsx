import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertDanger } from "../components/alert";
import { FormInput } from '../components/Input'
import { login } from "../js/auth";
import { getStorageData } from "../js/helper";
import * as Yup from 'yup';

// components

export function LoginPage() {
  let navigate = useNavigate();
  let [data, setData] = useState({
    errorMsg:'',
  });

  let loginSchema = Yup.object({
    username:Yup.string().required(),
    password:Yup.string().required().min(6)
  });

  const formSubmit = async (values) => {
    let resp = await login(values);
    if(resp.errors !== undefined) {
      setData({...data, errorMsg:resp.message});
    } else if(resp.token) {
      return navigate('/')
    }
  }

  useEffect(() => {
    if(data.errorMsg != '') {
      setTimeout(() => {
        setData({...data, errorMsg:''})
      }, 4000);
    }
    if(getStorageData('token')) {
      return navigate('/');
    }
  }, [data.errorMsg])

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <img src="" alt="" />
        </div>
        <div className="flex-1">
          <div className="flex justify-center items-center h-screen">
            <div className="shadow-xl py-4 w-2/3 items-center">
              {
                data.errorMsg != '' ?
                  <AlertDanger className="m-2" text={data.errorMsg} />
                : <></>
              }

              <h3 className="text-2xl text-center pb-3">LOGIN</h3>
              <hr />
              <Formik
                initialValues={{
                  username:'',
                  password:'',
                }}

                onSubmit={(values) => {
                  formSubmit(values)
                }} 

                validationSchema={loginSchema}
              >
                {({errors, touched}) => 
                  <Form autoComplete="off" method="post">
                    <div className="mx-5 mt-5">
                      <FormInput name="username" placeholder="Username" type="text" id="username" />
                      <p className="text-red-600">{errors.username}</p>
                      <FormInput name="password" placeholder="Password" type="password" id="password" />
                      <p className="text-red-600 mb-3">{errors.password}</p>

                      <button className="bg-blue-500 hover:bg-blue-700 text-white w-[100%] font-bold py-2 px-4 rounded">Login</button>
                    </div>
                  </Form>
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

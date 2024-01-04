"use client"
import React, { useState } from 'react'
import styles from './Login.module.css'
import Link from 'next/link'
import configuration from './configuration.json'
import { Input } from '@/inputControls/input'
import { hanldeFiledValidation, handleFormValidation } from '@/validations/appValidation'
export const Login = () => {
    const [inputControls, setInutControls] = useState(configuration)
    const fnChange = (eve) => {
        setInutControls(hanldeFiledValidation(eve, inputControls))
    }

    const handleLogin = () => {
        handleFormValidation()
    }
    return (
        <div className='container-fluid'>
            <h2 className='text-center my-3'>Login</h2>
            {
                inputControls?.map(({ lbl, type, errorMessage, value, model }) => {
                    return <div className='row mb-3'>
                        <div className='col-sm-5 text-end'>
                            <b>{lbl}:</b>
                        </div>
                        <div className='col-sm-3'>
                            <Input model={model} type={type} value={value} handleChange={fnChange} />
                        </div>
                        <div className='col-sm-4'>
                            <b className='text-danger'>{errorMessage}</b>
                        </div>
                    </div>
                })
            }




            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={handleLogin} className='btn btn-primary me-3'>Login</button>
                    <Link href="/register" >To Register</Link>
                </div>
            </div>
        </div>
    )
}


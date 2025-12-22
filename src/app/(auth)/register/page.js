import RegisterForm from '@/components/authentication/RegisterForm'
import NavigationMenu from '@/components/common/NavigationMenu'
import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div className='mt-[50px] md:mt-[100px]'>
                <RegisterForm />
            </div>
        </div>
    )
}

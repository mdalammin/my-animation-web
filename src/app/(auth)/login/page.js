import LoginForm from '@/components/authentication/LoginForm'
import NavigationMenu from '@/components/common/NavigationMenu'
import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div className=''>
                <LoginForm />
            </div>
        </div>
    )
}

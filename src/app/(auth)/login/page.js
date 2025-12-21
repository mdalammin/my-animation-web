import LoginForm from '@/components/authentication/LoginForm'
import NavigationMenu from '@/components/common/NavigationMenuDemo'
import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <LoginForm />
            </div>
        </div>
    )
}

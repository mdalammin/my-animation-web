import RegisterForm from '@/components/authentication/RegisterForm'
import NavigationMenu from '@/components/common/NavigationMenuDemo'
import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <RegisterForm />
            </div>
        </div>
    )
}

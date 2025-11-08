import { useAuthActions } from '@convex-dev/auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const signInSchema = z.object ({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be atleast 6 characters'),
})

const signUpSchema = z.object ({
    firstName: z.string().min(2,'First name should be atleast 2 characters'),
    lastName: z.string().min(2,'Last name should be atleast 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be atleast 6 characters'),
})


type SignInData = z.infer<typeof signInSchema>
type SignUpData = z.infer<typeof signUpSchema>

export const useAuth = () => {
    const { signIn, singOut } = useAuthActions()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const signInForm = useForm<SignInData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const signUpForm = useForm<SignUpData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    })

    const handleSignIn = async (data: SignInData) => {
        setIsLoading(true)

        setIsLoading(false)
    }

    const handleSignUp = async (data: SignUpData) => {
        setIsLoading(true)

        setIsLoading(false)
    }

    const handleSignOut = async () => {
        setIsLoading(true)

        setIsLoading(false)
    }


    return {
        signInForm,
        signUpForm,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        isLoading,


    }

}
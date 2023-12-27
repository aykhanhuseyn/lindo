import { object, string, boolean } from 'yup'

export interface LoginSchema {
	email: string
	password: string
}

export const initialValues = {} as LoginSchema

export const validationSchema = object().shape({
	email: string().email('Email address is not valid').required('Email address is required'),
	password: string()
		.min(8, 'Password must be minimum ${min} characters long')
		.required('Password is required'),
	rememberMe: boolean().default(false)
})

import { object, string, ref } from 'yup'

export interface RegisterSchema {
	firstName: string
	lastName: string
	phone: string
	email: string
	password: string
	repeatPassword: string
}

export const initialValues = {} as RegisterSchema

export const validationSchema = object().shape({
	firstName: string().required('First name is required'),
	lastName: string().required('Last name is required'),
	phone: string().required('Phone is required'),
	email: string().email('Email address is not valid').required('Email address is required'),
	password: string()
		.trim()
		.min(8, 'Password must be minimum ${min} characters long')
		.required('Password is required'),
	repeatPassword: string()
		.oneOf([ref('password'), undefined], 'Passwords must match')
		.required('Repeat password is required')
})

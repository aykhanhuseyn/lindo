import { Input, Button, View } from '@lindo/components'
import { Formik } from 'formik'
import { StyleSheet } from 'react-native'

import { validationSchema, initialValues } from './form'

export const LoginForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={console.log}
			validationSchema={validationSchema}>
			{({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
				<View style={styles.container}>
					<Input
						label="Email"
						textContentType="emailAddress"
						placeholder="E-mailinizi daxil edin"
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						error={errors.email}
					/>
					<Input
						label="Password"
						textContentType="password"
						placeholder="Parolunuzu daxil edin"
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						value={values.password}
						error={errors.password}
					/>
					<Button title="Log in" onPress={() => handleSubmit()} isDisabled={!isValid} />
				</View>
			)}
		</Formik>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 20
	}
})

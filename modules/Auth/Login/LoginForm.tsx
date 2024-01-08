import { Input, Button, View, Checkbox, Text } from '@lindo/components'
import { Link } from 'expo-router'
import { Formik } from 'formik'
import { StyleSheet } from 'react-native'

import { validationSchema, initialValues } from './form'

export const LoginForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={console.log}
			validationSchema={validationSchema}
			validateOnBlur
			validateOnChange
			validateOnMount={false}>
			{({
				handleChange,
				setFieldValue,
				handleBlur,
				handleSubmit,
				touched,
				values,
				errors,
				isValid
			}) => (
				<View style={styles.container}>
					<Input
						label="Email"
						textContentType="emailAddress"
						placeholder="E-mailinizi daxil edin"
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						error={touched.email && errors.email}
					/>
					<Input
						label="Password"
						textContentType="password"
						placeholder="Parolunuzu daxil edin"
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						value={values.password}
						error={touched.password && errors.password}
					/>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Checkbox label="Hesabı xatırla" onChange={value => setFieldValue('remember', value)} />
						<Link href="/(auth)/register" asChild>
							<Text>Hesabı unutmusunuz?</Text>
						</Link>
					</View>
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

import { Input, InputPhone, Button, Text } from '@lindo/components'
import { Link } from 'expo-router'
import { Formik } from 'formik'
import { StyleSheet, KeyboardAvoidingView, Pressable, Platform } from 'react-native'

import { validationSchema, initialValues } from './form'

export const RegisterForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={console.log}
			validationSchema={validationSchema}
			validateOnBlur
			validateOnChange
			validateOnMount={false}>
			{({
				setFieldValue,
				handleChange,
				handleBlur,
				handleSubmit,
				touched,
				values,
				errors,
				isValid
			}) => (
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
					<Pressable style={styles.container}>
						<Input
							key="firstName"
							label="Ad"
							textContentType="givenName"
							placeholder="Adınızı daxil edin"
							onChangeText={handleChange('firstName')}
							onBlur={handleBlur('firstName')}
							value={values.firstName}
							error={touched.firstName && errors.firstName}
						/>
						<Input
							key="lastName"
							label="Soy ad"
							textContentType="familyName"
							placeholder="Soy adınızı daxil edin"
							onChangeText={handleChange('lastName')}
							onBlur={handleBlur('lastName')}
							value={values.lastName}
							error={touched.lastName && errors.lastName}
						/>
						<InputPhone
							key="phone"
							autoFormat
							accessibilityLabel="Phone number"
							initialCountry="az"
							label="Telefon nömrəsi"
							onChangePhoneNumber={value => setFieldValue('phone', value)}
							placeholder="Telefon nömrənizi daxil edin"
							textProps={{ onBlur: handleBlur('phone') }}
							error={touched.phone && errors.phone}
						/>
						<Input
							key="email"
							label="Email"
							textContentType="emailAddress"
							placeholder="E-mailinizi daxil edin"
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							error={touched.email && errors.email}
						/>
						<Input
							key="password"
							label="Şifrə"
							textContentType="password"
							placeholder="Parol təyin edin"
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							error={touched.password && errors.password}
						/>
						<Input
							key="repeatPassword"
							label="Repeat Password"
							textContentType="password"
							placeholder="Parolu təkrar daxil edin"
							onChangeText={handleChange('repeatPassword')}
							onBlur={handleBlur('repeatPassword')}
							value={values.repeatPassword}
							error={touched.repeatPassword && errors.repeatPassword}
						/>
						<Input
							key="repeatPassword2"
							label="Repeat Password"
							textContentType="password"
							placeholder="Parolu təkrar daxil edin"
							onChangeText={handleChange('repeatPassword')}
							onBlur={handleBlur('repeatPassword')}
							value={values.repeatPassword}
							error={touched.repeatPassword && errors.repeatPassword}
						/>
						<Input
							key="repeatPassword3"
							label="Repeat Password"
							textContentType="password"
							placeholder="Parolu təkrar daxil edin"
							onChangeText={handleChange('repeatPassword')}
							onBlur={handleBlur('repeatPassword')}
							value={values.repeatPassword}
							error={touched.repeatPassword && errors.repeatPassword}
						/>
						<Input
							label="Repeat Password"
							textContentType="password"
							placeholder="Parolu təkrar daxil edin"
							onChangeText={handleChange('repeatPassword')}
							onBlur={handleBlur('repeatPassword')}
							value={values.repeatPassword}
							error={touched.repeatPassword && errors.repeatPassword}
						/>
						<Input
							key="repeatPassword4"
							label="Repeat Password"
							textContentType="password"
							placeholder="Parolu təkrar daxil edin"
							onChangeText={handleChange('repeatPassword')}
							onBlur={handleBlur('repeatPassword')}
							value={values.repeatPassword}
							error={touched.repeatPassword && errors.repeatPassword}
						/>
						<Link href="/(auth)/login" asChild>
							<Text>Artıq hesabınız var?</Text>
						</Link>
						<Button title="Qeydiyyat" onPress={() => handleSubmit()} isDisabled={!isValid} />
					</Pressable>
				</KeyboardAvoidingView>
			)}
		</Formik>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 20
	}
})

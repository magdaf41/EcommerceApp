import React from 'react'
import { StyledContainerFormPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/ReturnBtn'
import { FormLogin } from '../../components/Forms/FormLogin'

const LoginPage = () => {
	return (
		<StyledProductsPage>
			<ReturnBtn />
			<FormLogin />
		</StyledProductsPage>
	)
}

export default LoginPage
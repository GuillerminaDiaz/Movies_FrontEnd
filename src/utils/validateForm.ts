//exportar la configuración de yup para poder validar determinados argumentos
import * as yup from 'yup';

//revisara en este caso un objeto y shape los argumentos que queremos validar
export const LoginValidate= yup.object().shape({
    email: yup.string().trim().required('Email is required'),//estructura de validación
    password: yup.string().trim().required('Password is required')
})
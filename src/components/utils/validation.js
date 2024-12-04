import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    product_name: Yup.string()
        .required('Product Name is required'), // Only required validation
    model_number: Yup.string()
        .required('Model Number is required'), // Only required validation
    description: Yup.string()
        .required('Description is required'), // Only required validation
   
});

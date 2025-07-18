import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

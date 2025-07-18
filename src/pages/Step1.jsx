import React, { useState, useEffect } from 'react';
import { useForm } from '../context/FormContext';
import { validateStep1 } from '../utils/validation';
import TextInput from '../components/TextInput';

export default function Step1() {
    const { formData, setFormData, setStep } = useForm();
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [touched, setTouched] = useState({});

    useEffect(() => {
        const validationErrors = validateStep1(formData);
        setErrors(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);
    }, [formData]);

    const handleNext = () => {
        setTouched({
            fullName: true,
            email: true,
            phone: true
        });

        if (isValid) setStep(2);

    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* Progress Bar at the very top */}
            <div className="w-full max-w-4xl mx-auto pt-6 px-4 ">
                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                        className="bg-blue-900 h-full transition-all duration-500 rounded-full"
                        style={{ width: '50%' }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">


                    {/* Left Panel */}
                    <div className="w-1/2 bg-gradient-to-b from-blue-900 to-gray-800 text-white p-10 hidden md:block">
                        <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
                        <p className="mb-8">
                            Welcome to our registration page! Get started by creating your account.
                        </p>
                        <h3 className="text-lg font-semibold mb-2">Simple & Secure Registration</h3>
                        <p>
                            Our registration process is designed to be straightforward and secure. We prioritize
                            your privacy and data security.
                        </p>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register Now</h2>
                        <div className="space-y-4">
                            <TextInput
                                label="Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                error={touched.fullName && errors.fullName}
                            />
                            <TextInput
                                label="Email Id"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                error={touched.email && errors.email}
                            />
                            <TextInput
                                label="Phone(Optional)"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                error={touched.phone && errors.phone}
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleNext}
                                disabled={!isValid}
                                className={`w-full py-2 rounded-lg transition ${isValid
                                    ? 'bg-blue-900 text-white hover:bg-blue-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

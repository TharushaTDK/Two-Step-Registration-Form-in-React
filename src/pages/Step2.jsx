import React, { useState } from 'react';
import { useForm } from '../context/FormContext';
import TextInput from '../components/TextInput';
import { validateStep2 } from '../utils/validation';
import { registerUser } from '../services/register';

export default function Step2() {
    const { formData, setFormData, setStep } = useForm();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = async () => {
        const validationErrors = validateStep2(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const payload = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            };
            await registerUser(payload);
            setMessage('Registration successful!');
            setErrors({});
        } catch (err) {
            setMessage("Something went wrong. Backend isn't developed yet.");
            setErrors({});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/*  Progress Bar at Top */}
            <div className="w-full max-w-4xl mx-auto pt-6 px-4">
                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                        className="bg-blue-900 h-full transition-all duration-500 rounded-full"
                        style={{ width: '100%' }}
                    ></div>
                </div>
            </div>

            {/*  Centered Form Container */}
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Left Panel */}
                    <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-900 to-gray-800 text-white p-10">
                        <h2 className="text-2xl font-bold mb-4">One Last Step</h2>
                        <p className="mb-8">
                            Finish setting up your account by entering your password.
                        </p>
                        <h3 className="text-lg font-semibold mb-2">Secure Your Account</h3>
                        <p>
                            Make sure to choose a strong password to help keep your account safe and secure.
                        </p>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Complete Registration</h2>
                        <div className="space-y-4">
                            <TextInput
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                error={errors.password}
                            />
                            <TextInput
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) =>
                                    setFormData({ ...formData, confirmPassword: e.target.value })
                                }
                                error={errors.confirmPassword}
                            />
                        </div>

                        {message && (
                            <div className="mt-4 text-sm text-center text-blue-700 font-medium">
                                {message}
                            </div>
                        )}

                        <div className="mt-6">
                            <button
                                onClick={handleBack}
                                className="w-full py-2 rounded-lg font-medium bg-blue-900 text-white hover:bg-blue-800 transition duration-300 ease-in-out mb-2.5"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="w-full py-2 rounded-lg font-medium bg-blue-900 text-white hover:bg-blue-800 transition duration-300 ease-in-out"
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

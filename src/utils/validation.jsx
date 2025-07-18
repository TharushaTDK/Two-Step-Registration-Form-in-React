export const validateStep1 = ({ fullName, email }) => {
    const errors = {};
    if (!fullName.trim()) errors.fullName = 'Full Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email format';
    return errors;
};

export const validateStep2 = ({ password, confirmPassword }) => {
    const errors = {};
    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
};

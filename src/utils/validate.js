const validateData = (email, password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) return "Invalid email"
    if(!isPasswordValid) return "Invalid password"

    return null;
}

export { validateData }
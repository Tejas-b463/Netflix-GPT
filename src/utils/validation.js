export const checkValidData = (email, password, userName) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
    );
    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isUserNameValid =
        /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isUserNameValid) return "UserName is not Valid"

    return null;
};
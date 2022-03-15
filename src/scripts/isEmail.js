let isEmail = {
    isEmail(text){
        const regex = /^\w+@\w+[.]\w+$/gm;
        return regex.test(text)
}
}

export default isEmail;

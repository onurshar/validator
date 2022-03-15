let validator = {
    isEmail(text){
        const regex = /^\w+@\w+[.]\w+$/gm;
        return regex.test(text);
},
    isPdf(text){
        const regex =/^.+[.]pdf$/gmi;
        return regex.test(text);
    }
}

export default validator;

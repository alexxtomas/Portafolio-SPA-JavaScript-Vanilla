export const formValidator = (name , email, message) => {
    const emailRegex = /\S+@\S+\.\S+/
    const nameRegex = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
    if(!emailRegex.test(email)) {
        email = ''
        alert('Please Enter A Valid Email')
        throw new Error('Wrong Email')
    } 
    else if (!nameRegex.test(name)) {
        name = ''
        alert('Please Enter A Valid Name')
        throw new Error('Wrong Name')
    } else if(message === '') {
        alert('Please Enter A Message')
        throw new Error('Empty Message')
    }
}
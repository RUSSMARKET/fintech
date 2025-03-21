export default class User {    
    static personal = {
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
    }

    public static init = () => {
        if(localStorage.getItem('User'))
            this.personal = JSON.parse(localStorage.getItem('User'))
    }

    public static registration = (phone:string, firstname:string, lastname:string, password:string, confirm_password:string) => {
        if(password.length < 8 || password !== confirm_password){
            return false
        }

        this.personal.phone = phone
        this.personal.firstname = firstname
        this.personal.lastname = lastname

        localStorage.setItem('User', JSON.stringify(this.personal))
    }

    public static getFio = () => {
        return this.firstname + ' ' + this.lastname
    }


}
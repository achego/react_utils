class FormValidator {
    static validateEmail(value){
        if (
            !new RegExp(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ).test(value)
          ){
            return 'Enter A valid Email'
          }

        // if(value.length <= 3){
        //     return 'Email is too short'
        // }
        // if (value.length >= 6){
        //     return  'Email is too long'
        // }

        return null
    }
    static validateName(value){
        if (
            !new RegExp(
              /^[a-zA-Z]+ [a-zA-Z]+$/
            ).test(value)
          ){
            return 'Enter A valid Name'
          }

        return null
    }
}

export default FormValidator
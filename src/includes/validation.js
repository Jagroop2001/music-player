import { required, min , max , alpha_spaces as alphaSpaces , email } from "@vee-validate/rules";
import { Form as VeeForm , Field as VeeField , defineRule , ErrorMessage} from "vee-validate"



export default {
    install(app){
         app.component('VeeForm', VeeForm);
         app.component('VeeField', VeeField);
         app.component('ErrorMessage', ErrorMessage)

         defineRule('required',required)
         defineRule('min' , min)
         defineRule('max' , max)
         defineRule('alpha_spaces',alphaSpaces)
         defineRule('email', email)
    }
}
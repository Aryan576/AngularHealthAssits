import { SignupLogin } from "./signup-login";

export interface Patient extends SignupLogin{
    patientid:number;
    patientname:String;
    phoneno:String;
    age:number;
    profilepic:String;
    cityid:number;
    cityname:String;
    userId:number;
    pincode:number;

}




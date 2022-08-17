import {Schema } from "@nestjs/mongoose";

@Schema()
export class Assignmet{

    
// ***  In This Schema there will be Following Properties/Attributes of this Document ***

    // tft_id : string
    // education : string
    // announceDate : Date
    // submissionDate : Date
    // coursesID : Types.ObjectId   refrence from: 'Course'
    // teacherID : Types.ObjectId   refrence from: 'Teacher'
}

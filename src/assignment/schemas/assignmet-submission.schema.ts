import {Schema } from "@nestjs/mongoose";

@Schema()
export class AssignmetSubmission{

    
// ***  In This Schema there will be Following Properties/Attributes of this Document ***


    // assignmentID : Types.ObjectId   refrence from: 'Assignment'
    // files : [ { studentID : Types.ObjectId   refrence from: 'Student'  , file : string , date : Date }] 
}

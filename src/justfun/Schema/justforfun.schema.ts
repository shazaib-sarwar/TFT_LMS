import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type justfunDocument = Justfun & Document

@Schema()
export class Justfun {
    @Prop()
    data: string

    @Prop()
    count: number
}

export const justfunSchema  = SchemaFactory.createForClass(Justfun)
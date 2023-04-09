import  { Prop, Schema, SchemaFactory }  from   '@nestjs/mongoose' ;
import  { Document, HydratedDocument }  from   'mongoose' ;

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true })
    description: String;

    @Prop({ required: true })
    price: Number;

    @Prop({ required: true })
    image: String;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product)
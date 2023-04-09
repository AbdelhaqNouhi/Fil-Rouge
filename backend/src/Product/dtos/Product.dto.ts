import { IsNotEmpty } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    image: String;

    createdAt: Date;
}
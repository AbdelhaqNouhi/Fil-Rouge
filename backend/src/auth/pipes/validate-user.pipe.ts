import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dtos/CreateUser.dto';
import { ProductDto } from 'src/Product/dtos/Product.dto';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    return value;
  }
}

export class ValidateProductPipe implements PipeTransform {
  transform(value: ProductDto, metadata: ArgumentMetadata) {
    return value;
  }
}

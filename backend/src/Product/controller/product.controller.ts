import { Controller, Get, Post, Body, Delete, Put, Param, UseGuards, UsePipes } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ProductDto } from '../dtos/Product.dto';
import { ValidateProductPipe } from '../../auth/pipes/validate-user.pipe';
import { Role } from '../../Schema/Role/role.enum';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { Roles } from 'src/auth/roles.decorator';


@Controller('product')
@UsePipes(new ValidateProductPipe())

export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('create')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    Create(@Body() productData: ProductDto) {
        return this.productService.Create(productData);
    }

    @Get('getAll')
    // @Roles(Role.User, Role.Admin)
    // @UseGuards(RolesGuard)
    GetAll() {
        return this.productService.GetAll();
    }

    @Get('getThree')
    // @Roles(Role.User, Role.Admin)
    // @UseGuards(RolesGuard)
    GetThree() {
        return this.productService.GetThree();
    }

    @Get(':id')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    GetById(@Param('id') id: any) {
        const ProductId = this.productService.GetById(id);
        return ProductId;
    }

    @Post(':id')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    Update(@Param('id') id: any, @Body() productData: ProductDto) {
        return this.productService.Update(id, productData);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    Delete(@Param('id') id: any) {
        return this.productService.Delete(id);
    }
}

import { CreateUserDto } from './../users/dtos/CreateUser.dto';
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ExtractJwt } from 'passport-jwt';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretKey: process.env.SECRET_KEY,
        });
    }
    
    async validate(userData: CreateUserDto): Promise<any> {
        const user = await this.authService.CreateUser(userData);
        if (!user) {
        throw new UnauthorizedException();
        }
        return user;
    }
}
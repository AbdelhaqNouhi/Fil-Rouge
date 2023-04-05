import { PassportStrategy } from "@nestjs/passport";
import { Injectable} from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from 'dotenv'; config();
import { UsersService } from "src/users/service/users.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email, firstName: payload.firstName, lastName: payload.lastName, role: payload.role };
    }
}
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

}
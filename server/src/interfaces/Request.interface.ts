import {Request, Response, NextFunction} from 'express'

export interface IRequest extends Request {
    flash(message: string, callback: any): any;
    logIn(user: any, callback: any): any;
    user(): any;
    logout(): any;
}

export interface IResponse extends Response {}

export interface INext extends NextFunction {}
import * as bcrypt from 'bcrypt';

export function encodePassword(password: string){
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, SALT);
}

export function compearPassword(password: string, hashpassword: string){
    return bcrypt.compareSync(password, hashpassword);
}
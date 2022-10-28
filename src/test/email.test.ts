import {describe, expect, it} from '@jest/globals';
import { isValid } from "../utils/emailLogin";

describe('isValid', () => {
    it("should return true if email is invalid", () => {
        expect(isValid('helga')).toStrictEqual(true)        
    })

    it("should return true if email is invalid", () => {
        expect(isValid('helga@gmail')).toStrictEqual(true)
    })

    it("should return true if email is invalid", () => {
        expect(isValid('helga@gmail.c')).toStrictEqual(true)
    })

    it('should return false if email is valid', () => {
        expect(isValid('helga@gmail.com')).toStrictEqual(false)
    })

    it('should return false if email is valid', () => {
        expect(isValid('helga@yahoo.com')).toStrictEqual(false)
    })

    it('should return false if email is valid', () => {
        expect(isValid('helga@github.com')).toStrictEqual(false)
    })

    it('should return false if email is valid', () => {
        expect(isValid('helga@mail.com')).toStrictEqual(false)
    })
    
    it('should return false if email is valid', () => {
        expect(isValid('helga@mail.fr')).toStrictEqual(false)
    })
})


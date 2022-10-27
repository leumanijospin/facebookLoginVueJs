import {describe, expect, test} from '@jest/globals';
import { isValid } from "../utils/emailLogin";

describe('invalid email', () => {
    test('helga is not egal to helga@gmail.com', () => {
        expect(isValid('helga')).toStrictEqual(true)
    })
})

describe('invalid email', () => {
    test('helga@gmail is egal helga@gmail', () => {
        expect(isValid('helga@gmail')).toStrictEqual(true)
    })
})


describe('invalid email', () => {
    test('helga@gmail.c is egal helga@gmail.c', () => {
        expect(isValid('helga@gmail.c')).toStrictEqual(true)
    })
})


describe('valid email', () => {
    test('helga@gmail.com is egal helga@gmail.com', () => {
        expect(isValid('helga@gmail.com')).toStrictEqual(false)
    })
})

describe('valid email', () => {
    test('helga@gmail.cm is egal helga@gmail.cm', () => {
        expect(isValid('helga@gmail.com')).toStrictEqual(false)
    })
})

describe('valid email', () => {
    test('helga@gmail.cm is egal helga@gmail.cm', () => {
        expect(isValid('helga@gmail.com')).toStrictEqual(false)
    })
})

describe('valid email', () => {
    test('helga@mail.cm is egal helga@mail.cm', () => {
        expect(isValid('helga@mail.com')).toStrictEqual(false)
    })
})




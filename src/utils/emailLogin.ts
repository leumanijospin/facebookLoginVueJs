const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const isValid = (email: string): Boolean => email.match(pattern) ? false : true

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const isValid = (email: string): Boolean => {
    if(!email.match(pattern)) {
      return true
    }else {return false} 
}
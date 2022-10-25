
 type Error = {
  emailError: string,
  passwordError: string
}


export const login = (email: string, password: string, {emailError, passwordError}): void => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(!email) {
      emailError = 'email required!'
    }
    else if(!email.match(pattern)) {
      emailError = 'email invalid'
    }
    else {
      emailError = ''
    }

    if(!password) {
      passwordError = "password required!"
    }
    else if(password !== "bonjour") {
      passwordError = "invalid password"
    }
    else {
      passwordError = ''
    }

    if(!emailError && !passwordError) {
      alert("successful connection")
    }
  }

  
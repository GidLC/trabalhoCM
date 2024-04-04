type PropsType = {
    email: string
}

export const validaEmail = ({email}: PropsType) => {
    const regex = /@.*ifpr/;
    if (regex.test(email)) {
      return true
    } else {
      return undefined
    }
}
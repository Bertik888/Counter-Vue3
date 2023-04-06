export const createUser = (data) =>
  new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Not all information provided'))
    }
    const valid = []
    if (!data.name) valid.push('field "name" is required')
    if (!data.login) valid.push('field "login" is required')
    if (!data.email) valid.push('field "email" is required')
    if (!data.password) valid.push('field "password" is required')

    setTimeout(() => {
      if (valid.length) {
        resolve({
          status: 400,
          data: valid
        })
      } else {
        resolve({
          status: 200,
          data: data
        })
      }
    }, 250)
  })

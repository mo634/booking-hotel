
export const errorHandler = (statusCode:number,errMessg:string) =>{

    const error = new Error() as any

    error.message = errMessg
    console.log(error)

    error.statusCode = statusCode || 500

    return error
}
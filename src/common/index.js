const backendDomain = "http://localhost:5000"
const summaryApi = {
    signUp:{
        url:`${backendDomain}/api/signUp`,
        method : "post"
    },
    signIn:{
        url:`${backendDomain}/api/signin`,
        method : "post"
    },
    userData : {
        url:`${backendDomain}/api/user-details`,
        method : "get"
    },
    logouts : {
        url:`${backendDomain}/api/logout`,
        method : "get"
    },
}

export default summaryApi
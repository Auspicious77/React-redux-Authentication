
export const fetch2 = async (api, body) => {
    //body is an object for email or passwprd
    //api === /signup (end-point)
    const res = await fetch(api, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token")
        },

        body: JSON.stringify(body)

    })
    return await res.json()

}

export const fetch3 = async (api, type) => {
    //body is an object for email or passwprd
    //api === /signup (end-point)
    const res = await fetch(api, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token")
        },

        

    })
    return await res.json()

}
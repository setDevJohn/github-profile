import { baseUrl } from "../variables.js"

async function getEvents(userName) {
    const response =  await fetch(`${baseUrl}/${userName}/events`)
    return response.json()
}

export { getEvents }
import { redirect } from "react-router-dom";

export async function hostAuthRequired({ request }) {

    const random = Math.floor(Math.random() * 5) + 2;

    const authState = random % 2 === 0 ? true : false
    console.log(authState)
    if (authState) {
        return authState
    }


}
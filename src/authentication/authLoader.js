import { redirect } from "react-router-dom";

export async function hostAuthRequired({ request }) {



    let authState = false

    if (!authState) {

        throw redirect("/account");

    }
    return null

}
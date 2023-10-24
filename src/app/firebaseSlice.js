import { createSlice } from "@reduxjs/toolkit";
import database from "../../.firebase/firebase-config";


const client_data = database.collection("client_data");

const initialState = {
    client_name: "",
    client_number: "",
    onboarding_date: "",
    service_fee: "",
    service_status: ""
}


export const firebaseSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        create: (state, action) => {
            client_data.add(action.payload).then(ref => {
                console.log("Record added: ", ref)
            });
        }
    }
})
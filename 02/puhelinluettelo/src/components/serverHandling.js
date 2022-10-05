import axios from "axios";

const getAll = () => {
    const request = axios.get("http://localhost:3030/persons")
    return request.then(response => {
        return response.data
    })}

//const update = () => {
    //axios
        //.put("http://localhost:3030/persons")
        //.then(response => {
            //console.log(response + "GetAllData funktiossa")
            //return response.data
        //})
//}

export default getAll
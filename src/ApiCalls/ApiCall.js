import axios from "axios";
import React from "react";

const apiUrl = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
export  const fget = ()=>{
    const res = axios.get(apiUrl)
    return res;
}
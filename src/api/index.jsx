//Axios Calling Methods.
import axios from 'axios'
import uuid from 'react-uuid'
const url = "http://localhost:8093/";
export const createUser = (user) => axios.post(url + "user", user);



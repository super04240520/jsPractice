import axios from 'axios'

const Ax = axios.create({

    header :{
        "Content-Type":"application/json"
    }
});
export default Ax;



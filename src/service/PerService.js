import axios from "axios";
const PERSONNEL_API_URL="http://localhost:8080/personnel" ;


class PerService{
    getAllPersonnel(){
    return axios.get(PERSONNEL_API_URL);
}


}

export default new PerService()
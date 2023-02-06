import { fetchingError, fetchingSuccess, fetchingInProgress } from "./tasksSlice";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get("/tasks");
        console.log(response);
        dispatch(fetchingSuccess(response.data));
    } catch (error) {
        dispatch(fetchingError(error.message))
    }
}

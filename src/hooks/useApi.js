import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { setIsAuthenticated } from '../state/reducers/users';

const useApi = (url, postData) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const fetchData = () => {
        setIsLoading(true);
        
        axios.post(url, postData)
            .then((response) => {
                setData(response);
                console.log(response);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userid", response.data.userid);
                dispatch(setIsAuthenticated(true));
                history.push("/home");
            })
            .catch((error) => {
                setIsError(true);
                setData(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const values = [isLoading, isError, data, fetchData];
    return values;
}

export default useApi;

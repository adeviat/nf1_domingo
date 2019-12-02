import {useState} from "react";



    const put = async (url,data) => {

        //const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
        const options = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers({
                Accept: 'application/json',
                'Content-type': 'application/json',


            }),
            mode: 'cors',
        };

        return fetch('http://127.0.0.1/'+url, options)
            .then(response => {

                if(response.status === 200) {
                    console.log(response.statusText);
                    return response.json();
                }

                console.log(response.statusText);
                return Promise.reject(response.status);
            })

    };

export default put;
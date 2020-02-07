
const BASE_PATH = 'http://127.0.01/'

export const put = async (url,data) => {


        const options = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers({
                Accept: 'application/json',
                'Content-type': 'application/json',


            }),
            mode: 'cors',
        };

        return fetch(BASE_PATH+url, options)
            .then(response => {

                if(response.status === 200) {
                    console.log(response.statusText);
                    return response.json();
                }

                console.log(response.statusText);
                return Promise.reject(response.status);
            })

    };



export const post = async (url,data) => {


    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',


        }),
        mode: 'cors',
    };

    return fetch(BASE_PATH+url, options)
        .then(response => {

            if(response.status === 200) {
                console.log(response.statusText);
                return response.json();
            }

            console.log(response.statusText);
            return Promise.reject(response.status);
        })

};


export const get = async (url) => {


    const options = {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',


        }),
        mode: 'cors',
    };

    const data =   await fetch(BASE_PATH+url, options)
                            .then(  response => {

                                if(response.status === 200) {
                                    console.log(response.statusText);
                                    return response;
                                }

                                console.log(response.statusText);
                                Promise.reject(response.status);
                            });
    const dataJSON = await data.json();

    return dataJSON;

};


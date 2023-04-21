import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';


export const signup = async user => {
    try {
        const response = await fetch(`http://localhost:8000/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const signin = async user => {
    try {
        const response = await fetch(`http://localhost:8000/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
 


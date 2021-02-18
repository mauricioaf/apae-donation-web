const axios = require("axios");

export function findDonors(callback) {
    console.log('Finding Donors...');
    return axios
        .get("http://localhost:3001/donors")
        .then(function (response) {
            console.log('Response API', response);
            callback(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}



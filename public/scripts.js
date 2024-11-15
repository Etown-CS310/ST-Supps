"use strict";
(function () {
    const BASE_URL = "http://localhost:8080";
    window.addEventListener('load', init);

    function init() {
        id('register').addEventListener('click', register);
        id('login').addEventListener('click', login);
    }

    function register() {
        const uname = id('uname').value; // Change from email to uname
        const password = id('password').value;

        const data = new FormData();
        data.append("uname", uname); // Change from email to uname
        data.append("password", password);

        const options = {
            method: "POST",
            body: data
        };

        const url = BASE_URL + "/register";

        fetch(url, options)
            .then(checkStatus)
            .then((data) => {
                id('message').textContent = data['message'];
            });
    }

    function login() {
        const uname = id('uname').value; // Change from email to uname
        const password = id('password').value;
        const rememberMe = id('rememberMe').checked; // If you are using a "remember me" checkbox

        const data = new FormData();
        data.append("uname", uname); // Change from email to uname
        data.append("password", password);
        data.append("rememberMe", rememberMe);

        const options = {
            method: "POST",
            body: data
        };

        const url = BASE_URL + "/login";

        fetch(url, options)
            .then(checkStatus)
            .then((data) => {
                if (data.message == "Login successful") {
                    // save user uname (instead of email)
                    window.sessionStorage.setItem('uname', uname);

                    // redirect to /user after login
                    location.assign('/user');
                } else {
                    id('message').textContent = data['message'];
                }
            });
    }
})();


/* ------------------------------ Helper Functions  ------------------------------ */

/**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} id - element ID
 * @returns {object} DOM object associated with id.
 */
function id(idName) {
    return document.getElementById(idName);
}

/**
 * Returns the first element that matches the given CSS selector.
 * @param {string} query - CSS query selector.
 * @returns {object} The first DOM object matching the query.
 */
function qs(query) {
    return document.querySelector(query);
}

/**
 * Returns the array of elements that match the given CSS selector.
 * @param {string} query - CSS query selector
 * @returns {object[]} array of DOM objects matching the query.
 */
function qsa(query) {
    return document.querySelectorAll(query);
}

/**
 * Checks the response status and converts it to JSON.
 * @returns {object} JSON response.
 */
function checkStatus(response) {
    if (!response.ok) {
        console.log("Error in request: " + response.statusText);
    }
    return response.json();
}

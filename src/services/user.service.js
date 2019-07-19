export const userService = {
    login,
    logout,
    register
};

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch('/users/authenticate', requestOptions);
    const res = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(res));
    return res;    
}

function logout() {
    localStorage.removeItem('user');
}


async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const response = await fetch('/users/register', requestOptions);
    return handleResponse(response);
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}

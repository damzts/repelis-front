const SERVER_URL = process.env.REACT_APP_API_URL + "movies/"

export const getMovies = async () => {
    try {
        const response = await fetch(SERVER_URL);

        if (response.status === 200)
            return response.json();
        else
            return [];

    } catch (error) {
        console.log(error)
    }
}

export const saveMovie = async movie => {
    try {
        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        });

        if (response.status === 201)
            return response.json();
        else
            return false;

    } catch (error) {
        console.log(error)
    }
}

export const updateMovie = async movie => {
    try {
        const response = await fetch(SERVER_URL + movie._id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        });

        if (response.status === 200)
            return response.json();
        else
            return false;
    } catch (error) {
        console.log(error)
    }
}

export const deleteMovie = async id => {
    try {
        const response = await fetch(SERVER_URL + id, { method: 'DELETE' });
        return response.status === 204
    } catch (error) {
        console.log(error)
    }
}
import axios from "axios";

export const getManga = async (manga_id) => {
    return await axios.get(`http://localhost:8080/api/v1/manga/${manga_id}`);
}

export const getAllMangas = async () => {
    return await axios.get(`http://localhost:8080/api/v1/manga/`);
}



import axios from "axios";

// ARTISTS SERVICE
export const getArtists = () => axios.get("/artist/getAll");
export const deleteArtists = (ids: Array<string>) => axios.delete("/artist/deleteArtists", { params: { ids } });
export const addNewArtist = (body: Object) => axios.post('/artist/addNew', body)
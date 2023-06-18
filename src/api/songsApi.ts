import axios from "axios";

const API = "https://retoolapi.dev/lFVLSK/song";

const getSongs = async () => {
	try {
		const response = await axios.get(API);
		return response.data;
	} catch (error) {
		alert("Błąd wczytywania danych");
	}
};

const deleteSong = async (id: number) => {
	try {
		await axios.delete(`${API}/${id}`);
	} catch {
		alert("Błąd usuwania danych");
	}
};

export default {
	getSongs,
	deleteSong,
};

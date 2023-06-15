import { useEffect, useState } from "react";
import styled from "styled-components";

// const SONGS = [
// 	{
// 		id: 1,
// 		title: "Speechless",
// 		yt_link: "https://www.youtube.com/watch?v=wEzHUFvGO0Q",
// 	},
// 	{ id: 2, title: "Każdego dnia", yt_link: "https://www.youtube.com/" },
// 	{
// 		id: 3,
// 		title: "Till the sky falls down",
// 		yt_link: "https://www.youtube.com/",
// 	},
// 	{ id: 4, title: "Need to feel loved", yt_link: "https://www.youtube.com/" },
// 	{ id: 5, title: "Avinion", yt_link: "https://www.youtube.com/" },
// ];
interface Song {
	id: number;
	title: string;
	link: string;
}

const Container = styled.div`
	border: 3px solid white;
	box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
	border-radius: 2vw;
	width: 80%;
	height: 80%;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 7px;
		height: 50px !important;
		border-radius: 20px;
	}
	&::-webkit-scrollbar-thumb {
		background: #afaf;
		border-radius: 3px;
	}
`;

const Title = styled.h1`
	font-size: 2.5rem;
	color: rgb(55, 71, 79);
	margin: 20px 50px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const SongsList = styled.ul`
	list-style: none;
`;

const SongsListItem = styled.li`
	color: #555;
	margin: 10px 50px;
	padding: 10px 10px;
	border: 2px solid #555;
	border-radius: 5px;
	font-size: 1.4rem;
	&:hover {
		border-color: red;
	}
`;

function Playlist() {
	const [song, setSong] = useState<Song[]>([]);

	// const getData = async () => {
	// 	const res = await fetch("https://retoolapi.dev/qOollU/dupa");
	// 	const dupa: Song[] = await res.json();
	// 	return dupa;
	// };

	// getData().then(dupa => setDupa(dupa));
	// // TODO: poczytać o useEffect, promisy

	// useEffect();
	const API = "https://retoolapi.dev/lFVLSK/song";

	const fetchSong = async () => {
		const response = await fetch(API);
		const jsonData = await response.json();
		setSong(jsonData);
	};

	useEffect(() => {
		fetchSong();
	}, []);

	return (
		<Container>
			<Title>Lista piosenek:</Title>
			<SongsList>
				{song.map(song => {
					return (
						<>
							<SongsListItem key={song.id}>
								{song.title + " " + song.link}
							</SongsListItem>
						</>
					);
				})}
			</SongsList>
		</Container>
	);
}

export default Playlist;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import axios from "axios";
import "./App.css";
import { AddButton, RemoveButton } from "./components";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages";
// import About from "./pages/about";
// import SignUp from "./pages/signup";

interface Song {
	id: number;
	title: string;
	link: string;
}

const Container = styled.div`
	margin: 0px;
	width: 60%;
	height: 70vh;
	border: 3px solid white;
	box-shadow: 8px 8px 24px 0px #1ef50b;
	border-radius: 2vw;
`;

const Button = styled.button`
	margin: 20px;
	padding: 25px 50px;
	color: yellow;
	background-color: #000;
	border: 4px solid white;
	box-shadow: 0 0 0 4px yellow;
	border-radius: 3rem;
	font-size: 2rem;
`;

const SongSection = styled.div`
	margin-top: 20px;
	height: 500px;
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
	margin: 20px 50px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const SongsList = styled.ul`
	list-style: none;
`;

const SongsListItem = styled.li`
	margin: 10px 50px;
	padding: 10px 10px;
	border: 2px solid #555;
	border-radius: 5px;
	font-size: 1.4rem;
	&:hover {
		border-color: red;
	}
`;

function App() {
	const [song, setSong] = useState<Song[]>([]);
	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	// const getData = async () => {
	// 	const res = await fetch("https://retoolapi.dev/qOollU/dupa");
	// 	const dupa: Song[] = await res.json();
	// 	return dupa;
	// };

	// getData().then(dupa => setDupa(dupa));
	// // TODO: poczytać o useEffect, promisy

	// useEffect();
	const API = "https://retoolapi.dev/lFVLSK/song";

	// const fetchSong = async () => {
	// 	const response = await fetch(API);
	// 	const jsonData = await response.json();
	// 	setSong(jsonData);
	// };

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const response = await axios.get(API);
				setSong(response.data);
			} catch (error) {
				alert("Błąd wczytywania danych");
			}
		};
		fetchSong();
	}, []);

	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<Button onClick={themeToggler}>Switch Theme</Button>
				<GlobalStyles />
				<Container>
					<Title>Lista piosenek:</Title>
					<AddButton />
					<SongSection>
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
					</SongSection>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import { AddButton } from "./components";
import SongItem from "./components/SongItem";
import songsApi from "./api/songsApi";
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
	overflow-y: hidden;
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

const SongsList = styled.ul`
	list-style: none;
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
const Title = styled.h1`
	font-size: 2.5rem;
	margin: 20px 50px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

function App() {
	const [songs, setSongs] = useState<Song[]>([]);
	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const deleteSong = (id: number) => {
		songsApi.deleteSong(id).then(() => {
			setSongs(songs.filter(song => song.id !== id));
		});
	};

	useEffect(() => {
		songsApi.getSongs().then(res => {
			setSongs(res);
		});
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
							{songs.map(song => {
								return (
									<SongItem
										title={song.title}
										link={song.link}
										id={song.id}
										key={song.id}
										onDeleteSong={deleteSong}
									/>
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

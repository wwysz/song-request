import styled from "styled-components";
import DeleteSongButton from "./DeleteSongButton";

interface SongItemProps {
	id: number;
	title: string;
	link: string;
	onDeleteSong: (id: number) => void;
}

const SongsListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin: 10px 50px;
	padding: 10px 10px;
	border: 2px solid #555;
	border-radius: 5px;
	font-size: 1.4rem;
	&:hover {
		border-color: red;
	}
`;

const SongDetails = styled.div`
	display: flex;
	flex-direction: column;
`;
const Link = styled.span`
	font-size: 1.1rem;
`;

const SongItem = ({ id, title, link, onDeleteSong }: SongItemProps) => {
	console.log(id, title, link);
	return (
		<SongsListItem>
			<SongDetails>
				<span>{title}</span>
				<Link>{link}</Link>
			</SongDetails>
			<div>
				<DeleteSongButton id={id} onDeleteSong={onDeleteSong} />
			</div>
		</SongsListItem>
	);
};

export default SongItem;

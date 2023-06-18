import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DeleteSongButtonProps {
	id: number;
	onDeleteSong: (id: number) => void;
}

const DeleteSongButton = ({ id, onDeleteSong }: DeleteSongButtonProps) => {
	return (
		<FontAwesomeIcon icon={faXmarkCircle} onClick={() => onDeleteSong(id)} />
	);
};
export default DeleteSongButton;

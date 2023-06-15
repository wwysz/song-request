import styled from "styled-components";

const Container = styled.div`
	height: 50px;
	text-align: right;
`;
const Button = styled.button`
	padding: 10px 20px;
	color: white;
	background-color: green;
	font-size: 1.4rem;
	border: 2px solid green;
	border-radius: 25px;
`;

const AddButton = () => {
	return (
		<Container>
			<Button onClick={() => alert("klik")}>Add Song</Button>
		</Container>
	);
};

export default AddButton;

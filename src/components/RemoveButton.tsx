import styled from "styled-components";

const Button = styled.button`
	float: right;
	font-size: 1.6rem;
	border: 2px solid red;
	border-radius: 15px;
	&::after {
		content: "";
		display: block;
		clear: both;
	}
`;
const RemoveButton = () => {
	return <Button>Remove</Button>;
};

export default RemoveButton;

import styled from 'styled-components';
import { displayFlex } from './FlexContainers';

interface Props {
	img: string;
}

const Background = styled.div`
	${displayFlex}
	width: 100vw;
	height: 100vh;
	background: url(${({ img }: Props): string => img}) no-repeat;
	background-size: cover;
	background-position: center center;
	background-attachment: fixed;
	-webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
	max-width:100%;
	max-height:100%;
	box-sizing: border-box;
`;

export default Background;
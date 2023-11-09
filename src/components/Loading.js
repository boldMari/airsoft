import styled from 'styled-components';
import Icon from 'components/Icon';

const LoadingIcon = styled(Icon)`
	animation: loading-spinner 1s linear infinite;

	@keyframes loading-spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

function Loading() {
	return (
		<>
			<LoadingIcon name="loading" id="loading" size='1.5em' /> Načítám...
		</>
	)
}

export default Loading
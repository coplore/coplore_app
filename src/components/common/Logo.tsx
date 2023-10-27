import { Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';

const Logo = () => {
	const navigate = useNavigate();
	const handleMoveToHome = () => navigate(ROUTER_PATH.HOME);

	return (
		<Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleMoveToHome}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 295 295"
				preserveAspectRatio="xMidYMid meet"
			>
				<g transform="translate(0,295) scale(0.1,-0.1)" stroke="none">
					<path
						fill="#2c387e"
						d="M1520 2930 c-219 -28 -441 -111 -590 -223 -344 -257 -458 -631 -324 -1058 31 -100 107 -259 134 -284 20 -18 20 -17 20 101 1 449 272 812 685 919 88 23 259 30 352 15 157 -25 307 -87 436 -181 37 -27 71 -49 76 -49 10 0 125 125 250 270 52 61 80 102 79 115 -4 28 -174 154 -289 215 -117 61 -306 125 -432 145 -119 20 -302 26 -397 15z"
					/>
					<path
						fill="#3f51b5"
						d="M167 1831 c-9 -32 -24 -115 -33 -183 -39 -296 30 -641 178 -893 226 -383 613 -647 1069 -731 134 -25 422 -25 544 -1 195 40 387 117 535 216 109 73 190 139 190 156 0 12 -57 78 -287 334 l-32 36 -38 -23 c-390 -236 -915 -267 -1296 -76 -123 62 -186 103 -284 186 -190 158 -358 409 -434 647 -33 104 -64 242 -75 334 -4 31 -10 57 -14 57 -4 0 -14 -27 -23 -59z"
					/>
				</g>
			</svg>
			<Typography color="primary.dark" fontSize="26px" fontWeight="600" sx={{ marginTop: '8px' }}>
				oplore
			</Typography>
		</Stack>
	);
};

export default Logo;

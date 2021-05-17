import React, { FC } from 'react';
import { SpinnerWrapper } from './style';

const Spinner: FC = (): JSX.Element => (
	<SpinnerWrapper>
		<div className="loader-wrapper">
			<div className="loader">
				<div className="roller"></div>
				<div className="roller"></div>
			</div>

			<div id="loader2" className="loader">
				<div className="roller"></div>
				<div className="roller"></div>
			</div>

			<div id="loader3" className="loader">
				<div className="roller"></div>
				<div className="roller"></div>
			</div>
		</div>
	</SpinnerWrapper>
);

export default Spinner;

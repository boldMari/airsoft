import React from "react";
import Icons from "../assets/images/icons.svg";
import PropTypes from 'prop-types';

const Icon = ({ name, color, size, title, className }) => {
	const finalClass = `icon icon-${name} ${className}`;
	const link = Icons + '#icon-' + name;

	return (
		<svg className={finalClass} fill={color} width={size} height={size}>
			<title>{title}</title>
			<use xlinkHref={link} />
		</svg>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	title: PropTypes.string
};

export default Icon;
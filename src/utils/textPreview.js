import React from 'react'

const textPreview = (str, num, stripHTML) => {
	if (!str) return null;
	if (stripHTML) {
		str = str.replace(/(<([^>]+)>)/gi, "");
	}
	if (str.length > num) {
		return (
			<span>{str.slice(0, num)}...</span>
		)
	} else {
		return (
			<span>{str}</span>
		)
	}
}

export default textPreview
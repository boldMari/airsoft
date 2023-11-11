import React from 'react'

const textPreview = (str, num) => {
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
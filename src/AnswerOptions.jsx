import React from "react";
import PropTypes from 'prop-types';

const AnswerOptions = ({ question, isChecked, handleAnswerChange, handleCheckboxChange }) => {
	if (!question) {
		return (
			<div>
				No questions available, <br /> you may try again by reducing your requested number of
				questions on this topic
			</div>
		)
	}

	const { id, questionType, choices } = question

	if (questionType === "single") {
		return (
			<div>
				{choices.sort().map((choice) => (
					<div key={choice} className="form-check mb-3">
						<input
							className="form-check-input"
							type="radio"
							id={choice}
							name={id} // Use id directly here
							value={choice}
							checked={isChecked(id, choice)}
							onChange={() => handleAnswerChange(id, choice)}
						/>
						<label htmlFor={choice} className="form-check-label ms-2">
							{choice}
						</label>
					</div>
				))}
			</div>
		)
	} else if (questionType === "multiple") {
		return (
			<div>
				{choices.sort().map((choice) => (
					<div key={choice} className="form-check mb-3">
						<input
							className="form-check-input"
							type="checkbox"
							id={choice}
							name={id} // Use id directly here
							value={choice}
							checked={isChecked(id, choice)}
							onChange={() => handleCheckboxChange(id, choice)}
						/>
						<label htmlFor={choice} className="form-check-label ms-2">
							{choice}
						</label>
					</div>
				))}
			</div>
		)
	} else {
		return null
	}
}

AnswerOptions.propTypes = {
	question: PropTypes.shape({
		id: PropTypes.number.isRequired, // Change the type to number
		questionType: PropTypes.oneOf(['single', 'multiple']).isRequired,
		choices: PropTypes.arrayOf(PropTypes.string).isRequired
	}),
	isChecked: PropTypes.func.isRequired,
	handleAnswerChange: PropTypes.func.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired
};

export default AnswerOptions;

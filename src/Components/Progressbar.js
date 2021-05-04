const Progressbar = (props) => {
	const { bgcolor, completed, skill } = props;
	const containerStyles = {
		height: 30,
		width: "100%",
		backgroundColor: "white",
		borderRadius: 50,
		margin: 13,
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
		transition: "width 2s ease-in-out",
	};

	const labelStyles = {
		padding: 5,
		color: "white",
		fontWeight: "bold",
	};
	return (
		<div className="progressbars" style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}>{`${completed}% ${skill}`}</span>
			</div>
		</div>
	);
};
export default Progressbar;

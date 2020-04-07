var 
	prevSicked  = 0,
	sickedStr   = "";
	d_sickedStr = "";

data.forEach((v,i,a) => {
	if (i) {
		sickedStr   += ", ";
		d_sickedStr += ", ";
	}
	let 
		sicked   = v.sick - v.die - v.cured,
		d_sicked = sicked - prevSicked;

	sickedStr   += `${i * 30} ${-sicked   / 10 * 2}`;
	d_sickedStr += `${i * 30} ${-d_sicked / 10 * 2}`;

	prevSicked = sicked;
});

var code = `
	<polyline points="${sickedStr  }" stroke="#00f" stroke-width="2" fill="none"/>
	<polyline points="${d_sickedStr}" stroke="#f00" stroke-width="2" fill="none"/>
`;
chart.innerHTML = code;
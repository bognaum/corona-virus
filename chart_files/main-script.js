var 
	prevSick    = 0,
	prevSicked  = 0,
	sickedStr   = "",
	d_sickStr   = "",
	d_sickedStr = "";

data.forEach((v,i,a) => {
	if (i) {
		sickedStr   += ", ";
		d_sickStr   += ", ";
		d_sickedStr += ", ";
	}
	let 
		sicked   = v.sick - v.die - v.cured,
		d_sick   = v.sick - prevSick,
		d_sicked = sicked - prevSicked;

	sickedStr   += `${(i * 30) + 15} ${-sicked   / 10 * 2}`;
	d_sickStr   += `${(i * 30) + 15} ${-d_sick   / 10 * 2}`;
	d_sickedStr += `${(i * 30) + 15} ${-d_sicked / 10 * 2}`;

	let code = `
		<tr>
			<td>${i + 1}</td>
			<td>${v.date}</td>
			<td>${v.sick}</td>
			<td>${v.sick - prevSick}</td>
			<td>${v.die}</td>
			<td>${v.cured}</td>
			<td>${v.sick - v.die - v.cured}</td>
			<td>${v.sick - v.die - v.cured - prevSicked}</td>
		</tr>
	`;

	tBody.innerHTML += code;

	prevSick = v.sick;
	prevSicked = sicked;
});

var code = `
	<polyline points="${sickedStr  }" stroke="#00f" stroke-width="2" fill="none"/>
	<polyline points="${d_sickStr  }" stroke="#0f0" stroke-width="2" fill="none"/>
	<polyline points="${d_sickedStr}" stroke="#f00" stroke-width="2" fill="none"/>
`;

chart.innerHTML = code;
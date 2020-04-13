var 
	prevSick    = 0,
	prevSicked  = 0,
	sickStr     = "",
	sickedStr   = "",
	d_sickStr   = "",
	d_sickedStr = "";

data.forEach((v,i,a) => {
	if (i) {
		sickStr     += ", ";
		sickedStr   += ", ";
		d_sickStr   += ", ";
		d_sickedStr += ", ";
	}
	let 
		sicked   = v.sick - v.die - v.cured,
		d_sick   = v.sick - prevSick,
		d_sicked = sicked - prevSicked;

	sickStr     += `${(i * 30) + 15} ${-v.sick   / 10 * 2}`;
	sickedStr   += `${(i * 30) + 15} ${-sicked   / 10 * 2}`;
	d_sickStr   += `${(i * 30) + 15} ${-d_sick   / 10 * 2}`;
	d_sickedStr += `${(i * 30) + 15} ${-d_sicked / 10 * 2}`;

	let code = `
		<tr>
			<td title="№"                       >${i + 1   }</td>
			<td title="дата"                    >${v.date  }</td>
			<td title="случаев заражения"       >${v.sick  }</td>
			<td title="прирост случаев за сутки">${d_sick  }</td>
			<td title="умерло"                  >${v.die   }</td>
			<td title="выздоровило"             >${v.cured }</td>
			<td title="больных "                >${sicked  }</td>
			<td title="прирост больных за сутки">${d_sicked}</td>
		</tr>
	`;

	tBody.innerHTML += code;

	prevSick = v.sick;
	prevSicked = sicked;
});

var code = `
	<polyline points="${sickStr    }" stroke="#999" stroke-width="2" fill="none"/>
	<polyline points="${sickedStr  }" stroke="#00f" stroke-width="2" fill="none"/>
	<polyline points="${d_sickStr  }" stroke="#000" stroke-width="2" fill="none"/>
	<polyline points="${d_sickedStr}" stroke="#f00" stroke-width="2" fill="none"/>
`;

chart.innerHTML = code;

svg_chart_1.onmousemove = function(e) {
	var kXY = 2;
	var bcr = this.getBoundingClientRect();
	var deys = ["понедельник", "второник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
	ch1date.textContent    = calendar[Math.floor(e.offsetX / 30 * kXY)];
	// ch1vickDay.textContent = deys[(Math.floor(e.offsetX / 30) - 1) % 7];
	ch1value.textContent   = (-e.offsetY + bcr.height) * 10 / 2 * kXY;
}
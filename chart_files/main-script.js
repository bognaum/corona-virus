var 
	prevSick    = 0,
	prevSicked  = 0,
	prevDie     = 0,
	prevCured   = 0,
	prevTested  = 0,
	sickStr     = "",
	sickedStr   = "",
	d_sickStr   = "",
	d_sickedStr = "";
let 
	d_sickArr   = [],
	d_sickedArr = [];

data.forEach((v,i,a) => {
	if (i) {
		sickStr     += ", ";
		sickedStr   += ", ";
		d_sickStr   += ", ";
		d_sickedStr += ", ";
	}
	let 
		sicked   = v.sick  - v.die - v.cured,
		d_sick   = v.sick  - prevSick,
		d_sicked = sicked  - prevSicked,
		d_Die    = v.die   - prevDie,
		d_Cured  = v.cured - prevCured,
		tested   = v.tested || 0,
		testedNoData = v.tested === undefined || v.tested === null,
		d_tested = tested  - prevTested;

	d_sickArr.push(d_sick);
	d_sickedArr.push(d_sicked);

	sickStr     += `${(i * 30) + 15} ${-v.sick   / 20}`;
	sickedStr   += `${(i * 30) + 15} ${-sicked   / 20}`;
	d_sickStr   += `${(i * 30) + 15} ${-d_sick   / 20}`;
	d_sickedStr += `${(i * 30) + 15} ${-d_sicked / 20}`;

	let dateStr = v.date.split(".").reverse().join("-");

	let code = `
		<tr>
			<td rowspan="2" data-week-d="${i % 7}" title="№"   >${i + 1   }</td>
			<td rowspan="2" data-week-d="${i % 7}" title="дата">${dateStr }</td>
			<td class="delta"  title="за сутки"                >Δ</td>
			<td class="delta"  title="прирост случаев за сутки">${d_sick  }</td>
			<!-- <td rowspan="2" title="Прирост случаев заражения в процентах."
				>${Math.round(d_sick / v.sick * 100 *100) / 100}%</td> -->
			<td class="delta"  title="умерло за сутки"         >${d_Die   }</td>
			<td class="delta"  title="выздоровило за сутки"    >${d_Cured }</td>
			<td class="delta"  title="прирост больных за сутки">${d_sicked}</td>
			<td class="delta"  title="тестов за сутки"         >${testedNoData ? "-" : d_tested}</td>
		</tr>
		<tr>
			<td class="common" title="всего"                   >Σ</td>
			<td class="common" title="случаев заражения всего" >${v.sick  }</td>
			<td class="common" title="умерло всего"            >${v.die   }</td>
			<td class="common" title="выздоровило всего"       >${v.cured }</td>
			<td class="common" title="больных всего"           >${sicked  }</td>
			<td class="common" title="тестов всего"            >${testedNoData ? "-" : v.tested}</td>
		<tr>
	`;

	tBody.innerHTML += code;

	prevSick = v.sick;
	prevSicked = sicked;
	prevDie     = v.die;
	prevCured   = v.cured;
	prevTested  = tested;
});


chart_1.innerHTML = 
	`
		<polyline 
			points="${sickStr    }" 
				stroke="#999" stroke-width="10" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${sickedStr  }" 
				stroke="#77f" stroke-width="10" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${d_sickStr  }" 
				stroke="#555" stroke-width="10" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${d_sickedStr}" 
				stroke="#f77" stroke-width="10" fill="none" stroke-linejoin="round"/>
	`;

chart_2.innerHTML =
	`
		<polyline 
			points="${d_sickArr  .map((v,i,a) => `${3 + i * 6} ${-v / 5}`).join(", ")}" 
			stroke="#555" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
		<polyline 
			points="${d_sickedArr.map((v,i,a) => `${3 + i * 6} ${-v / 5}`).join(", ")}" 
			stroke="#f77" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
	`;


svg_chart_1.onmousemove = function(e) {
	var kXY = 30 / 6;
	var kY = 30 / 6 * 2;
	var kX = 30 / 6;
	var bcr = this.getBoundingClientRect();
	var deys = ["понедельник", "второник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

	moveXCursor(e.offsetX / 6);
}

svg_chart_2.onmousemove = function(e) {
	var kX = 30 / 6;
	var kY = 5;
	var bcr = this.getBoundingClientRect();
	var deys = ["понедельник", "второник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

	moveXCursor(e.offsetX / 6);
}

function moveXCursor(deyNumFloat) {
	const 
		pixInDey = 6,
		deyNum = Math.floor(deyNumFloat),
		d0 = {date: "---", sick: 0, die: 0, cured: 0, tested: 0,},
		d  = data[deyNum] || d0,
		_d = data[deyNum - 1] || d0;

	ch1title.style.marginLeft = (pixInDey * deyNum)+"px";
	ch1date.     textContent = calendar[deyNum];
	ch1_sick.    textContent = d.sick;
	ch1_sicked.  textContent = d.sick - d.die - d.cured;
	ch1_d_sick.  textContent = d.sick - _d.sick;
	ch1_d_sicked.textContent = d.sick - d.die - d.cured - (_d.sick - _d.die - _d.cured);

	const 
		cursor1X = deyNumFloat * 30,
		cursor2X = deyNumFloat * 6;

	chart_1_cursor.innerHTML = `<line x1="${cursor1X}" y1="0" x2="${cursor1X}" y2="-6000" stroke="#000" stroke-width="3" stroke-dasharray="10"/>`;
	chart_2_cursor.innerHTML = `<line x1="${cursor2X}" y1="500" x2="${cursor2X}" y2="-6000" stroke="#000" stroke-width="1" stroke-dasharray="2"/>`;
}
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
	prev_kievSick = 0,
	d_kievSickArr = [];

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

	let 
		kievSick = kievData[i]?.sick || 0,
		d_kievSick = kievSick - prev_kievSick;
	d_kievSickArr.push(d_kievSick);
	prev_kievSick = kievSick;

	d_sickArr.push(d_sick);
	d_sickedArr.push(d_sicked);

	sickStr     += `${(i * 30) + 15} ${-v.sick   / 20}`;
	sickedStr   += `${(i * 30) + 15} ${-sicked   / 20}`;
	d_sickStr   += `${(i * 30) + 15} ${-d_sick   / 20}`;
	d_sickedStr += `${(i * 30) + 15} ${-d_sicked / 20}`;

	let dateStr = v.date.split(".").reverse().join("-");

	// debugger;

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
			<td class="delta"  title="прирост больных за сутки">${d_kievSick}</td>
		</tr>
		<tr>
			<td class="common" title="всего"                   >Σ</td>
			<td class="common" title="случаев заражения всего" >${v.sick  }</td>
			<td class="common" title="умерло всего"            >${v.die   }</td>
			<td class="common" title="выздоровило всего"       >${v.cured }</td>
			<td class="common" title="больных всего"           >${sicked  }</td>
			<td class="common" title="тестов всего"            >${testedNoData ? "-" : v.tested}</td>
			<td class="common" title="в Киеве всего"           >${kievSick || "-"}</td>
		<tr>
	`;

	tBody.innerHTML += code;

	prevSick = v.sick;
	prevSicked = sicked;
	prevDie     = v.die;
	prevCured   = v.cured;
	prevTested  = tested;
});


const allOpts = {
	step: 60,
	minY: -3000,
	maxY: 3000,
	offsetX: 30,
};

const
	dSeckData = data.map((v,i,a) => v.sick - (a[i - 1]?.sick || 0)),
	dSeckedData = data.map((v,i,a) => {
		const 
			sicked = v.sick - v.die - v.cured,
			prev = a[i - 1] || {sick: 0, die: 0, cured: 0},
			prev_sicked = prev.sick - prev.die - prev.cured;

		return sicked - prev_sicked;
	}),
	kievDSeckData = kievData.map((v,i,a) => v.sick - (a[i - 1]?.sick || 0)),
	dSeck_dSecked_Code = getPolylinePointsArr([dSeckData, dSeckedData, kievDSeckData], allOpts);

chart_all.innerHTML = 
	`
		<polyline 
			points="${getPolylinePoints(data.map(v => v.sick), allOpts)}" 
				stroke="#999" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${getPolylinePoints(data.map((v) => v.sick - v.die - v.cured), allOpts)}" 
				stroke="#77f" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${dSeck_dSecked_Code[2]}" 
				stroke="#285" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${dSeck_dSecked_Code[0]}" 
				stroke="#555" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${dSeck_dSecked_Code[1]}" 
				stroke="#f77" stroke-width="30" fill="none" stroke-linejoin="round"/>
	`;


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
			points="${d_sickArr  .map((v,i,a) => `${3 + i * 6} ${-v / 10}`).join(", ")}" 
			stroke="#555" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
		<polyline 
			points="${d_sickedArr.map((v,i,a) => `${3 + i * 6} ${-v / 10}`).join(", ")}" 
			stroke="#f77" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
	`;

chart_3.innerHTML =
	`
		<polyline 
			points="${kievData.map(v => v.sick).map((v,i,a) => `${3 + i * 6} ${-v / 5 / 10}`).join(", ")}" 
			stroke="#bba" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
		<polyline 
			points="${d_kievSickArr.map((v,i,a) => `${3 + i * 6} ${-v }`).join(", ")}" 
			stroke="#285" stroke-width="3" fill="none"
			stroke-linejoin="round"
		/>
	`;


svg_chart_all.onmousemove = function(e) {
	var kXY = 30 / 6;
	var kY = 30 / 6 * 2;
	var kX = 30 / 6;
	var bcr = this.getBoundingClientRect();
	var deys = ["понедельник", "второник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

	moveXCursor(e.offsetX / 6);
}

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

svg_chart_3.onmousemove = function(e) {
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
		kievSick = kievData[deyNum]?.sick || 0,
		prev_kievSick = kievData[deyNum - 1]?.sick || 0,
		d_kievSick = kievSick - prev_kievSick;

	ch3title.style.marginLeft = (pixInDey * deyNum)+"px";
	ch3date.     textContent = calendar[deyNum];
	ch3_sick_kiev. textContent = kievSick;
	ch3_d_sick_kiev. textContent = d_kievSick;

	const 
		cursorAllX = deyNumFloat * 60,
		cursor1X = deyNumFloat * 30,
		cursor2X = deyNumFloat * 6,
		cursor3X = deyNumFloat * 6;

	chart_all_cursor.innerHTML = `<line x1="${cursorAllX}" y1="3000" x2="${cursorAllX}" y2="-6000" stroke="#000" stroke-width="3" stroke-dasharray="100 30"/>`;
	chart_1_cursor.innerHTML = `<line x1="${cursor1X}" y1="0" x2="${cursor1X}" y2="-6000" stroke="#000" stroke-width="3" stroke-dasharray="10"/>`;
	chart_2_cursor.innerHTML = `<line x1="${cursor2X}" y1="500" x2="${cursor2X}" y2="-6000" stroke="#000" stroke-width="1" stroke-dasharray="2"/>`;
	chart_3_cursor.innerHTML = `<line x1="${cursor3X}" y1="500" x2="${cursor3X}" y2="-6000" stroke="#000" stroke-width="1" stroke-dasharray="2"/>`;
}

function getPolylinePoints(data, options={}) {
	const _ = Object.assign({
		step: 10,
		maxY: 100,
		minY: 100,
		offsetX: 0,
		offsetY: 0,
	}, options);
	const 
		min = Math.min(...data),
		max = Math.max(...data),
		maxPosetive = (0 < max)? max : 0,
		maxNegative = (min < 0)? min : 0,
		kY = Math.min(Math.abs(_.maxY / maxPosetive), Math.abs(_.minY / maxNegative));
	let str = "";
	for (let [i,v] of data.entries()) {
		if (i)
			str += ", ";
		str += `${(i * _.step) + _.offsetX} ${(-v * kY) + _.offsetY}`;
	}
	return str;
}

function getPolylinePointsArr(dataArr, options={}) {
	const _ = Object.assign({
		step: 10,
		maxY: 100,
		minY: 100,
		offsetX: 0,
		offsetY: 0,
	}, options);
	const 
		flatDataArr = dataArr.flat(),
		min = Math.min(...flatDataArr),
		max = Math.max(...flatDataArr),
		maxPosetive = (0 < max)? max : 0,
		maxNegative = (min < 0)? min : 0,
		kY = Math.min(Math.abs(_.maxY / maxPosetive), Math.abs(_.minY / maxNegative));
	let res = [];

	for (let data of dataArr) {
		let str = "";
		for (let [i,v] of data.entries()) {
			if (i)
				str += ", ";
			str += `${(i * _.step) + _.offsetX} ${(-v * kY) + _.offsetY}`;
		}
		res.push(str);
	}
	return res;
}
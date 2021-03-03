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

	let 
		ukrPopulation = 41980000,
		dose1         = vacData[i].dose1 || 0,
		dose1Per      = Math.round(dose1 / ukrPopulation * 100 * 100) / 100,
		deltaDose1    = vacData[i].dose1 - (vacData[i - 1]?.dose1 || 0);

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
			<td class="delta"  title="вакцинировано за сутки"  >${deltaDose1 || "0"}</td>
		</tr>
		<tr>
			<td class="common" title="всего"                   >Σ</td>
			<td class="common" title="случаев заражения всего" >${v.sick  }</td>
			<td class="common" title="умерло всего"            >${v.die   }</td>
			<td class="common" title="выздоровило всего"       >${v.cured }</td>
			<td class="common" title="больных всего"           >${sicked  }</td>
			<td class="common" title="тестов всего"            >${testedNoData ? "-" : v.tested}</td>
			<td class="common" title="в Киеве всего"           >${kievSick || "-"}</td>
			<td class="common" title="вакцинировано всего %"  >${dose1Per || "0"}%</td>
		<tr>
	`;

	tBody.append(evalDF(code));

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

const kievSick_sick_sicked_data = getPolylinePointsArr([
		kievData.map((v,i,a) => v.sick),
		data.map(v => v.sick),
		data.map((v) => v.sick - v.die - v.cured)
	], allOpts);

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

const dTested = getPolylinePoints(
	data.map((v,i,a) => (v.tested || 0) - (a[i - 1]?.tested || 0)),
	allOpts
);

chart_1.innerHTML = 
	`
		<polyline 
			points="${kievSick_sick_sicked_data[0]}" 
				stroke="#bba" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${kievSick_sick_sicked_data[1]}" 
				stroke="#999" stroke-width="30" fill="none" stroke-linejoin="round"/>
		<polyline 
			points="${kievSick_sick_sicked_data[2]}" 
				stroke="#77f" stroke-width="30" fill="none" stroke-linejoin="round"/>
	`;

chart_2.innerHTML = 
	`
		<polyline 
			points="${dTested}" 
				stroke="#7bf" stroke-width="30" fill="none" stroke-linejoin="round"/>
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


svg_chart_1_cover.onmousemove = function(e) {
	var kXY = 30 / 6;
	var kY = 30 / 6 * 2;
	var kX = 30 / 6;
	var bcr = this.getBoundingClientRect();
	var deys = ["понедельник", "второник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

	moveXCursor(e.offsetX / 6);
}

svg_chart_2_cover.onmousemove = function(e) {
	var kXY = 30 / 6;
	var kY = 30 / 6 * 2;
	var kX = 30 / 6;
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
		d_kievSick = kievSick - prev_kievSick,
		d_tested = (d.tested || 0) - (_d.tested || 0);

	ch3title.style.marginLeft = (pixInDey * deyNum)+"px";
	ch3date.     textContent = calendar[deyNum];
	ch3_sick_kiev. textContent = kievSick;
	ch3_d_sick_kiev. textContent = d_kievSick;
	ch3_d_tested.   textContent = d_tested;

	const 
		cursorAllX = deyNumFloat * 60,
		cursor1X = deyNumFloat * 30,
		cursor2X = deyNumFloat * 6,
		cursor3X = deyNumFloat * 6;

	chart_1_cursor.innerHTML = `<line x1="${cursorAllX}" y1="3000" x2="${cursorAllX}" y2="-6000" stroke="#000" stroke-width="3" stroke-dasharray="100 30"/>`;
	chart_2_cursor.innerHTML = `<line x1="${cursorAllX}" y1="3000" x2="${cursorAllX}" y2="-6000" stroke="#000" stroke-width="3" stroke-dasharray="100 30"/>`;
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

function evalDF(code) {
	const shell = document.createElement("template");
	shell.innerHTML = code;
	return shell.content;
}
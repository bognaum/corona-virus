var data = [
	{date: "2020.03.15", sick: 3    , die: 0   , cured: 0   ,               },
	{date: "2020.03.16", sick: 5    , die: 0   , cured: 0   ,               }, // die: null, cured: null,
	{date: "2020.03.17", sick: 7    , die: 0   , cured: 0   ,               },
	{date: "2020.03.18", sick: 14   , die: 2   , cured: 0   ,               },
	{date: "2020.03.19", sick: 16   , die: 2   , cured: 0   ,               },
	{date: "2020.03.20", sick: 26   , die: 3   , cured: 0   ,               },
	{date: "2020.03.21", sick: 41   , die: 3   , cured: 1   ,               },
	{date: "2020.03.22", sick: 47   , die: 3   , cured: 1   ,               },
	{date: "2020.03.23", sick: 73   , die: 3   , cured: 1   ,               },
	{date: "2020.03.24", sick: 84   , die: 3   , cured: 1   ,               },
	{date: "2020.03.25", sick: 113  , die: 4   , cured: 1   ,               },
	{date: "2020.03.26", sick: 156  , die: 5   , cured: 1   ,               },
	{date: "2020.03.27", sick: 218  , die: 5   , cured: 4   ,               },
	{date: "2020.03.28", sick: 311  , die: 8   , cured: 5   ,               },
	{date: "2020.03.29", sick: 418  , die: 9   , cured: 5   ,               },
	{date: "2020.03.30", sick: 480  , die: 11  , cured: 6   ,               },
	{date: "2020.03.31", sick: 549  , die: 13  , cured: 8   ,               },
	{date: "2020.04.01", sick: 669  , die: 17  , cured: 10  ,               },
	{date: "2020.04.02", sick: 804  , die: 20  , cured: 13  ,               },
	{date: "2020.04.03", sick: 942  , die: 23  , cured: 19  ,               },
	{date: "2020.04.04", sick: 1096 , die: 28  , cured: 23  ,               },
	{date: "2020.04.05", sick: 1251 , die: 32  , cured: 25  ,               },
	{date: "2020.04.06", sick: 1319 , die: 38  , cured: 28  ,               },
	{date: "2020.04.07", sick: 1462 , die: 45  , cured: 28  ,               },
	{date: "2020.04.08", sick: 1668 , die: 52  , cured: 35  ,               },
	{date: "2020.04.09", sick: 1892 , die: 57  , cured: 45  ,               },
	{date: "2020.04.10", sick: 2203 , die: 69  , cured: 61  , tested: 23522 },
	{date: "2020.04.11", sick: 2511 , die: 73  , cured: 79  , tested: 26577 },
	{date: "2020.04.12", sick: 2777 , die: 83  , cured: 89  , tested: 30314 },
	{date: "2020.04.13", sick: 3102 , die: 93  , cured: 97  , tested: 32496 },
	{date: "2020.04.14", sick: 3372 , die: 98  , cured: 119 , tested: 35153 },
	{date: "2020.04.15", sick: 3764 , die: 108 , cured: 143 , tested: 39084 },
	{date: "2020.04.16", sick: 4161 , die: 116 , cured: 186 , tested: 42823 },
	{date: "2020.04.17", sick: 4662 , die: 125 , cured: 246 , tested: 47096 },
	{date: "2020.04.18", sick: 5106 , die: 133 , cured: 275 , tested: 52534 },
	{date: "2020.04.19", sick: 5449 , die: 141 , cured: 347 , tested: 57111 },
	{date: "2020.04.20", sick: 5710 , die: 151 , cured: 359 , tested: 58093 },
	{date: "2020.04.21", sick: 6125 , die: 161 , cured: 367 , tested: 61997 },
	{date: "2020.04.22", sick: 6592 , die: 174 , cured: 424 , tested: 67520 }, // cured: 467
	{date: "2020.04.23", sick: 7170 , die: 187 , cured: 504 , tested: 72296 },
	{date: "2020.04.24", sick: 7647 , die: 193 , cured: 601 , tested: 77752 },
	{date: "2020.04.25", sick: 8125 , die: 201 , cured: 782 , tested: 83577 },
	{date: "2020.04.26", sick: 8617 , die: 209 , cured: 840 , tested: 89373 },
	{date: "2020.04.27", sick: 9009 , die: 220 , cured: 864 , tested: 93519 },
	{date: "2020.04.28", sick: 9410 , die: 239 , cured: 992 , tested: 98719 },
	{date: "2020.04.29", sick: 9866 , die: 250 , cured: 1103, tested: 104544},
	{date: "2020.04.30", sick: 10406, die: 261 , cured: 1238, tested: 111859},
	{date: "2020.05.01", sick: 10861, die: 272 , cured: 1413, tested: 118545},
	{date: "2020.05.02", sick: 11411, die: 279 , cured: 1498, tested: 122752},
	{date: "2020.05.03", sick: 11913, die: 288 , cured: 1547, tested: 129723}, // cured: 1548
	{date: "2020.05.04", sick: 12331, die: 303 , cured: 1619, tested: 134592}, 
	{date: "2020.05.05", sick: 12697, die: 316 , cured: 1875, tested: 139759}, 
	{date: "2020.05.06", sick: 13184, die: 327 , cured: 2097, tested: 144283},
	{date: "2020.05.07", sick: 13691, die: 340 , cured: 2396, tested: 151569},
	{date: "2020.05.08", sick: 14195, die: 361 , cured: 2706, tested: 159155},
	{date: "2020.05.09", sick: 14710, die: 376 , cured: 2909, tested: 167107},
	{date: "2020.05.10", sick: 15232, die: 391 , cured: 3060, tested: 176403},
	{date: "2020.05.11", sick: 15648, die: 408 , cured: 3288, tested: 181552},
	{date: "2020.05.12", sick: 16023, die: 425 , cured: 3373, tested: 187307},

];
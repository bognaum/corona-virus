const kievData = [
	{date: "2020.03.15", sick: null , dSick: null},
	{date: "2020.03.16", sick: null , dSick: null},
	{date: "2020.03.17", sick: null , dSick: null},
	{date: "2020.03.18", sick: null , dSick: null},
	{date: "2020.03.19", sick: null , dSick: null},
	{date: "2020.03.20", sick: null , dSick: null},
	{date: "2020.03.21", sick: null , dSick: null},
	{date: "2020.03.22", sick: null , dSick: null},
	{date: "2020.03.23", sick: null , dSick: null},
	{date: "2020.03.24", sick: null , dSick: null},
	{date: "2020.03.25", sick: null , dSick: null},
	{date: "2020.03.26", sick: null , dSick: null},
	{date: "2020.03.27", sick: null , dSick: null},
	{date: "2020.03.28", sick: null , dSick: null},
	{date: "2020.03.29", sick: null , dSick: null},
	{date: "2020.03.30", sick: null , dSick: null},
	{date: "2020.03.31", sick: null , dSick: null},
	{date: "2020.04.01", sick: null , dSick: null},
	{date: "2020.04.02", sick: 161  , dSick: null},
	{date: "2020.04.03", sick: 189  , dSick: null},
	{date: "2020.04.04", sick: 214  , dSick: null},
	{date: "2020.04.05", sick: 245  , dSick: null},
	{date: "2020.04.06", sick: 267  , dSick: 22  },
	{date: "2020.04.07", sick: 279  , dSick: 12  },
	{date: "2020.04.08", sick: 294  , dSick: 15  },
	{date: "2020.04.09", sick: 335  , dSick: null},
	{date: "2020.04.10", sick: 348  , dSick: 13  },
	{date: "2020.04.11", sick: 396  , dSick: 48  },
	{date: "2020.04.12", sick: 416  , dSick: null},
	{date: "2020.04.13", sick: 495  , dSick: 79  },
	{date: "2020.04.14", sick: 551  , dSick: 56  },
	{date: "2020.04.15", sick: 612  , dSick: 61  }, // 15
	{date: "2020.04.16", sick: 644  , dSick: 32  },
	{date: "2020.04.17", sick: 705  , dSick: 61  },
	{date: "2020.04.18", sick: 770  , dSick: 65  },
	{date: "2020.04.19", sick: 770  , dSick: 0   },
	{date: "2020.04.20", sick: 850  , dSick: 49  },
	{date: "2020.04.21", sick: 892  , dSick: 42  },
	{date: "2020.04.22", sick: 989  , dSick: 97  },
	{date: "2020.04.23", sick: 1059 , dSick: 70  },
	{date: "2020.04.24", sick: 1122 , dSick: 63  },
	{date: "2020.04.25", sick: 1159 , dSick: 37  },
	{date: "2020.04.26", sick: 1188 , dSick: 29  },
	{date: "2020.04.27", sick: 1220 , dSick: 32  },
	{date: "2020.04.28", sick: 1298 , dSick: 78  },
	{date: "2020.04.29", sick: 1341 , dSick: 43  },
	{date: "2020.04.30", sick: 1401 , dSick: 60  },
	{date: "2020.05.01", sick: 1453 , dSick: 52  },
	{date: "2020.05.02", sick: 1494 , dSick: 41  },
	{date: "2020.05.03", sick: 1511 , dSick: 17  },
	{date: "2020.05.04", sick: 1535 , dSick: 24  },
	{date: "2020.05.05", sick: 1583 , dSick: 48  },
	{date: "2020.05.06", sick: 1651 , dSick: 68  },
	{date: "2020.05.07", sick: 1675 , dSick: 24  },
	{date: "2020.05.08", sick: 1721 , dSick: 46  },
	{date: "2020.05.09", sick: 1771 , dSick: 50  },
	{date: "2020.05.10", sick: 1805 , dSick: 34  },
	{date: "2020.05.11", sick: 1871 , dSick: 66  },
	{date: "2020.05.12", sick: 1930 , dSick: 59  },
	{date: "2020.05.13", sick: 1960 , dSick: 30  }, // 13
	{date: "2020.05.14", sick: 2012 , dSick: 52  },
	{date: "2020.05.15", sick: 2068 , dSick: 56  },
	{date: "2020.05.16", sick: 2221 , dSick: 153 },
	{date: "2020.05.17", sick: 2280 , dSick: 59  },
	{date: "2020.05.18", sick: 2321 , dSick: 41  },
	{date: "2020.05.19", sick: 2359 , dSick: 38  },
	{date: "2020.05.20", sick: 2410 , dSick: 51  },
	{date: "2020.05.21", sick: 2475 , dSick: 65  },
	{date: "2020.05.22", sick: 2522 , dSick: 47  },
	{date: "2020.05.23", sick: 2569 , dSick: 47  },
	{date: "2020.05.24", sick: 2623 , dSick: 54  },
	{date: "2020.05.25", sick: 2652 , dSick: 29  },
	{date: "2020.05.26", sick: 2710 , dSick: 58  },
	{date: "2020.05.27", sick: 2739 , dSick: 29  },
	{date: "2020.05.28", sick: 2793 , dSick: 54  }, // 28
	{date: "2020.05.29", sick: 2849 , dSick: 56  },
	{date: "2020.05.30", sick: 2904 , dSick: 55  },
	{date: "2020.05.31", sick: 2985 , dSick: 81  },
	{date: "2020.06.01", sick: 3043 , dSick: 58  },
	{date: "2020.06.02", sick: 3071 , dSick: 28  },
	{date: "2020.06.03", sick: 3133 , dSick: 62  },
	{date: "2020.06.04", sick: 3210 , dSick: 77  },
	{date: "2020.06.05", sick: 3292 , dSick: 82  },
	{date: "2020.06.06", sick: 3375 , dSick: 83  },
	{date: "2020.06.07", sick: 3418 , dSick: 43  },
	{date: "2020.06.08", sick: 3490 , dSick: 72  },
	{date: "2020.06.09", sick: 3523 , dSick: 33  },
	{date: "2020.06.10", sick: 3580 , dSick: 57  },
	{date: "2020.06.11", sick: 3671 , dSick: 91  },
	{date: "2020.06.12", sick: 3766 , dSick: 95  },
	{date: "2020.06.13", sick: 3838 , dSick: 72  },
	{date: "2020.06.14", sick: 3904 , dSick: 66  },
	{date: "2020.06.15", sick: 3957 , dSick: 53  },
	{date: "2020.06.16", sick: 3985 , dSick: 28  },
	{date: "2020.06.17", sick: 4026 , dSick: 41  },
	{date: "2020.06.18", sick: 4084 , dSick: 58  },
	{date: "2020.06.19", sick: 4176 , dSick: 92  },
	{date: "2020.06.20", sick: 4252 , dSick: 76  },
	{date: "2020.06.21", sick: 4325 , dSick: 73  },
	{date: "2020.06.22", sick: 4368 , dSick: 43  },
	{date: "2020.06.23", sick: 4429 , dSick: 61  },
	{date: "2020.06.24", sick: 4528 , dSick: 99  },
	{date: "2020.06.25", sick: 4613 , dSick: 85  },
	{date: "2020.06.26", sick: 4726 , dSick: 113 },
	{date: "2020.06.27", sick: 4866 , dSick: 140 },
	{date: "2020.06.28", sick: 4935 , dSick: 69  },
	{date: "2020.06.29", sick: 4980 , dSick: 45  },
	{date: "2020.06.30", sick: 5037 , dSick: 57  },
	{date: "2020.07.01", sick: 5138 , dSick: 101 },
	{date: "2020.07.02", sick: 5242 , dSick: 104 },
	{date: "2020.07.03", sick: 5347 , dSick: 105 },
	{date: "2020.07.04", sick: 5465 , dSick: 118 },
	{date: "2020.07.05", sick: 5543 , dSick: 78  },
	{date: "2020.07.06", sick: 5602 , dSick: 59  },
	{date: "2020.07.07", sick: 5665 , dSick: 63  },
	{date: "2020.07.08", sick: 5779 , dSick: 114 },
	{date: "2020.07.09", sick: 5872 , dSick: 93  },
	{date: "2020.07.10", sick: 5990 , dSick: null},
	{date: "2020.07.11", sick: 6115 , dSick: null},
	{date: "2020.07.12", sick: 6182 , dSick: null},
	{date: "2020.07.13", sick: 6238 , dSick: null},
	{date: "2020.07.14", sick: 6350 , dSick: null},
	{date: "2020.07.15", sick: 6497 , dSick: null},
	{date: "2020.07.16", sick: 6613 , dSick: null},
	{date: "2020.07.17", sick: 6689 , dSick: null},
	{date: "2020.07.18", sick: 6797 , dSick: null},
	{date: "2020.07.19", sick: 6884 , dSick: null},
	{date: "2020.07.20", sick: 6961 , dSick: null},
	{date: "2020.07.21", sick: 7034 , dSick: null},
	{date: "2020.07.22", sick: 7166 , dSick: null},
	{date: "2020.07.23", sick: 7278 , dSick: null},
	{date: "2020.07.24", sick: 7396 , dSick: null},
	{date: "2020.07.25", sick: 7525 , dSick: null},
	{date: "2020.07.26", sick: 7620 , dSick: null},
	{date: "2020.07.27", sick: 7690 , dSick: null},
	{date: "2020.07.28", sick: 7800 , dSick: null},
	{date: "2020.07.29", sick: 7932 , dSick: null},
	{date: "2020.07.30", sick: 8131 , dSick: null},
	{date: "2020.07.31", sick: 8241 , dSick: null},
	{date: "2020.08.01", sick: 8342 , dSick: null},
	{date: "2020.08.02", sick: 8452 , dSick: null},
	{date: "2020.08.03", sick: 8554 , dSick: null},
	{date: "2020.08.04", sick: 8662 , dSick: null},
	{date: "2020.08.05", sick: 8812 , dSick: null},
	{date: "2020.08.06", sick: 8992 , dSick: null},
	{date: "2020.08.07", sick: 9178 , dSick: null},
	{date: "2020.08.08", sick: 9378 , dSick: null},
	{date: "2020.08.09", sick: 9498 , dSick: null},
	{date: "2020.08.10", sick: 9564 , dSick: null},
	{date: "2020.08.11", sick: 9687 , dSick: null},
	{date: "2020.08.12", sick: 9869 , dSick: null},
	{date: "2020.08.13", sick: 10002, dSick: null},
	{date: "2020.08.14", sick: 10160, dSick: null},
	{date: "2020.08.15", sick: 10392, dSick: null},
	{date: "2020.08.16", sick: 10538, dSick: null},
	{date: "2020.08.17", sick: 10642, dSick: null},
	{date: "2020.08.18", sick: 10730, dSick: null},
	{date: "2020.08.19", sick: 10945, dSick: null},
	{date: "2020.08.20", sick: 11172, dSick: null},
	{date: "2020.08.21", sick: 11328, dSick: null},
	{date: "2020.08.22", sick: 11507, dSick: null},
	{date: "2020.08.23", sick: 11814, dSick: null},
	{date: "2020.08.24", sick: 12023, dSick: null},
	{date: "2020.08.25", sick: 12153, dSick: null},
	{date: "2020.08.26", sick: 12248, dSick: null},
	{date: "2020.08.27", sick: 12468, dSick: null},
	{date: "2020.08.28", sick: 12719, dSick: null},
	{date: "2020.08.28", sick: 12984, dSick: null},
	{date: "2020.08.30", sick: 13093, dSick: null},
	{date: "2020.08.31", sick: 13370, dSick: null},
	{date: "2020.09.01", sick: 13546, dSick: null},
	{date: "2020.09.02", sick: 13878, dSick: null},
	{date: "2020.09.03", sick: 14158, dSick: null},
	{date: "2020.09.04", sick: 14477, dSick: null},
	{date: "2020.09.05", sick: 14792, dSick: null},
	{date: "2020.09.06", sick: 15032, dSick: null},
	{date: "2020.09.07", sick: 15276, dSick: null},
	{date: "2020.09.08", sick: 15511, dSick: null},
	{date: "2020.09.09", sick: 15821, dSick: null},
	{date: "2020.09.10", sick: 16119, dSick: null},
	{date: "2020.09.11", sick: 16523, dSick: null},
	{date: "2020.09.12", sick: 16951, dSick: null},
	{date: "2020.09.13", sick: 17261, dSick: null},
	{date: "2020.09.14", sick: 17429, dSick: null},
	{date: "2020.09.15", sick: 17714, dSick: null},
	{date: "2020.09.16", sick: 18070, dSick: null},
	{date: "2020.09.17", sick: 18449, dSick: null},
	{date: "2020.09.18", sick: 18740, dSick: null},
	{date: "2020.09.19", sick: 19140, dSick: null},
	{date: "2020.09.20", sick: 19483, dSick: null},
	{date: "2020.09.21", sick: 19758, dSick: null},
	{date: "2020.09.22", sick: 20028, dSick: null},
	{date: "2020.09.23", sick: 20335, dSick: null},
	{date: "2020.09.24", sick: 20665, dSick: null},
	{date: "2020.09.25", sick: 21045, dSick: null},
	{date: "2020.09.26", sick: 21492, dSick: null},
	{date: "2020.09.27", sick: 21815, dSick: null},
	{date: "2020.09.28", sick: 22143, dSick: null},
	{date: "2020.09.29", sick: 22559, dSick: null},
	{date: "2020.09.30", sick: 22778, dSick: null},
	{date: "2020.10.01", sick: 23155, dSick: null},
	{date: "2020.10.02", sick: 23602, dSick: null},
	{date: "2020.10.03", sick: 24043, dSick: null},
	{date: "2020.10.04", sick: 24450, dSick: null},
	{date: "2020.10.05", sick: 24736, dSick: null},
	{date: "2020.10.06", sick: 25091, dSick: null},
	{date: "2020.10.07", sick: 25474, dSick: null},
	{date: "2020.10.08", sick: 25896, dSick: null},
	{date: "2020.10.09", sick: 26463, dSick: null},
	{date: "2020.10.10", sick: 26995, dSick: null},
	{date: "2020.10.11", sick: 27497, dSick: null},
	{date: "2020.10.12", sick: 27693, dSick: null},
	{date: "2020.10.13", sick: 28090, dSick: null},
	{date: "2020.10.14", sick: 28512, dSick: null},
]
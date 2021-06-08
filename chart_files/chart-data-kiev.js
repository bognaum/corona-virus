const kievData = [
	{date: "2020.03.15", sick: null  },
	{date: "2020.03.16", sick: null  },
	{date: "2020.03.17", sick: null  },
	{date: "2020.03.18", sick: null  },
	{date: "2020.03.19", sick: null  },
	{date: "2020.03.20", sick: null  },
	{date: "2020.03.21", sick: null  },
	{date: "2020.03.22", sick: null  },
	{date: "2020.03.23", sick: null  },
	{date: "2020.03.24", sick: null  },
	{date: "2020.03.25", sick: null  },
	{date: "2020.03.26", sick: null  },
	{date: "2020.03.27", sick: null  },
	{date: "2020.03.28", sick: null  },
	{date: "2020.03.29", sick: null  },
	{date: "2020.03.30", sick: null  },
	{date: "2020.03.31", sick: null  },
	{date: "2020.04.01", sick: null  },
	{date: "2020.04.02", sick: 161   },
	{date: "2020.04.03", sick: 189   },
	{date: "2020.04.04", sick: 214   },
	{date: "2020.04.05", sick: 245   },
	{date: "2020.04.06", sick: 267   },
	{date: "2020.04.07", sick: 279   },
	{date: "2020.04.08", sick: 294   },
	{date: "2020.04.09", sick: 335   },
	{date: "2020.04.10", sick: 348   },
	{date: "2020.04.11", sick: 396   },
	{date: "2020.04.12", sick: 416   },
	{date: "2020.04.13", sick: 495   },
	{date: "2020.04.14", sick: 551   },
	{date: "2020.04.15", sick: 612   }, // 15
	{date: "2020.04.16", sick: 644   },
	{date: "2020.04.17", sick: 705   },
	{date: "2020.04.18", sick: 770   },
	{date: "2020.04.19", sick: 770   },
	{date: "2020.04.20", sick: 850   },
	{date: "2020.04.21", sick: 892   },
	{date: "2020.04.22", sick: 989   },
	{date: "2020.04.23", sick: 1059  },
	{date: "2020.04.24", sick: 1122  },
	{date: "2020.04.25", sick: 1159  },
	{date: "2020.04.26", sick: 1188  },
	{date: "2020.04.27", sick: 1220  },
	{date: "2020.04.28", sick: 1298  },
	{date: "2020.04.29", sick: 1341  },
	{date: "2020.04.30", sick: 1401  },
	{date: "2020.05.01", sick: 1453  },
	{date: "2020.05.02", sick: 1494  },
	{date: "2020.05.03", sick: 1511  },
	{date: "2020.05.04", sick: 1535  },
	{date: "2020.05.05", sick: 1583  },
	{date: "2020.05.06", sick: 1651  },
	{date: "2020.05.07", sick: 1675  },
	{date: "2020.05.08", sick: 1721  },
	{date: "2020.05.09", sick: 1771  },
	{date: "2020.05.10", sick: 1805  },
	{date: "2020.05.11", sick: 1871  },
	{date: "2020.05.12", sick: 1930  },
	{date: "2020.05.13", sick: 1960  }, // 13
	{date: "2020.05.14", sick: 2012  },
	{date: "2020.05.15", sick: 2068  },
	{date: "2020.05.16", sick: 2221  },
	{date: "2020.05.17", sick: 2280  },
	{date: "2020.05.18", sick: 2321  },
	{date: "2020.05.19", sick: 2359  },
	{date: "2020.05.20", sick: 2410  },
	{date: "2020.05.21", sick: 2475  },
	{date: "2020.05.22", sick: 2522  },
	{date: "2020.05.23", sick: 2569  },
	{date: "2020.05.24", sick: 2623  },
	{date: "2020.05.25", sick: 2652  },
	{date: "2020.05.26", sick: 2710  },
	{date: "2020.05.27", sick: 2739  },
	{date: "2020.05.28", sick: 2793  }, // 28
	{date: "2020.05.29", sick: 2849  },
	{date: "2020.05.30", sick: 2904  },
	{date: "2020.05.31", sick: 2985  },
	{date: "2020.06.01", sick: 3043  },
	{date: "2020.06.02", sick: 3071  },
	{date: "2020.06.03", sick: 3133  },
	{date: "2020.06.04", sick: 3210  },
	{date: "2020.06.05", sick: 3292  },
	{date: "2020.06.06", sick: 3375  },
	{date: "2020.06.07", sick: 3418  },
	{date: "2020.06.08", sick: 3490  },
	{date: "2020.06.09", sick: 3523  },
	{date: "2020.06.10", sick: 3580  },
	{date: "2020.06.11", sick: 3671  },
	{date: "2020.06.12", sick: 3766  },
	{date: "2020.06.13", sick: 3838  },
	{date: "2020.06.14", sick: 3904  },
	{date: "2020.06.15", sick: 3957  },
	{date: "2020.06.16", sick: 3985  },
	{date: "2020.06.17", sick: 4026  },
	{date: "2020.06.18", sick: 4084  },
	{date: "2020.06.19", sick: 4176  },
	{date: "2020.06.20", sick: 4252  },
	{date: "2020.06.21", sick: 4325  },
	{date: "2020.06.22", sick: 4368  },
	{date: "2020.06.23", sick: 4429  },
	{date: "2020.06.24", sick: 4528  },
	{date: "2020.06.25", sick: 4613  },
	{date: "2020.06.26", sick: 4726  },
	{date: "2020.06.27", sick: 4866  },
	{date: "2020.06.28", sick: 4935  },
	{date: "2020.06.29", sick: 4980  },
	{date: "2020.06.30", sick: 5037  },
	{date: "2020.07.01", sick: 5138  },
	{date: "2020.07.02", sick: 5242  },
	{date: "2020.07.03", sick: 5347  },
	{date: "2020.07.04", sick: 5465  },
	{date: "2020.07.05", sick: 5543  },
	{date: "2020.07.06", sick: 5602  },
	{date: "2020.07.07", sick: 5665  },
	{date: "2020.07.08", sick: 5779  },
	{date: "2020.07.09", sick: 5872  },
	{date: "2020.07.10", sick: 5990  },
	{date: "2020.07.11", sick: 6115  },
	{date: "2020.07.12", sick: 6182  },
	{date: "2020.07.13", sick: 6238  },
	{date: "2020.07.14", sick: 6350  },
	{date: "2020.07.15", sick: 6497  },
	{date: "2020.07.16", sick: 6613  },
	{date: "2020.07.17", sick: 6689  },
	{date: "2020.07.18", sick: 6797  },
	{date: "2020.07.19", sick: 6884  },
	{date: "2020.07.20", sick: 6961  },
	{date: "2020.07.21", sick: 7034  },
	{date: "2020.07.22", sick: 7166  },
	{date: "2020.07.23", sick: 7278  },
	{date: "2020.07.24", sick: 7396  },
	{date: "2020.07.25", sick: 7525  },
	{date: "2020.07.26", sick: 7620  },
	{date: "2020.07.27", sick: 7690  },
	{date: "2020.07.28", sick: 7800  },
	{date: "2020.07.29", sick: 7932  },
	{date: "2020.07.30", sick: 8131  },
	{date: "2020.07.31", sick: 8241  },
	{date: "2020.08.01", sick: 8342  },
	{date: "2020.08.02", sick: 8452  },
	{date: "2020.08.03", sick: 8554  },
	{date: "2020.08.04", sick: 8662  },
	{date: "2020.08.05", sick: 8812  },
	{date: "2020.08.06", sick: 8992  },
	{date: "2020.08.07", sick: 9178  },
	{date: "2020.08.08", sick: 9378  },
	{date: "2020.08.09", sick: 9498  },
	{date: "2020.08.10", sick: 9564  },
	{date: "2020.08.11", sick: 9687  },
	{date: "2020.08.12", sick: 9869  },
	{date: "2020.08.13", sick: 10002 },
	{date: "2020.08.14", sick: 10160 },
	{date: "2020.08.15", sick: 10392 },
	{date: "2020.08.16", sick: 10538 },
	{date: "2020.08.17", sick: 10642 },
	{date: "2020.08.18", sick: 10730 },
	{date: "2020.08.19", sick: 10945 },
	{date: "2020.08.20", sick: 11172 },
	{date: "2020.08.21", sick: 11328 },
	{date: "2020.08.22", sick: 11507 },
	{date: "2020.08.23", sick: 11814 },
	{date: "2020.08.24", sick: 12023 },
	{date: "2020.08.25", sick: 12153 },
	{date: "2020.08.26", sick: 12248 },
	{date: "2020.08.27", sick: 12468 },
	{date: "2020.08.28", sick: 12719 },
	{date: "2020.08.28", sick: 12984 },
	{date: "2020.08.30", sick: 13093 },
	{date: "2020.08.31", sick: 13370 },
	{date: "2020.09.01", sick: 13546 },
	{date: "2020.09.02", sick: 13878 },
	{date: "2020.09.03", sick: 14158 },
	{date: "2020.09.04", sick: 14477 },
	{date: "2020.09.05", sick: 14792 },
	{date: "2020.09.06", sick: 15032 },
	{date: "2020.09.07", sick: 15276 },
	{date: "2020.09.08", sick: 15511 },
	{date: "2020.09.09", sick: 15821 },
	{date: "2020.09.10", sick: 16119 },
	{date: "2020.09.11", sick: 16523 },
	{date: "2020.09.12", sick: 16951 },
	{date: "2020.09.13", sick: 17261 },
	{date: "2020.09.14", sick: 17429 },
	{date: "2020.09.15", sick: 17714 },
	{date: "2020.09.16", sick: 18070 },
	{date: "2020.09.17", sick: 18449 },
	{date: "2020.09.18", sick: 18740 },
	{date: "2020.09.19", sick: 19140 },
	{date: "2020.09.20", sick: 19483 },
	{date: "2020.09.21", sick: 19758 },
	{date: "2020.09.22", sick: 20028 },
	{date: "2020.09.23", sick: 20335 },
	{date: "2020.09.24", sick: 20665 },
	{date: "2020.09.25", sick: 21045 },
	{date: "2020.09.26", sick: 21492 },
	{date: "2020.09.27", sick: 21815 },
	{date: "2020.09.28", sick: 22143 },
	{date: "2020.09.29", sick: 22559 },
	{date: "2020.09.30", sick: 22778 },
	{date: "2020.10.01", sick: 23155 },
	{date: "2020.10.02", sick: 23602 },
	{date: "2020.10.03", sick: 24043 },
	{date: "2020.10.04", sick: 24450 },
	{date: "2020.10.05", sick: 24736 },
	{date: "2020.10.06", sick: 25091 },
	{date: "2020.10.07", sick: 25474 },
	{date: "2020.10.08", sick: 25896 },
	{date: "2020.10.09", sick: 26463 },
	{date: "2020.10.10", sick: 26995 },
	{date: "2020.10.11", sick: 27497 },
	{date: "2020.10.12", sick: 27693 },
	{date: "2020.10.13", sick: 28090 },
	{date: "2020.10.14", sick: 28512 },
	{date: "2020.10.15", sick: 28957 },
	{date: "2020.10.16", sick: 29412 },
	{date: "2020.10.17", sick: 30010 },
	{date: "2020.10.18", sick: 30463 },
	{date: "2020.10.19", sick: 30848 },
	{date: "2020.10.20", sick: 31310 },
	{date: "2020.10.21", sick: 31869 },
	{date: "2020.10.22", sick: 32500 },
	{date: "2020.10.23", sick: 33135 },
	{date: "2020.10.24", sick: 33695 },
	{date: "2020.10.25", sick: 34054 },
	{date: "2020.10.26", sick: 34362 },
	{date: "2020.10.27", sick: 34887 },
	{date: "2020.10.28", sick: 35450 },
	{date: "2020.10.29", sick: 36027 },
	{date: "2020.10.30", sick: 36768 },
	{date: "2020.10.31", sick: 37549 },
	{date: "2020.11.01", sick: 38238 },
	{date: "2020.11.02", sick: 38745 },
	{date: "2020.11.03", sick: 39534 },
	{date: "2020.11.04", sick: 40390 },
	{date: "2020.11.05", sick: 41373 },
	{date: "2020.11.06", sick: 42375 },
	{date: "2020.11.07", sick: 43229 },
	{date: "2020.11.08", sick: 44172 },
	{date: "2020.11.09", sick: 44920 },
	{date: "2020.11.10", sick: 45667 },
	{date: "2020.11.11", sick: 46632 },
	{date: "2020.11.12", sick: 47563 },
	{date: "2020.11.13", sick: 48646 },
	{date: "2020.11.14", sick: 49699 },
	{date: "2020.11.15", sick: 50620 },
	{date: "2020.11.16", sick: 51499 },
	{date: "2020.11.17", sick: 52642 },
	{date: "2020.11.18", sick: 53855 },
	{date: "2020.11.19", sick: 55203 },
	{date: "2020.11.20", sick: 56594 },
	{date: "2020.11.21", sick: 57807 },
	{date: "2020.11.22", sick: 59006 },
	{date: "2020.11.23", sick: 60218 },
	{date: "2020.11.24", sick: 61640 },
	{date: "2020.11.25", sick: 62620 },
	{date: "2020.11.26", sick: 64019 },
	{date: "2020.11.27", sick: 65539 },
	{date: "2020.11.28", sick: 67278 },
	{date: "2020.11.29", sick: 69018 },
	{date: "2020.11.30", sick: 70478 },
	{date: "2020.12.01", sick: 72277 },
	{date: "2020.12.02", sick: 74012 },
	{date: "2020.12.03", sick: 75376 },
	{date: "2020.12.04", sick: 76750 },
	{date: "2020.12.05", sick: 78291 },
	{date: "2020.12.06", sick: 79809 },
	{date: "2020.12.07", sick: 81335 },
	{date: "2020.12.08", sick: 82810 },
	{date: "2020.12.09", sick: 84538 },
	{date: "2020.12.10", sick: 86437 },
	{date: "2020.12.11", sick: 88317 },
	{date: "2020.12.12", sick: 90013 },
	{date: "2020.12.13", sick: 91138 },
	{date: "2020.12.14", sick: 91743 },
	{date: "2020.12.15", sick: 93302 },
	{date: "2020.12.16", sick: 95160 },
	{date: "2020.12.17", sick: 96672 },
	{date: "2020.12.18", sick: 98330 },
	{date: "2020.12.19", sick: 99694 },
	{date: "2020.12.20", sick: 100450},
	{date: "2020.12.21", sick: 101123},
	{date: "2020.12.22", sick: 102282},
	{date: "2020.12.23", sick: 103663},
	{date: "2020.12.24", sick: 105040},
	{date: "2020.12.25", sick: 106078},
	{date: "2020.12.26", sick: 106486},
	{date: "2020.12.27", sick: 107204},
	{date: "2020.12.28", sick: 108055},
	{date: "2020.12.29", sick: 109008},
	{date: "2020.12.30", sick: 110139},
	{date: "2020.12.31", sick: 111471},
	{date: "2021.01.01", sick: 112356}, // Данные вычислены косвенным путём.
	{date: "2021.01.02", sick: 112649},
	{date: "2021.01.03", sick: 113019},
	{date: "2021.01.04", sick: 113523},
	{date: "2021.01.05", sick: 114369},
	{date: "2021.01.06", sick: 115300},
	{date: "2021.01.07", sick: 116031},
	{date: "2021.01.08", sick: 116469},
	{date: "2021.01.09", sick: 116813},
	{date: "2021.01.10", sick: 117217},
	{date: "2021.01.11", sick: 117588},
	{date: "2021.01.12", sick: 118486},
	{date: "2021.01.13", sick: 119392},
	{date: "2021.01.14", sick: 120186},
	{date: "2021.01.15", sick: 121082},
	{date: "2021.01.16", sick: 121903},
	{date: "2021.01.17", sick: 122696},
	{date: "2021.01.18", sick: 122997},
	{date: "2021.01.19", sick: 123634},
	{date: "2021.01.20", sick: 124240},
	{date: "2021.01.21", sick: 124835},
	{date: "2021.01.22", sick: 125342},
	{date: "2021.01.23", sick: 125878},
	{date: "2021.01.24", sick: 126118},
	{date: "2021.01.25", sick: 126264},
	{date: "2021.01.26", sick: 126639},
	{date: "2021.01.27", sick: 127076},
	{date: "2021.01.28", sick: 127472},
	{date: "2021.01.29", sick: 127833},
	{date: "2021.01.30", sick: 128174},
	{date: "2021.01.31", sick: 128389},
	{date: "2021.02.01", sick: 128549},
	{date: "2021.02.02", sick: 128834},
	{date: "2021.02.03", sick: 129164},
	{date: "2021.02.04", sick: 129506},
	{date: "2021.02.05", sick: 129827},
	{date: "2021.02.06", sick: 130039},
	{date: "2021.02.07", sick: 130236},
	{date: "2021.02.08", sick: 130324},
	{date: "2021.02.09", sick: 130567},
	{date: "2021.02.10", sick: 130864},
	{date: "2021.02.11", sick: 131199},
	{date: "2021.02.12", sick: 131547},
	{date: "2021.02.13", sick: 131867},
	{date: "2021.02.14", sick: 131949},
	{date: "2021.02.15", sick: 132160},
	{date: "2021.02.16", sick: 132468},
	{date: "2021.02.17", sick: 132834},
	{date: "2021.02.18", sick: 133347},
	{date: "2021.02.19", sick: 133891},
	{date: "2021.02.20", sick: 134306},
	{date: "2021.02.21", sick: 134506},
	{date: "2021.02.22", sick: 134675},
	{date: "2021.02.23", sick: 135129},
	{date: "2021.02.24", sick: 135676},
	{date: "2021.02.25", sick: 136328},
	{date: "2021.02.26", sick: 137076},
	{date: "2021.02.27", sick: 137656},
	{date: "2021.02.28", sick: 137864},
	{date: "2021.03.01", sick: 138020},
	{date: "2021.03.02", sick: 138483},
	{date: "2021.03.03", sick: 139138},
	{date: "2021.03.04", sick: 140006},
	{date: "2021.03.05", sick: 140916},
	{date: "2021.03.06", sick: 141598},
	{date: "2021.03.07", sick: 142030},
	{date: "2021.03.08", sick: 142316},
	{date: "2021.03.09", sick: 142517},
	{date: "2021.03.10", sick: 143161},
	{date: "2021.03.11", sick: 144014},
	{date: "2021.03.12", sick: 144910},
	{date: "2021.03.13", sick: 145959},
	{date: "2021.03.14", sick: 146398},
	{date: "2021.03.15", sick: 146711},
	{date: "2021.03.16", sick: 147710},
	{date: "2021.03.17", sick: 148831},
	{date: "2021.03.18", sick: 149923},
	{date: "2021.03.19", sick: 151133},
	{date: "2021.03.20", sick: 152203},
	{date: "2021.03.21", sick: 152637},
	{date: "2021.03.22", sick: 152986},
	{date: "2021.03.23", sick: 154036},
	{date: "2021.03.24", sick: 155336},
	{date: "2021.03.25", sick: 156603},
	{date: "2021.03.26", sick: 157767},
	{date: "2021.03.27", sick: 158993},
	{date: "2021.03.28", sick: 159367},
	{date: "2021.03.29", sick: 159769},
	{date: "2021.03.30", sick: 161191},
	{date: "2021.03.31", sick: 162291},
	{date: "2021.04.01", sick: 163441},
	{date: "2021.04.02", sick: 164605},
	{date: "2021.04.03", sick: 166658},
	{date: "2021.04.04", sick: 167210},
	{date: "2021.04.05", sick: 167668},
	{date: "2021.04.06", sick: 169100},
	{date: "2021.04.07", sick: 170517},
	{date: "2021.04.08", sick: 172403},
	{date: "2021.04.09", sick: 174267},
	{date: "2021.04.10", sick: 175872},
	{date: "2021.04.11", sick: 176569},
	{date: "2021.04.12", sick: 177106},
	{date: "2021.04.13", sick: 178609},
	{date: "2021.04.14", sick: 180066},
	{date: "2021.04.15", sick: 181691},
	{date: "2021.04.16", sick: 183300},
	{date: "2021.04.17", sick: 184412},
	{date: "2021.04.18", sick: 184892},
	{date: "2021.04.19", sick: 185339},
	{date: "2021.04.20", sick: 186231},
	{date: "2021.04.21", sick: 187196},
	{date: "2021.04.22", sick: 188869},
	{date: "2021.04.23", sick: 190138},
	{date: "2021.04.24", sick: 191165},
	{date: "2021.04.25", sick: 191495},
	{date: "2021.04.26", sick: 191751},
	{date: "2021.04.27", sick: 192620},
	{date: "2021.04.28", sick: 193690},
	{date: "2021.04.29", sick: 194630},
	{date: "2021.04.30", sick: 195498},
	{date: "2021.05.01", sick: 196169},
	{date: "2021.05.02", sick: 196346},
	{date: "2021.05.03", sick: 196441},
	{date: "2021.05.04", sick: 196592},
	{date: "2021.05.05", sick: 196735},
	{date: "2021.05.06", sick: 197357},
	{date: "2021.05.07", sick: 197968},
	{date: "2021.05.08", sick: 198721},
	{date: "2021.05.09", sick: 198976},
	{date: "2021.05.10", sick: 199077},
	{date: "2021.05.11", sick: 199175},
	{date: "2021.05.12", sick: 199802},
	{date: "2021.05.13", sick: 200528},
	{date: "2021.05.14", sick: 201209},
	{date: "2021.05.15", sick: 201753},
	{date: "2021.05.16", sick: 201890},
	{date: "2021.05.17", sick: 201992},
	{date: "2021.05.18", sick: 202417},
	{date: "2021.05.19", sick: 202894},
	{date: "2021.05.20", sick: 203327},
	{date: "2021.05.21", sick: 203780},
	{date: "2021.05.22", sick: 204078},
	{date: "2021.05.23", sick: 204151},
	{date: "2021.05.24", sick: 204276},
	{date: "2021.05.25", sick: 204678},
	{date: "2021.05.26", sick: 205063},
	{date: "2021.05.27", sick: 205517},
	{date: "2021.05.28", sick: 205901},
	{date: "2021.05.29", sick: 206278},
	{date: "2021.05.30", sick: 206374},
	{date: "2021.05.31", sick: 206437},
	{date: "2021.06.01", sick: 206871},
	{date: "2021.06.02", sick: 207344},
	{date: "2021.06.03", sick: 207873},
	{date: "2021.06.04", sick: 208439},
	{date: "2021.06.05", sick: 208936},
	{date: "2021.06.06", sick: 209038},
	{date: "2021.06.07", sick: 209125},
	{date: "2021.06.08", sick: 209825},
]
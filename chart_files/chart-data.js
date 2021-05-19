var data = [
	{date: "2020.03.15", sick: 3      , cured: 0      , die: 0   ,                 },
	{date: "2020.03.16", sick: 5      , cured: 0      , die: 0   ,                 },
	{date: "2020.03.17", sick: 7      , cured: 0      , die: 0   ,                 },
	{date: "2020.03.18", sick: 14     , cured: 0      , die: 2   ,                 },
	{date: "2020.03.19", sick: 16     , cured: 0      , die: 2   ,                 },
	{date: "2020.03.20", sick: 26     , cured: 0      , die: 3   ,                 },
	{date: "2020.03.21", sick: 41     , cured: 1      , die: 3   ,                 },
	{date: "2020.03.22", sick: 47     , cured: 1      , die: 3   ,                 },
	{date: "2020.03.23", sick: 73     , cured: 1      , die: 3   ,                 },
	{date: "2020.03.24", sick: 84     , cured: 1      , die: 3   ,                 },
	{date: "2020.03.25", sick: 113    , cured: 1      , die: 4   ,                 },
	{date: "2020.03.26", sick: 156    , cured: 1      , die: 5   ,                 },
	{date: "2020.03.27", sick: 218    , cured: 4      , die: 5   ,                 },
	{date: "2020.03.28", sick: 311    , cured: 5      , die: 8   ,                 },
	{date: "2020.03.29", sick: 418    , cured: 5      , die: 9   ,                 },
	{date: "2020.03.30", sick: 480    , cured: 6      , die: 11  ,                 },
	{date: "2020.03.31", sick: 549    , cured: 8      , die: 13  ,                 },
	{date: "2020.04.01", sick: 669    , cured: 10     , die: 17  ,                 },
	{date: "2020.04.02", sick: 804    , cured: 13     , die: 20  ,                 },
	{date: "2020.04.03", sick: 942    , cured: 19     , die: 23  ,                 },
	{date: "2020.04.04", sick: 1096   , cured: 23     , die: 28  ,                 },
	{date: "2020.04.05", sick: 1251   , cured: 25     , die: 32  ,                 },
	{date: "2020.04.06", sick: 1319   , cured: 28     , die: 38  ,                 },
	{date: "2020.04.07", sick: 1462   , cured: 28     , die: 45  ,                 },
	{date: "2020.04.08", sick: 1668   , cured: 35     , die: 52  ,                 },
	{date: "2020.04.09", sick: 1892   , cured: 45     , die: 57  ,  tested: 20608  },
	{date: "2020.04.10", sick: 2203   , cured: 61     , die: 69  ,  tested: 23522  },
	{date: "2020.04.11", sick: 2511   , cured: 79     , die: 73  ,  tested: 26577  },
	{date: "2020.04.12", sick: 2777   , cured: 89     , die: 83  ,  tested: 30314  },
	{date: "2020.04.13", sick: 3102   , cured: 97     , die: 93  ,  tested: 32496  },
	{date: "2020.04.14", sick: 3372   , cured: 119    , die: 98  ,  tested: 35153  },
	{date: "2020.04.15", sick: 3764   , cured: 143    , die: 108 ,  tested: 39084  },
	{date: "2020.04.16", sick: 4161   , cured: 186    , die: 116 ,  tested: 42823  },
	{date: "2020.04.17", sick: 4662   , cured: 246    , die: 125 ,  tested: 47096  },
	{date: "2020.04.18", sick: 5106   , cured: 275    , die: 133 ,  tested: 52534  },
	{date: "2020.04.19", sick: 5449   , cured: 347    , die: 141 ,  tested: 57111  },
	{date: "2020.04.20", sick: 5710   , cured: 359    , die: 151 ,  tested: 58093  },
	{date: "2020.04.21", sick: 6125   , cured: 367    , die: 161 ,  tested: 61997  },
	{date: "2020.04.22", sick: 6592   , cured: 424    , die: 174 ,  tested: 67520  }, // cured: 467
	{date: "2020.04.23", sick: 7170   , cured: 504    , die: 187 ,  tested: 72296  },
	{date: "2020.04.24", sick: 7647   , cured: 601    , die: 193 ,  tested: 77752  },
	{date: "2020.04.25", sick: 8125   , cured: 782    , die: 201 ,  tested: 83577  },
	{date: "2020.04.26", sick: 8617   , cured: 840    , die: 209 ,  tested: 89373  },
	{date: "2020.04.27", sick: 9009   , cured: 864    , die: 220 ,  tested: 93519  },
	{date: "2020.04.28", sick: 9410   , cured: 992    , die: 239 ,  tested: 98719  },
	{date: "2020.04.29", sick: 9866   , cured: 1103   , die: 250 ,  tested: 104544 },
	{date: "2020.04.30", sick: 10406  , cured: 1238   , die: 261 ,  tested: 111859 },
	{date: "2020.05.01", sick: 10861  , cured: 1413   , die: 272 ,  tested: 118545 },
	{date: "2020.05.02", sick: 11411  , cured: 1498   , die: 279 ,  tested: 122752 },
	{date: "2020.05.03", sick: 11913  , cured: 1547   , die: 288 ,  tested: 129723 }, // cured: 1548
	{date: "2020.05.04", sick: 12331  , cured: 1619   , die: 303 ,  tested: 134592 }, 
	{date: "2020.05.05", sick: 12697  , cured: 1875   , die: 316 ,  tested: 139759 }, 
	{date: "2020.05.06", sick: 13184  , cured: 2097   , die: 327 ,  tested: 144283 },
	{date: "2020.05.07", sick: 13691  , cured: 2396   , die: 340 ,  tested: 151569 },
	{date: "2020.05.08", sick: 14195  , cured: 2706   , die: 361 ,  tested: 159155 },
	{date: "2020.05.09", sick: 14710  , cured: 2909   , die: 376 ,  tested: 167107 },
	{date: "2020.05.10", sick: 15232  , cured: 3060   , die: 391 ,  tested: 176403 },
	{date: "2020.05.11", sick: 15648  , cured: 3288   , die: 408 ,  tested: 181552 },
	{date: "2020.05.12", sick: 16023  , cured: 3373   , die: 425 ,  tested: 187307 },
	{date: "2020.05.13", sick: 16425  , cured: 3716   , die: 439 ,  tested: 192247 },
	{date: "2020.05.14", sick: 16847  , cured: 4143   , die: 456 ,  tested: 202495 },
	{date: "2020.05.15", sick: 17330  , cured: 4473   , die: 476 ,  tested: 211614 },
	{date: "2020.05.16", sick: 17858  , cured: 4906   , die: 497 ,  tested: 220638 },
	{date: "2020.05.17", sick: 18291  , cured: 5116   , die: 514 ,  tested: 227801 },
	{date: "2020.05.18", sick: 18616  , cured: 5276   , die: 535 ,  tested: 232899 },
	{date: "2020.05.19", sick: 18876  , cured: 5632   , die: 548 ,  tested: 239961 },
	{date: "2020.05.20", sick: 19230  , cured: 5955   , die: 564 ,  tested: 248529 },
	{date: "2020.05.21", sick: 19706  , cured: 6227   , die: 579 ,  tested: 257890 },
	{date: "2020.05.22", sick: 20148  , cured: 6585   , die: 588 ,  tested: 267185 },
	{date: "2020.05.23", sick: 20580  , cured: 6929   , die: 605 ,  tested: 277712 },
	{date: "2020.05.24", sick: 20986  , cured: 7108   , die: 617 ,  tested: 285626 },
	{date: "2020.05.25", sick: 21245  , cured: 7234   , die: 623 ,  tested: 291868 },
	{date: "2020.05.26", sick: 21584  , cured: 7575   , die: 644 ,  tested: 301736 },
	{date: "2020.05.27", sick: 21905  , cured: 7995   , die: 658 ,  tested: 312532 },
	{date: "2020.05.28", sick: 22382  , cured: 8439   , die: 669 ,  tested: 322746 },
	{date: "2020.05.29", sick: 22811  , cured: 8934   , die: 679 ,  tested: 337318 },
	{date: "2020.05.30", sick: 23204  , cured: 9311   , die: 696 ,  tested: 348279 },
	{date: "2020.05.31", sick: 23672  , cured: 9538   , die: 708 ,  tested: 356565 },
	{date: "2020.06.01", sick: 24012  , cured: 9690   , die: 718 ,  tested: 363187 },
	{date: "2020.06.02", sick: 24340  , cured: 10078  , die: 727 ,  tested: 371668 },
	{date: "2020.06.03", sick: 24823  , cured: 10440  , die: 735 ,  tested: 381552 },
	{date: "2020.06.04", sick: 25411  , cured: 11042  , die: 747 ,  tested: 392316 },
	{date: "2020.06.05", sick: 25964  , cured: 11372  , die: 762 ,  tested: 403551 },
	{date: "2020.06.06", sick: 26514  , cured: 11812  , die: 777 ,  tested: 414542 },
	{date: "2020.06.07", sick: 26999  , cured: 12054  , die: 788 ,  tested: 424046 },
	{date: "2020.06.08", sick: 27462  , cured: 12195  , die: 797 ,  tested: 431085 },
	{date: "2020.06.09", sick: 27856  , cured: 12412  , die: 810 ,  tested: 437444 },
	{date: "2020.06.10", sick: 28381  , cured: 12769  , die: 833 ,  tested: 445940 },
	{date: "2020.06.11", sick: 29070  , cured: 13141  , die: 854 ,  tested: 456509 },
	{date: "2020.06.12", sick: 29753  , cured: 13567  , die: 870 ,  tested: 468172 },
	{date: "2020.06.13", sick: 30506  , cured: 13976  , die: 880 ,  tested: 479111 },
	{date: "2020.06.14", sick: 31154  , cured: 14082  , die: 889 ,  tested: 489334 },
	{date: "2020.06.15", sick: 31810  , cured: 14253  , die: 901 ,  tested: 497284 },
	{date: "2020.06.16", sick: 32476  , cured: 14528  , die: 912 ,  tested: 507251 },
	{date: "2020.06.17", sick: 33234  , cured: 14943  , die: 943 ,  tested: 517995 },
	{date: "2020.06.18", sick: 34063  , cured: 15447  , die: 966 ,  tested: 530442 },
	{date: "2020.06.19", sick: 34984  , cured: 16033  , die: 985 ,  tested: 542247 },
	{date: "2020.06.20", sick: 35825  , cured: 16406  , die: 994 ,  tested: 553737 },
	{date: "2020.06.21", sick: 36560  , cured: 16509  , die: 1002,  tested: 563194 },
	{date: "2020.06.22", sick: 37241  , cured: 16642  , die: 1012,  tested: 569589 },
	{date: "2020.06.23", sick: 38074  , cured: 16956  , die: 1035,  tested: 580814 },
	{date: "2020.06.24", sick: 39014  , cured: 17409  , die: 1051,  tested: 594602 },
	{date: "2020.06.25", sick: 40008  , cured: 17758  , die: 1067,  tested: 606766 },
	{date: "2020.06.26", sick: 41117  , cured: 18299  , die: 1086,  tested: 620624 },
	{date: "2020.06.27", sick: 42065  , cured: 18701  , die: 1110,  tested: 631966 },
	{date: "2020.06.28", sick: 42982  , cured: 18934  , die: 1129,  tested: 641911 },
	{date: "2020.06.29", sick: 43628  , cured: 19027  , die: 1147,  tested: 649150 },
	{date: "2020.06.30", sick: 44334  , cured: 19115  , die: 1159,  tested: 655750 },
	{date: "2020.07.01", sick: 44998  , cured: 19548  , die: 1173,  tested: 666147 },
	{date: "2020.07.02", sick: 45887  , cured: 20053  , die: 1185,  tested: 677254 },
	{date: "2020.07.03", sick: 46763  , cured: 20558  , die: 1212,  tested: 690953 },
	{date: "2020.07.04", sick: 47677  , cured: 21155  , die: 1227,  tested: 705836 },
	{date: "2020.07.05", sick: 48500  , cured: 21376  , die: 1249,  tested: 715770 },
	{date: "2020.07.06", sick: 49043  , cured: 21703  , die: 1262,  tested: 722513 },
	{date: "2020.07.07", sick: 49607  , cured: 22193  , die: 1283,  tested: 731858 },
	{date: "2020.07.08", sick: 50414  , cured: 23119  , die: 1306,  tested: 745313 },
	{date: "2020.07.09", sick: 51224  , cured: 23784  , die: 1327,  tested: 760247 },
	{date: "2020.07.10", sick: 52043  , cured: 24800  , die: 1345,  tested: 773831 },
	{date: "2020.07.11", sick: 52843  , cured: 25661  , die: 1372,  tested: 786402 },
	{date: "2020.07.12", sick: 53521  , cured: 26118  , die: 1383,  tested: 796680 },
	{date: "2020.07.13", sick: 54133  , cured: 26503  , die: 1398,  tested: 803657 },
	{date: "2020.07.14", sick: 54771  , cured: 27154  , die: 1412,  tested: 813396 },
	{date: "2020.07.15", sick: 55607  , cured: 28131  , die: 1427,  tested: 827157 },
	{date: "2020.07.16", sick: 56455  , cured: 28931  , die: 1445,  tested: 840332 },
	{date: "2020.07.17", sick: 57264  , cured: 29769  , die: 1456,  tested: 854064 },
	{date: "2020.07.18", sick: 58111  , cured: 30525  , die: 1477,  tested: 864596 },
	{date: "2020.07.19", sick: 58842  , cured: 30879  , die: 1485,  tested: 877262 },
	{date: "2020.07.20", sick: 59493  , cured: 31439  , die: 1498,  tested: 881907 },
	{date: "2020.07.21", sick: 60166  , cured: 32199  , die: 1518,  tested: 894393 },
	{date: "2020.07.22", sick: 60995  , cured: 33172  , die: 1534,  tested: 907360 },
	{date: "2020.07.23", sick: 61851  , cured: 34000  , die: 1551,  tested: 921858 },
	{date: "2020.07.24", sick: 62823  , cured: 34886  , die: 1571,  tested: 937006 },
	{date: "2020.07.25", sick: 63929  , cured: 35497  , die: 1590,  tested: 951082 },
	{date: "2020.07.26", sick: 64849  , cured: 35807  , die: 1605,  tested: 963641 },
	{date: "2020.07.27", sick: 65656  , cured: 36122  , die: 1616,  tested: 970705 },
	{date: "2020.07.28", sick: 66575  , cured: 36744  , die: 1629,  tested: 983360 },
	{date: "2020.07.29", sick: 67597  , cured: 37394  , die: 1650,  tested: 998299 },
	{date: "2020.07.30", sick: 68794  , cured: 38154  , die: 1673,  tested: 1013793},
	{date: "2020.07.31", sick: 69884  , cured: 38752  , die: 1693,  tested: 1029220},
	{date: "2020.08.01", sick: 71056  , cured: 39308  , die: 1709,  tested: 1046080},
	{date: "2020.08.02", sick: 72168  , cured: 39543  , die: 1725,  tested: 1058483},
	{date: "2020.08.03", sick: 73158  , cured: 39876  , die: 1738,  tested: 1067006},
	{date: "2020.08.04", sick: 74219  , cured: 40613  , die: 1764,  tested: 1081146},
	{date: "2020.08.05", sick: 75490  , cured: 41527  , die: 1788,  tested: 1098665},
	{date: "2020.08.06", sick: 76808  , cured: 42524  , die: 1819,  tested: 1116641},
	{date: "2020.08.07", sick: 78261  , cured: 43055  , die: 1852,  tested: 1135051},
	{date: "2020.08.08", sick: 79750  , cured: 43655  , die: 1879,  tested: 1154378},
	{date: "2020.08.09", sick: 80949  , cured: 43972  , die: 1897,  tested: 1169351},
	{date: "2020.08.10", sick: 81957  , cured: 44359  , die: 1922,  tested: 1179434},
	{date: "2020.08.11", sick: 83115  , cured: 44934  , die: 1951,  tested: 1195561},
	{date: "2020.08.12", sick: 84548  , cured: 45686  , die: 1970,  tested: 1214941},
	{date: "2020.08.13", sick: 86140  , cured: 46216  , die: 1992,  tested: 1233925},
	{date: "2020.08.14", sick: 87872  , cured: 46797  , die: 2011,  tested: 1252842},
	{date: "2020.08.15", sick: 89719  , cured: 47430  , die: 2044,  tested: 1273821},
	{date: "2020.08.16", sick: 91356  , cured: 47822  , die: 2070,  tested: 1289589},
	{date: "2020.08.17", sick: 92820  , cured: 48164  , die: 2089,  tested: 1300289},
	{date: "2020.08.18", sick: 94436  , cured: 48925  , die: 2116,  tested: 1315409},
	{date: "2020.08.19", sick: 96403  , cured: 49737  , die: 2144,  tested: 1335000},
	{date: "2020.08.20", sick: 98537  , cured: 50441  , die: 2184,  tested: 1356698},
	{date: "2020.08.21", sick: 100643 , cured: 51078  , die: 2207,  tested: 1378519},
	{date: "2020.08.22", sick: 102971 , cured: 51735  , die: 2244,  tested: 1400726},
	{date: "2020.08.23", sick: 104958 , cured: 52235  , die: 2271,  tested: 1416001},
	{date: "2020.08.24", sick: 106757 , cured: 52524  , die: 2293,  tested: 1425351},
	{date: "2020.08.25", sick: 108415 , cured: 52870  , die: 2318,  tested: 1436206},
	{date: "2020.08.26", sick: 110085 , cured: 53454  , die: 2354,  tested: 1452006},
	{date: "2020.08.27", sick: 112059 , cured: 54217  , die: 2403,  tested: 1472736},
	{date: "2020.08.28", sick: 114497 , cured: 55083  , die: 2451,  tested: 1494243},
	{date: "2020.08.29", sick: 116978 , cured: 56138  , die: 2492,  tested: 1516712},
	{date: "2020.08.30", sick: 119074 , cured: 56734  , die: 2527,  tested: 1536171},
	{date: "2020.08.31", sick: 121215 , cured: 57114  , die: 2557,  tested: 1550280},
	{date: "2020.09.01", sick: 123303 , cured: 57802  , die: 2605,  tested: 1573176},
	{date: "2020.09.02", sick: 125798 , cured: 58817  , die: 2656,  tested: 1597707},
	{date: "2020.09.03", sick: 128228 , cured: 59676  , die: 2710,  tested: 1621697},
	{date: "2020.09.04", sick: 130951 , cured: 60613  , die: 2761,  tested: 1648087},
	{date: "2020.09.05", sick: 133787 , cured: 61649  , die: 2811,  tested: 1673316},
	{date: "2020.09.06", sick: 135894 , cured: 62227  , die: 2846,  tested: 1693793},
	{date: "2020.09.07", sick: 138068 , cured: 62606  , die: 2877,  tested: 1709017},
	{date: "2020.09.08", sick: 140479 , cured: 63546  , die: 2934,  tested: 1731877},
	{date: "2020.09.09", sick: 143030 , cured: 64703  , die: 2979,  tested: 1751931},
	{date: "2020.09.10", sick: 145612 , cured: 65877  , die: 3023,  tested: 1778483},
	{date: "2020.09.11", sick: 148756 , cured: 67005  , die: 3076,  tested: 1806428},
	{date: "2020.09.12", sick: 151859 , cured: 68346  , die: 3148,  tested: 1834165},
	{date: "2020.09.13", sick: 154335 , cured: 68893  , die: 3178,  tested: 1856467},
	{date: "2020.09.14", sick: 156797 , cured: 69543  , die: 3211,  tested: 1870790},
	{date: "2020.09.15", sick: 159702 , cured: 70810  , die: 3264,  tested: 1897688},
	{date: "2020.09.16", sick: 162660 , cured: 72324  , die: 3340,  tested: 1925482},
	{date: "2020.09.17", sick: 166244 , cured: 73913  , die: 3400,  tested: 1955211},
	{date: "2020.09.18", sick: 169472 , cured: 75486  , die: 3468,  tested: 1985802},
	{date: "2020.09.19", sick: 172712 , cured: 76754  , die: 3516,  tested: 2014923},
	{date: "2020.09.20", sick: 175678 , cured: 77512  , die: 3557,  tested: 2038850},
	{date: "2020.09.21", sick: 178353 , cured: 78184  , die: 3583,  tested: 2058638},
	{date: "2020.09.22", sick: 181237 , cured: 79901  , die: 3642,  tested: 2079482},
	{date: "2020.09.23", sick: 184734 , cured: 81670  , die: 3705,  tested: 2102377},
	{date: "2020.09.24", sick: 188106 , cured: 83458  , die: 3757,  tested: 2129156},
	{date: "2020.09.25", sick: 191671 , cured: 85133  , die: 3827,  tested: 2156653},
	{date: "2020.09.26", sick: 195504 , cured: 86873  , die: 3903,  tested: 2189926},
	{date: "2020.09.27", sick: 198634 , cured: 87882  , die: 3959,  tested: 2209975},
	{date: "2020.09.28", sick: 201305 , cured: 88453  , die: 3996,  tested: 2226508},
	{date: "2020.09.29", sick: 204932 , cured: 90250  , die: 4065,  tested: 2250676},
	{date: "2020.09.30", sick: 208959 , cured: 92360  , die: 4129,  tested: 2278248},
	{date: "2020.10.01", sick: 213028 , cured: 94398  , die: 4193,  tested: 2308415},
	{date: "2020.10.02", sick: 217661 , cured: 96591  , die: 4261,  tested: 2337942},
	{date: "2020.10.03", sick: 222322 , cured: 98737  , die: 4353,  tested: 2362857},
	{date: "2020.10.04", sick: 226462 , cured: 100107 , die: 4397,  tested: 2382259},
	{date: "2020.10.05", sick: 230236 , cured: 101252 , die: 4430,  tested: 2397905},
	{date: "2020.10.06", sick: 234584 , cured: 103401 , die: 4520,  tested: 2423031},
	{date: "2020.10.07", sick: 239337 , cured: 105970 , die: 4597,  tested: 2455407},
	{date: "2020.10.08", sick: 244734 , cured: 108233 , die: 4690,  tested: 2489702},
	{date: "2020.10.09", sick: 250538 , cured: 110650 , die: 4779,  tested: 2522360},
	{date: "2020.10.10", sick: 256266 , cured: 112570 , die: 4887,  tested: 2555887},
	{date: "2020.10.11", sick: 261034 , cured: 113507 , die: 4972,  tested: 2582768},
	{date: "2020.10.12", sick: 265454 , cured: 114410 , die: 5015,  tested: 2602635},
	{date: "2020.10.13", sick: 270587 , cured: 116562 , die: 5122,  tested: 2630988},
	{date: "2020.10.14", sick: 276177 , cured: 118699 , die: 5229,  tested: 2665154},
	{date: "2020.10.15", sick: 281239 , cured: 119650 , die: 5302,  tested: 2695488},
	{date: "2020.10.16", sick: 287231 , cured: 121919 , die: 5408,  tested: 2729496},
	{date: "2020.10.17", sick: 293641 , cured: 124113 , die: 5517,  tested: 2765787},
	{date: "2020.10.18", sick: 298872 , cured: 125377 , die: 5607,  tested: 2793290},
	{date: "2020.10.19", sick: 303638 , cured: 126489 , die: 5673,  tested: 2815833},
	{date: "2020.10.20", sick: 309107 , cured: 129533 , die: 5786,  tested: 2847376},
	{date: "2020.10.21", sick: 315826 , cured: 132219 , die: 5927,  tested: 2880105},
	{date: "2020.10.22", sick: 322879 , cured: 134898 , die: 6043,  tested: 2914006},
	{date: "2020.10.23", sick: 330396 , cured: 137578 , die: 6164,  tested: 2950463},
	{date: "2020.10.24", sick: 337410 , cured: 139755 , die: 6289,  tested: 2991893},
	{date: "2020.10.25", sick: 343498 , cured: 141508 , die: 6391,  tested: 3025148},
	{date: "2020.10.26", sick: 348924 , cured: 142537 , die: 6464,  tested: 3053927},
	{date: "2020.10.27", sick: 355601 , cured: 145336 , die: 6590,  tested: 3087288},
	{date: "2020.10.28", sick: 363075 , cured: 148642 , die: 6755,  tested: 3129235},
	{date: "2020.10.29", sick: 370417 , cured: 151632 , die: 6868,  tested: 3176397},
	{date: "2020.10.30", sick: 378729 , cured: 155026 , die: 7041,  tested: 3225954},
	{date: "2020.10.31", sick: 387481 , cured: 158928 , die: 7196,  tested: 3271961},
	{date: "2020.11.01", sick: 395440 , cured: 161441 , die: 7306,  tested: 3312549},
	{date: "2020.11.02", sick: 402194 , cured: 163768 , die: 7375,  tested: 3344211},
	{date: "2020.11.03", sick: 411093 , cured: 168868 , die: 7532,  tested: 3379029},
	{date: "2020.11.04", sick: 420617 , cured: 176404 , die: 7731,  tested: 3386489},
	{date: "2020.11.05", sick: 430467 , cured: 184782 , die: 7924,  tested: 3470669},
	{date: "2020.11.06", sick: 440188 , cured: 195544 , die: 8125,  tested: 3521175},
	{date: "2020.11.07", sick: 450934 , cured: 204229 , die: 8312,  tested: 3572433},
	{date: "2020.11.08", sick: 460331 , cured: 206866 , die: 8450,  tested: 3613899},
	{date: "2020.11.09", sick: 469018 , cured: 209143 , die: 8565,  tested: 3648292},
	{date: "2020.11.10", sick: 479197 , cured: 214657 , die: 8756,  tested: 3691258},
	{date: "2020.11.11", sick: 489808 , cured: 221459 , die: 8947,  tested: 3735166},
	{date: "2020.11.12", sick: 500865 , cured: 227694 , die: 9145,  tested: 3782099},
	{date: "2020.11.13", sick: 512652 , cured: 233849 , die: 9317,  tested: 3828912},
	{date: "2020.11.14", sick: 525176 , cured: 238811 , die: 9508,  tested: 3876966},
	{date: "2020.11.15", sick: 535857 , cured: 241444 , die: 9603,  tested: 3912966},
	{date: "2020.11.16", sick: 545689 , cured: 244197 , die: 9697,  tested: 3941651},
	{date: "2020.11.17", sick: 557657 , cured: 250983 , die: 9856,  tested: 3979421},
	{date: "2020.11.18", sick: 570153 , cured: 259079 , die: 10112, tested: 4022283},
	{date: "2020.11.19", sick: 583510 , cured: 266479 , die: 10369, tested: 4062868},
	{date: "2020.11.20", sick: 598085 , cured: 274324 , die: 10598, tested: 4108825},
	{date: "2020.11.21", sick: 612665 , cured: 282313 , die: 10813, tested: 4154333},
	{date: "2020.11.22", sick: 624744 , cured: 286917 , die: 10951, tested: 4182331},
	{date: "2020.11.23", sick: 635689 , cured: 291060 , die: 11075, tested: 4243600},
	{date: "2020.11.24", sick: 647976 , cured: 299358 , die: 11263, tested: 4279025},
	{date: "2020.11.25", sick: 661858 , cured: 307778 , die: 11492, tested: 4324463},
	{date: "2020.11.26", sick: 677189 , cured: 317395 , die: 11717, tested: 4373786},
	{date: "2020.11.27", sick: 693407 , cured: 326238 , die: 11909, tested: 4419791},
	{date: "2020.11.28", sick: 709701 , cured: 335135 , die: 12093, tested: 4463249},
	{date: "2020.11.29", sick: 722679 , cured: 339378 , die: 12213, tested: 4502482},
	{date: "2020.11.30", sick: 732625 , cured: 345149 , die: 12327, tested: 4528772},
	{date: "2020.12.01", sick: 745123 , cured: 355172 , die: 12548, tested: 4562589},
	{date: "2020.12.02", sick: 758264 , cured: 369054 , die: 12717, tested: 4607034},
	{date: "2020.12.03", sick: 772760 , cured: 384426 , die: 12960, tested: 4654206},
	{date: "2020.12.04", sick: 787891 , cured: 397809 , die: 13195, tested: 4702234},
	{date: "2020.12.05", sick: 801716 , cured: 412533 , die: 13421, tested: 4746772},
	{date: "2020.12.06", sick: 813306 , cured: 418581 , die: 13588, tested: 4780080},
	{date: "2020.12.07", sick: 821947 , cured: 423704 , die: 13733, tested: 4807961},
	{date: "2020.12.08", sick: 832758 , cured: 436564 , die: 13928, tested: 4838679},
	{date: "2020.12.09", sick: 845343 , cured: 451118 , die: 14204, tested: 4876501},
	{date: "2020.12.10", sick: 858714 , cured: 465021 , die: 14470, tested: 4917780},
	{date: "2020.12.11", sick: 872228 , cured: 480348 , die: 14755, tested: 4957299},
	{date: "2020.12.12", sick: 885039 , cured: 494001 , die: 14998, tested: 4998266},
	{date: "2020.12.13", sick: 894215 , cured: 501564 , die: 15154, tested: 5031859},
	{date: "2020.12.14", sick: 900666 , cured: 506718 , die: 15247, tested: 5052686},
	{date: "2020.12.15", sick: 909082 , cured: 522868 , die: 15480, tested: 5084649},
	{date: "2020.12.16", sick: 919704 , cured: 535417 , die: 15744, tested: 5125389},
	{date: "2020.12.17", sick: 931751 , cured: 548356 , die: 15996, tested: 5167122},
	{date: "2020.12.18", sick: 944381 , cured: 561222 , die: 16256, tested: 5209462},
	{date: "2020.12.19", sick: 956123 , cured: 574536 , die: 16469, tested: 5248720},
	{date: "2020.12.20", sick: 964448 , cured: 581162 , die: 16585, tested: 5280954},
	{date: "2020.12.21", sick: 970993 , cured: 586268 , die: 16665, tested: 5303103},
	{date: "2020.12.22", sick: 979506 , cured: 600288 , die: 16897, tested: 5307601},
	{date: "2020.12.23", sick: 989642 , cured: 615660 , die: 17172, tested: 5348820},
	{date: "2020.12.24", sick: 1001132, cured: 631435 , die: 17395, tested: 5390952},
	{date: "2020.12.25", sick: 1012167, cured: 646772 , die: 17581, tested: 5428825},
	{date: "2020.12.26", sick: 1019876, cured: 651917 , die: 17702, tested: 5453446},
	{date: "2020.12.27", sick: 1025989, cured: 658538 , die: 17774, tested: 5472989},
	{date: "2020.12.28", sick: 1030374, cured: 665729 , die: 17849, tested: 5485214},
	{date: "2020.12.29", sick: 1037362, cured: 681835 , die: 18081, tested: 5511179},
	{date: "2020.12.30", sick: 1045348, cured: 698190 , die: 18324, tested: 5546683},
	{date: "2020.12.31", sick: 1055047, cured: 709993 , die: 18533, tested: 5585615},
	{date: "2021.01.01", sick: 1064479, cured: 720009 , die: 18680, tested: 5585615}, // Данные вычислены косвенным путём. Данных по тестам нету.
	{date: "2021.01.02", sick: 1069517, cured: 722615 , die: 18731, tested: 5597641},
	{date: "2021.01.03", sick: 1074093, cured: 728865 , die: 18854, tested: 5610003},
	{date: "2021.01.04", sick: 1078251, cured: 733558 , die: 18927, tested: 5621024},
	{date: "2021.01.05", sick: 1083585, cured: 747408 , die: 19129, tested: 5645178},
	{date: "2021.01.06", sick: 1090496, cured: 761898 , die: 19357, tested: 5680116},
	{date: "2021.01.07", sick: 1099493, cured: 773214 , die: 19505, tested: 5717403},
	{date: "2021.01.08", sick: 1105169, cured: 778345 , die: 19588, tested: 5733555},
	{date: "2021.01.09", sick: 1110015, cured: 786306 , die: 19668, tested: 5752190},
	{date: "2021.01.10", sick: 1115026, cured: 791598 , die: 19767, tested: 5769908},
	{date: "2021.01.11", sick: 1119314, cured: 796417 , die: 19835, tested: 5781951},
	{date: "2021.01.12", sick: 1124430, cured: 812368 , die: 20019, tested: 5805824},
	{date: "2021.01.13", sick: 1130839, cured: 826871 , die: 20214, tested: 5841502},
	{date: "2021.01.14", sick: 1138764, cured: 837063 , die: 20376, tested: 5874851},
	{date: "2021.01.15", sick: 1146963, cured: 847391 , die: 20542, tested: 5905076},
	{date: "2021.01.16", sick: 1154692, cured: 857183 , die: 20686, tested: 5934439},
	{date: "2021.01.17", sick: 1160682, cured: 865960 , die: 20802, tested: 5953987},
	{date: "2021.01.18", sick: 1163716, cured: 871196 , die: 20869, tested: 5964388},
	{date: "2021.01.19", sick: 1167655, cured: 886248 , die: 21046, tested: 5983122},
	{date: "2021.01.20", sick: 1172038, cured: 900749 , die: 21258, tested: 6009914},
	{date: "2021.01.21", sick: 1177621, cured: 914730 , die: 21499, tested: 6034418},
	{date: "2021.01.22", sick: 1182969, cured: 928969 , die: 21662, tested: 6057828},
	{date: "2021.01.23", sick: 1187897, cured: 942107 , die: 21778, tested: 6080495},
	{date: "2021.01.24", sick: 1191812, cured: 947514 , die: 21861, tested: 6098095},
	{date: "2021.01.25", sick: 1194328, cured: 953297 , die: 21924, tested: 6108668},
	{date: "2021.01.26", sick: 1197107, cured: 965835 , die: 22057, tested: 6125257},
	{date: "2021.01.27", sick: 1200883, cured: 980085 , die: 22202, tested: 6152298},
	{date: "2021.01.28", sick: 1206412, cured: 992031 , die: 22351, tested: 6184320},
	{date: "2021.01.29", sick: 1211593, cured: 1003341, die: 22479, tested: 6209089},
	{date: "2021.01.30", sick: 1216278, cured: 1014658, die: 22628, tested: 6232960},
	{date: "2021.01.31", sick: 1219455, cured: 1018784, die: 22707, tested: 6248002},
	{date: "2021.02.01", sick: 1221485, cured: 1023915, die: 22768, tested: 6257875},
	{date: "2021.02.02", sick: 1223879, cured: 1035372, die: 22924, tested: 6274464},
	{date: "2021.02.03", sick: 1227164, cured: 1045473, die: 23089, tested: 6299699},
	{date: "2021.02.04", sick: 1232246, cured: 1055406, die: 23229, tested: 6324775},
	{date: "2021.02.05", sick: 1237169, cured: 1063591, die: 23387, tested: 6350442},
	{date: "2021.02.06", sick: 1241479, cured: 1070749, die: 23516, tested: 6376032},
	{date: "2021.02.07", sick: 1244849, cured: 1073046, die: 23597, tested: 6391722},
	{date: "2021.02.08", sick: 1246990, cured: 1075743, die: 23644, tested: 6402123},
	{date: "2021.02.09", sick: 1249646, cured: 1084608, die: 23771, tested: 6419781},
	{date: "2021.02.10", sick: 1253055, cured: 1092376, die: 23934, tested: 6447576},
	{date: "2021.02.11", sick: 1258094, cured: 1098944, die: 24058, tested: 6474315},
	{date: "2021.02.12", sick: 1262867, cured: 1106155, die: 24174, tested: 6500150},
	{date: "2021.02.13", sick: 1268049, cured: 1112299, die: 24285, tested: 6525209},
	{date: "2021.02.14", sick: 1271143, cured: 1114301, die: 24330, tested: 6540785},
	{date: "2021.02.15", sick: 1273475, cured: 1116779, die: 24392, tested: 6551858},
	{date: "2021.02.16", sick: 1276618, cured: 1122968, die: 24542, tested: 6570806},
	{date: "2021.02.17", sick: 1280904, cured: 1128895, die: 24689, tested: 6596588},
	{date: "2021.02.18", sick: 1287141, cured: 1134120, die: 24852, tested: 6625529},
	{date: "2021.02.19", sick: 1293672, cured: 1139977, die: 24972, tested: 6651624},
	{date: "2021.02.20", sick: 1299967, cured: 1144516, die: 25045, tested: 6681355},
	{date: "2021.02.21", sick: 1304456, cured: 1146073, die: 25103, tested: 6700971},
	{date: "2021.02.22", sick: 1307662, cured: 1147426, die: 25156, tested: 6714484},
	{date: "2021.02.23", sick: 1311844, cured: 1151777, die: 25309, tested: 6738144},
	{date: "2021.02.24", sick: 1317694, cured: 1155422, die: 25461, tested: 6772495},
	{date: "2021.02.25", sick: 1325841, cured: 1159311, die: 25596, tested: 6809165},
	{date: "2021.02.26", sick: 1333844, cured: 1163555, die: 25742, tested: 6845974},
	{date: "2021.02.27", sick: 1342016, cured: 1168321, die: 25893, tested: 6881688},
	{date: "2021.02.28", sick: 1347849, cured: 1170023, die: 25982, tested: 6906179},
	{date: "2021.03.01", sick: 1352134, cured: 1171724, die: 26050, tested: 6921573},
	{date: "2021.03.02", sick: 1357470, cured: 1176918, die: 26212, tested: 6948980},
	{date: "2021.03.03", sick: 1364705, cured: 1182036, die: 26397, tested: 6983925},
	{date: "2021.03.04", sick: 1374762, cured: 1186873, die: 26591, tested: 7021993},
	{date: "2021.03.05", sick: 1384917, cured: 1191022, die: 26763, tested: 7062386},
	{date: "2021.03.06", sick: 1394061, cured: 1194373, die: 26919, tested: 7101358},
	{date: "2021.03.07", sick: 1401228, cured: 1196520, die: 27022, tested: 7126226},
	{date: "2021.03.08", sick: 1406800, cured: 1198254, die: 27128, tested: 7141341},
	{date: "2021.03.09", sick: 1410061, cured: 1199229, die: 27204, tested: 7154442},
	{date: "2021.03.10", sick: 1416438, cured: 1204916, die: 27423, tested: 7188346},
	{date: "2021.03.11", sick: 1425522, cured: 1210246, die: 27685, tested: 7235711},
	{date: "2021.03.12", sick: 1438468, cured: 1214876, die: 27915, tested: 7282107},
	{date: "2021.03.13", sick: 1451744, cured: 1219773, die: 28158, tested: 7328468},
	{date: "2021.03.14", sick: 1460756, cured: 1222516, die: 28303, tested: 7360066},
	{date: "2021.03.15", sick: 1467548, cured: 1226007, die: 28433, tested: 7377404},
	{date: "2021.03.16", sick: 1477190, cured: 1232209, die: 28697, tested: 7416142},
	{date: "2021.03.17", sick: 1489023, cured: 1237676, die: 28986, tested: 7467108},
	{date: "2021.03.18", sick: 1504076, cured: 1244190, die: 29253, tested: 7520147},
	{date: "2021.03.19", sick: 1519926, cured: 1248782, die: 29515, tested: 7573737},
	{date: "2021.03.20", sick: 1535218, cured: 1253972, die: 29775, tested: 7624537},
	{date: "2021.03.21", sick: 1546363, cured: 1257849, die: 29941, tested: 7659777},
	{date: "2021.03.22", sick: 1554256, cured: 1260842, die: 30098, tested: 7681388},
	{date: "2021.03.23", sick: 1565732, cured: 1268886, die: 30431, tested: 7726035},
	{date: "2021.03.24", sick: 1579906, cured: 1276272, die: 30773, tested: 7778231},
	{date: "2021.03.25", sick: 1596575, cured: 1283020, die: 31135, tested: 7836049},
	{date: "2021.03.26", sick: 1614707, cured: 1290158, die: 31461, tested: 7889544},
	{date: "2021.03.27", sick: 1632131, cured: 1297282, die: 31751, tested: 7945044},
	{date: "2021.03.28", sick: 1644063, cured: 1300625, die: 31954, tested: 7983023},
	{date: "2021.03.29", sick: 1652409, cured: 1303500, die: 32132, tested: 8007427},
	{date: "2021.03.30", sick: 1662942, cured: 1307076, die: 32418, tested: 8058263},
	{date: "2021.03.31", sick: 1674168, cured: 1313481, die: 32825, tested: 8120102},
	{date: "2021.04.01", sick: 1691737, cured: 1323083, die: 33246, tested: 8179905},
	{date: "2021.04.02", sick: 1711630, cured: 1333370, die: 33679, tested: 8238849},
	{date: "2021.04.03", sick: 1731971, cured: 1342536, die: 34075, tested: 8297800},
	{date: "2021.04.04", sick: 1745709, cured: 1347193, die: 34333, tested: 8334111},
	{date: "2021.04.05", sick: 1755888, cured: 1352139, die: 34587, tested: 8356074},
	{date: "2021.04.06", sick: 1769164, cured: 1362379, die: 35017, tested: 8397586},
	{date: "2021.04.07", sick: 1784579, cured: 1373851, die: 35498, tested: 8456635},
	{date: "2021.04.08", sick: 1803998, cured: 1383883, die: 35962, tested: 8514631},
	{date: "2021.04.09", sick: 1823674, cured: 1395104, die: 36381, tested: 8568004},
	{date: "2021.04.10", sick: 1841137, cured: 1405826, die: 36779, tested: 8622424},
	{date: "2021.04.11", sick: 1853249, cured: 1410860, die: 37014, tested: 8656885},
	{date: "2021.04.12", sick: 1861105, cured: 1416215, die: 37301, tested: 8677716},
	{date: "2021.04.13", sick: 1872785, cured: 1430234, die: 37758, tested: 8716400},
	{date: "2021.04.14", sick: 1887338, cured: 1442618, die: 38225, tested: 8770753},
	{date: "2021.04.15", sick: 1903765, cured: 1453766, die: 38658, tested: 8822097},
	{date: "2021.04.16", sick: 1921244, cured: 1465820, die: 39096, tested: 8869518},
	{date: "2021.04.17", sick: 1936228, cured: 1475556, die: 39536, tested: 8915393},
	{date: "2021.04.18", sick: 1946510, cured: 1482079, die: 39786, tested: 8942671},
	{date: "2021.04.19", sick: 1953016, cured: 1487677, die: 40000, tested: 8958482},
	{date: "2021.04.20", sick: 1961956, cured: 1499752, die: 40367, tested: 8996039},
	{date: "2021.04.21", sick: 1974118, cured: 1514472, die: 40796, tested: 9042785},
	{date: "2021.04.22", sick: 1990353, cured: 1533303, die: 41266, tested: 9089301},
	{date: "2021.04.23", sick: 2004630, cured: 1552267, die: 41700, tested: 9130606},
	{date: "2021.04.24", sick: 2017341, cured: 1565954, die: 42092, tested: 9214479},
	{date: "2021.04.25", sick: 2025271, cured: 1572528, die: 42323, tested: 9240911},
	{date: "2021.04.26", sick: 2030333, cured: 1579438, die: 42518, tested: 9256290},
	{date: "2021.04.27", sick: 2038248, cured: 1596829, die: 42950, tested: 9292051},
	{date: "2021.04.28", sick: 2047838, cured: 1616891, die: 43391, tested: 9335892},
	{date: "2021.04.29", sick: 2059465, cured: 1635333, die: 43778, tested: 9377391},
	{date: "2021.04.30", sick: 2069537, cured: 1655525, die: 44085, tested: 9418779},
	{date: "2021.05.01", sick: 2078086, cured: 1670481, die: 44436, tested: 9456234},
	{date: "2021.05.02", sick: 2083180, cured: 1676265, die: 44596, tested: 9477843},
	{date: "2021.05.03", sick: 2085938, cured: 1681815, die: 44750, tested: 9487141},
	{date: "2021.05.04", sick: 2088410, cured: 1689630, die: 44916, tested: 9498958},
	{date: "2021.05.05", sick: 2090986, cured: 1697358, die: 45077, tested: 9518164},
	{date: "2021.05.06", sick: 2097024, cured: 1711709, die: 45451, tested: 9555109},
	{date: "2021.05.07", sick: 2105428, cured: 1731162, die: 45830, tested: 9594857},
	{date: "2021.05.08", sick: 2114138, cured: 1750570, die: 46200, tested: 9633983},
	{date: "2021.05.09", sick: 2119510, cured: 1759751, die: 46393, tested: 9655779},
	{date: "2021.05.10", sick: 2122327, cured: 1768753, die: 46512, tested: 9668937},
	{date: "2021.05.11", sick: 2124535, cured: 1777370, die: 46631, tested: 9682286},
	{date: "2021.05.12", sick: 2129073, cured: 1797136, die: 46987, tested: 9721036},
	{date: "2021.05.13", sick: 2135886, cured: 1816643, die: 47333, tested: 9756402},
	{date: "2021.05.14", sick: 2143448, cured: 1832601, die: 47620, tested: 9790291},
	{date: "2021.05.15", sick: 2150244, cured: 1849803, die: 47942, tested: 9824399},
	{date: "2021.05.16", sick: 2153864, cured: 1857724, die: 48075, tested: 9841788},
	{date: "2021.05.17", sick: 2156000, cured: 1864593, die: 48184, tested: 9851754},
	{date: "2021.05.18", sick: 2160095, cured: 1882344, die: 48469, tested: 9882447},
	{date: "2021.05.19", sick: 2165233, cured: 1899446, die: 48696, tested: 9914382},

];
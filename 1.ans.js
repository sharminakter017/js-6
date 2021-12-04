const devsInfo = [

    ['sharmin',20,'MERN stack','chandpur',40000],
    ['shamima',100,'Laravel','hajigong',60000],
    ['kasim',120,' Django','dhaka',20000],
    ['pakhi',25,'GoLang','uttora',50000],
    ['mannan',50,'WordPress','chandpur',45000],
    ['sumona',220,' java ','hajigong',65000],
    ['sajid',180,'Laravel','motlob',36000],
    ['kaium',300,'WordPress','chandpur',81000],
    ['mina',150,'Django','uttora',45000],
    ['asraful',20,'GoLang','chandpur',63000],
    ['sumon',160,'MERN stack','dhaka',50000],
    ['sima',28,'java','motlob',70000],
    ['forid',450,'java','hajigong',87000],
    
];

let sum = 0;

for (i = 0 ; i < devsInfo.length ; i++){

    console.log (devsInfo [i] [4]);

    sum = sum + devsInfo [i] [4];
}

console.log('Totalincome' + sum);








  
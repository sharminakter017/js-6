
// const flower = ['golap','joba','rojonighondha','beli','lili','hasnahena','keya','jui','bokul','ghadha']

// console.log(flower[2] + ' '  + flower[5]);


// const name = ['rahim','karim','sharmin','sajid','hossain','abul','halim','pakhi']

// for (i = 0 ; i < name.length; i ++){
//     console.log(name[i]);
// }

// const flower = ['jui','golap','rojoni-ghondha','beli','lili','bokul','joba','ghada','hasnahena','noyon-tara']

// for(i = 0 ; i < flower.length ; i++){
//     console.log(flower[i]);
// }

//  const food = ['beriyani','vat','alu','vutta','puisakh','tomato','letus','palong-sakh','fish','ful-kopi','badha-kopi']

// // food.forEach (data => console.log(data));

// food.map (data=> console.log(data))


// const food = [
           

//     ['alu','potol','mula','sim','ful-kopi','badha-kopi','puisakh'],
//     ['rui','katol','pangash','boyal','ilish'],
    

     
// ];

// // food[0].map(data => console.log(data));

// food.forEach(data => console.log(data));


// const devs = [

//      ['sharmin',20,'php','chandpur'],
//      ['shamima',10,'php','hajigong'],
//      ['kasim',120,'java','dhaka'],
//      ['pakhi',25,'larabel','uttora'],
//      ['mannan',50,'php','chandpur'],
//      ['sumona',220,'java','hajigong'],
//      ['sajid',18,'javascript','motlob'],
//      ['kaium',300,'java','chandpur'],
//      ['mina',150,'larabel','uttora'],
//      ['asraful',20,'php','chandpur'],
//      ['sumon',160,'phython','dhaka'],
//      ['sima',28,'php','motlob'],
//      ['forid',450,'java','hajigong'],
     
// ]


// for (i = 0 ; i < devs.length ; i++){

//     if(devs[i] [2]== 'php' && devs[i] [3] == 'chandpur'){

//         console.log(`==============================`);
//         devs[i].map(data => console.log(data))

//     }

   
//  }


// for ( i = 0; i < devs.length ; i++){

//     if(devs[i] [1] > 100 ){
//         devs[i].forEach(data => console.log(data))
//     }


// }

// for (i = 0 ; i < devs.length ; i ++){
//     if ( devs [i] [3] == 'hajigong'){
//         devs[i].map (data =>  console.log(data))
//     }
// }

// const food = ['alo','potol','lao','kumra'];
//     console.log(food.toString())

// const flower = [ 'jui','beli','lili','joba'];

// console.log(flower.toString())

// const food = ['alu','potol','loa','kumra']

// console.log(food.join(' / '));

// const food = ['beriyani','vat','murgi','chiken']

// console.log(food.join(' $ '));

// const food = 'kumra,lao,kodu, dim ';

// console.log(food.split(' , ')) 

// const food = ['alu','potol','puisakh','derosh','begun','mula'];


// let newarr = food.slice (2,5)





// console.log(newarr);








// food.unshift ('begun')
// food.unshift ('ruti')
// food.unshift ('porota')
// food.shift('begun')
// food.shift ('alu')
// food.push ('add')
// food.pop('add')




// const food = 'alu,potol,begun';



// console.log(food.split(' , '));


// // const food = [ 'alu','potol','begun','puisakh','kumra','jingga']
// const food1 = [ 'kacci','beriyani','faluda','moris','peyaj','anaros']
// const food3 = [ 'alu','potol','begun','puisakh','kumra','jingga']
// const food = [ 'alu','potol','begun','puisakh','kumra','jingga']

// food.push('sim','murgi')
// food.pop ('jingga','puisakh')

// food.unshift('prothom')
// food.shift('kat')

// food.splice(3,2)
// let newarr = food.slice (3,5,'mula')



// console.log(food.concat(food1).concat (food3).concat(food4));

// const food = 'alu,potato,cini,medai,pan,supari';


// console.log(food.split());

// console.log (food1.concat(food3).concat (food));




// const studentInfo = [

//     [1, 'Israfil', 'Sofiqul','SathiBegum','Chandpur',80,90,89,70,80,86],
//     [2, 'Sayedi','DidarKhan','SumiBegum','Sherpur',88,78,86,66,95,69],
//     [3,'Jidan','LitonMojumdar','LiliBegum','Cumilla',77,66,86,57,98,85],
//     [4,'Tanha','FirozMahmud','PannaBegum','Jinaidoho',58,39,62,49,78,82],
//     [5,'Mim','KaderKhan','SefaliBegum','Lalmai',90,98,76,83,76,79],
//     [6,'Munni','HannanMiaji','RinaBegum','Ramgong',56,59,58,97,49,75],
//     [7,'Lion','LitonKhan','NoyonBegum','LOkkhipur',88,66,85,83,80,84],
//     [8,'Tushar','NipuHaji','TaslimaBegum','Hajigong',64,49,86,75,74,86],
//     [9,'TasnimZara','BappyKhan','SumaiyaBegum','Motlob',67,86,82,76,73,91],
//     [10,'SraboniSaha','DipongkorSaha','oindrilaSaha','Noadda',54,69,86,82,43,46],


// ];
// let roll = studentInfo[5][0]
// let name = studentInfo[5][1]
// let fatherName = studentInfo[5][2]
// let motherName = studentInfo[5][3]
// let district  = studentInfo[5][4]
// let bn =  studentInfo [5][5]
// let en =  studentInfo [5][6]
// let math =  studentInfo [5][7]
// let science =  studentInfo [5][8]
// let ss =  studentInfo [5][9]
// let rel =  studentInfo [5][10]

// function STudentResult() {
    
//     this.gpa = function (marks) {
//         let gpa ;


//         if (marks > 0 && marks <= 32){
//             gpa = 0;
//         }else if (marks > 32 && marks <= 40){
//             gpa = 1;
//         }else if (marks > 40 && marks <= 50){
//             gpa = 2 ;
//         }else if (marks > 50 && marks <= 60){
//             gpa = 2.5;
//         }else if (marks > 60 && marks <= 70){
//             gpa = 3.00;
//         }else if (marks > 70 && marks <= 80){
//             gpa = 4.00;
//         }else if ( marks > 80 && marks <= 100){
//             gpa = 5.00;
//         }
//         return gpa;
        
//     }


//     this.grade = function (marks) {
//         let grade ;


//         if (marks > 0 && marks <= 32){
//             grade = 'F';
//         }else if (marks > 32 && marks <= 40){
//             grade = 'D';
//         }else if (marks > 40 && marks <= 50){
//             grade = 'C' ;
//         }else if (marks > 50 && marks <= 60){
//             grade = 'B';
//         }else if (marks > 60 && marks <= 70){
//             grade = 'A-';
//         }else if (marks > 70 && marks <= 80){
//             grade = 'A';
//         }else if ( marks > 80 && marks <= 100){
//             grade = 'A+';
//         }
//         return grade;
        
//     }

//     this.totalgrade = function (cgpa){
//         if(cgpa >= 0 && cgpa < 1){
//             return 'F';
//         }else if(cgpa >= 1 && cgpa < 2){
//             return 'D';
//         }else if(cgpa >= 2 && cgpa < 2.50){
//             return 'C';
//         }else if(cgpa >= 2.50 && cgpa < 3.00){
//             return 'B';
//         }else if(cgpa >= 3.00 && cgpa < 3.50){
//             return 'A-';
//         }else if(cgpa >= 3.50 && cgpa < 4.00){
//             return 'A';
//         }else if(cgpa >= 4.00 && cgpa <=5.00 ){
//             return 'A+';
//         }
//     }


//     this.cgpa = (bn , en , math , science , ss , rel ) => {
//         let total= (bn + en + math + science + ss + rel) ;
//         let cgpa = total/6 ; 

//         if (bn == 0 || en == 0 || math == 0 || science == 0 || ss == 0 || rel == 0){
//             return `you are failed` ;
//         }else {
//             return `your cgpa ${cgpa .toFixed(2)} = your grade ${this.totalgrade(cgpa)}`;
//         }
        
//     }




// }

// let sharmin = new  STudentResult();


// console.log(`


//    Name        = ${name}
//    roll        = ${roll}
//    fatherName  = ${fatherName}
//    motherName  = ${motherName}
//    District    = ${district}

//  subject name           Marks              gpa                 grade
//    bangla              ${bn}            ${sharmin.gpa(bn)}            ${sharmin.grade(bn)}
//    english             ${en}            ${sharmin.gpa(en)}            ${sharmin.grade(en)}
//    math                ${math}          ${sharmin.gpa(math)}           ${sharmin.grade(math)}
//    science             ${science}       ${sharmin.gpa(science)}        ${sharmin.grade(science)}
//    social s            ${ss}            ${sharmin.gpa(ss)}             ${sharmin.grade(ss)}
//    religion            ${rel}           ${sharmin.gpa(rel)}            ${sharmin.grade(rel)}
//    --------------------------------------------------------------------------------
//                             total gpa = ${sharmin.cgpa(sharmin.gpa(bn) ,sharmin.gpa(en) , sharmin.gpa(math) , sharmin.gpa(science) , sharmin.gpa(ss) , sharmin.gpa(rel))};









// `)



// https://developersajjat.xyz/

// https://developer-adnan.me/

// https://freelancerjaed.com/

// https://shahinurwebdev.me/

// smtaslim.xyz

// https://nzsakib.com

// https://www.prorubel.me/

// mohi

// https://developermainuddin.me/

// https://developerhumayun.com/

// :https//developerariyan.xyz/

// https://istiak.me/
// https://afnanhussain.com/
// rajsarker.com
// zzad.com/

// function data(data) {

    
// }
// let name = function (data) {
    
// }
// let name = (data) => {

// }

// function area (data){
//     return``
// }

// let name =function (data) {
    
// }
// let name = (data) => {

// }


// const food = ['alu','potol','lao','kumra','begun'];

// food.unshift  ('kodu','calkumra');
// console.log(food);

// const food = ['alu','potol','mula','calkumra'];

// let newarr = food.shift ('alu','potol');
// console.log((food));

// food.pop ('cina');
// console.log(food);

// food.splice ()


// const students = {

//     roll   : 1,
//     name   : 'sharmin',
//     age    : 20,
//     location : 'hajigong'









// }

// console.log(students.roll);



// const devs = {
   
//     roll : 01,
//     name : 'Asraful',
//     age : 40,
//     location : 'uttora',


// }
// console.log(devs.name);



const student = [
   


    {

        roll : 01,
        name : 'Asraful',
        age : 40,
        location : 'uttora',
    },
    {

        roll : 02,
        name : 'nasim',
        age : 30,
        location : 'dhaka',
    },
    {

        roll : 03,
        name : 'sharmin',
        age : 20,
        location : 'chandpur',
    },

    {

        roll : 04,
        name : 'omor',
        age : 10,
        location : 'dubai',
    },





];

// console.log(student[2].name);

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i]);
    
// }

student.map(data => {
    
    if (data.roll == 2){
        console.log(`roll :  ${data.roll}
                 name : ${data.name}
                 location : ${data.location}
    
    
    
    `);
}})
 














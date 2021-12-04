

const studentInfo = [

    [1, 'Israfil', 'Sofiqul','SathiBegum','Chandpur',80,90,89,70,80,86],
    [2, 'Sayedi','DidarKhan','SumiBegum','Sherpur',88,78,86,66,95,69],
    [3,'Jidan','LitonMojumdar','LiliBegum','Cumilla',77,66,86,57,98,85],
    [4,'Tanha','FirozMahmud','PannaBegum','Jinaidoho',58,39,62,49,78,82],
    [5,'Mim','KaderKhan','SefaliBegum','Lalmai',90,98,76,83,76,79],
    [6,'Munni','HannanMiaji','RinaBegum','Ramgong',56,59,58,97,49,75],
    [7,'Lion','LitonKhan','NoyonBegum','LOkkhipur',88,66,85,83,80,84],
    [8,'Tushar','NipuHaji','TaslimaBegum','Hajigong',64,49,86,75,74,86],
    [9,'TasnimZara','BappyKhan','SumaiyaBegum','Motlob',67,86,82,76,73,91],
    [10,'SraboniSaha','DipongkorSaha','oindrilaSaha','Noadda',54,69,86,82,43,46],


];
  
let roll = studentInfo[0][0];
let name = studentInfo[0][1];
let fatherName = studentInfo[0][2];
let motherName = studentInfo[0][3];
let dristrick = studentInfo[0][4];
let bn = studentInfo[0][5] ; 
let en = studentInfo[0][6] ; 
let math = studentInfo[0][7] ; 
let physics = studentInfo[0][8] ; 
let chemistry = studentInfo[0][9] ; 
let biology = studentInfo[0][10] ; 



let total = bn + en + math + physics + chemistry + biology ;


 function StudentResult () {

    this.gpa = function (marks){
        let gpa;
    
        if(marks >= 0 && marks <=32){
             gpa = 00;
        }else if(marks >=33 && marks < 40){
            gpa = 1.00;
        }else if(marks >=40 && marks < 50){
            gpa = 2.00;
        }else if(marks >=50 && marks < 60){
            gpa = 2.50;
        }else if(marks >=60 && marks < 70){
            gpa = 3.00;
        }else if(marks >=70 && marks < 80){
            gpa = 4.00;
        }else if(marks >=80 && marks <= 100){
            gpa = 5.00;
        }
        return gpa ;
    
         }
        


         //grade calculate

         this.grade = function (marks){
            let grade;
        
            if(marks >= 0 && marks <=32){
                 grade = 'F';
            }else if(marks >=33 && marks < 40){
                grade = 'D';
            }else if(marks >=40 && marks < 50){
                grade = 'C';
            }else if(marks >=50 && marks < 60){
                grade = 'B';
            }else if(marks >=60 && marks < 70){
                grade = 'A-';
            }else if(marks >=70 && marks < 80){
                grade = 'A';
            }else if(marks >=80 && marks <= 100){
                grade = 'A+';
            }
            return grade ;
        
             }



              this.totalgrade = function (cgpa){
                if(cgpa >= 0 && cgpa < 1){
                    return 'F';
                }else if(cgpa >= 1 && cgpa < 2){
                    return 'D';
                }else if(cgpa >= 2 && cgpa < 2.50){
                    return 'C';
                }else if(cgpa >= 2.50 && cgpa < 3.00){
                    return 'B';
                }else if(cgpa >= 3.00 && cgpa < 3.50){
                    return 'A-';
                }else if(cgpa >= 3.50 && cgpa < 4.00){
                    return 'A';
                }else if(cgpa >= 4.00 && cgpa <=5.00 ){
                    return 'A+';
                }
            }


             // tatal 

             this.cgpa = (bn , en , math , physics , chemistry  , biology ) => {
                let totalgpa = (bn + en + math + physics + chemistry  + biology);
                let cgpa = totalgpa/6;
            
                if (bn == 0 || en == 0 || math == 0 || physics == 0 || chemistry ==0 || biology  == 0 ){
                    return 'you are failed';
                }else{
                    return `your cgpa ${cgpa .toFixed(2)} = your grade ${this.totalgrade(cgpa)}`;
            
                }
            }

            //cgpa

           





}


let sharmin = new StudentResult ();




console.log(`

  roll       = ${roll}
  name       = ${name}
  fatherName = ${fatherName}
  motherName = ${motherName}
  location   = ${dristrick}


    Subject             Marks               GPA                         Grade
    
    Bangla       =      ${bn}               ${sharmin.gpa(bn)}                  ${sharmin.grade(bn)}
    English      =      ${en}               ${sharmin.gpa(en)}                  ${sharmin.grade(en)}
    Math         =      ${math}             ${sharmin.gpa(math)}                ${sharmin.grade(math)}
    Science      =      ${physics}          ${sharmin.gpa(physics)}             ${sharmin.grade(physics)}
    Social s     =      ${chemistry}         ${sharmin.gpa(chemistry)}           ${sharmin.grade(chemistry)}
    Religion     =      ${biology}           ${sharmin.gpa(biology)}             ${sharmin.grade(biology)}
   -------------------------------------------------------------------------------------------
                            Total Cgpa = ${sharmin.cgpa(sharmin.gpa(bn), sharmin.gpa(en), sharmin.gpa(math), sharmin.gpa(physics), sharmin.gpa(chemistry), sharmin.gpa(biology))};



`);
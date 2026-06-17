
//we at first import the file (student) which we want to acess those module using "require('./file_name')"

const s1=require('./student'); //we create variable s1 which has access to student file as an object

console.log(s1);

//for individual properties access

console.log(s1.student().Department); //then through s1 dot(.)properties can be accessible
console.log(s1.student().CGPA);
console.log(s1.student().name);


console.log(s1.student()); // for all property together display

console.log(s1.getAge()); 
console.log(s1.isMember);


// in case, i want to import specific module/function, then it should be in {function_name} like this way

const {getAge}=require('./student') //only accessing the getAge() function

console.log(getAge)

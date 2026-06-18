
// 1. Local Module 
// We create our own module, function and then we export those function using "exports.variable_name=function_name"

const student=()=>({

    name:"Afnan",
    ID:"23-55524-3",
    CGPA:3.73,
    Department:"CSE"

})

const getAge=()=>{
    return "24";
}

exports.isMember=true;  //we can also do this individual exports here

// exports.student=student;
// exports.getAge=getAge;
// exports.member=isMember;

//we can also do module.exports{.....here we export those things }

module.exports={
    student,
    getAge,
    isMember
}


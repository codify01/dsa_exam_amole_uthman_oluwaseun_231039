
// const evaluateGrades = (grade)=>{

//     switch(true){
//         case (grade >= 4.5 && grade <= 5.00):
//             return "first class"
//         case (grade >= 3.5 && grade < 4.49):
//             return "second class"
//         case (grade >= 2.4 && grade < 3.49):
//             return "third class"
//         case (grade >= 1.5 && grade < 2.39):
//             return "pass"
//         case (grade < 1.5):
//             return "fail"
//         default:
//             return "Invalid grade"
//     }

// }

const evaluateGrades = (grade) => {

    if (grade >= 4.5 && grade <= 5.00) {
        return "first class"
    } else if (grade >= 3.5 && grade < 4.49) {
        return "second class"
    } else if (grade >= 2.4 && grade < 3.49) {
        return "third class"
    } else if (grade >= 1.5 && grade < 2.39) {
        return "pass"
    } else if (grade < 1.5) {
        return "fail"
    } else {
        return "Invalid grade"  
    }
}

console.log(evaluateGrades(6.6))
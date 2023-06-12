let grades = {
    midterm: { grade: 3.3, weight: 1 },
    project: { grade: 4.0, weight: 1 },
    final: { grade: 3.2, weight: 2 }
  }
  
//   function gpa(someGrades) {
//     let gradeSum = 0
//     let weightSum = 0

//     Object.keys(someGrades).forEach(key => {
//         gradeSum += someGrades[key].grade * someGrades[key].weight
//         weightSum += someGrades[key].weight
//     })
//     return gradeSum / weightSum
//   }
  
//   console.log('The final GPA is ' + gpa(grades));

    let gpa = (obj) => {
        let gradesToWeight = Object.keys(obj)
        let gradesSum = 0, weightSum = 0
        gradesToWeight.forEach(key => {
            gradesSum += obj[key].grade * obj[key].weight
            weightSum += obj[key].weight
        })
        return gradesSum / weightSum
    }

    console.log(gpa(grades))
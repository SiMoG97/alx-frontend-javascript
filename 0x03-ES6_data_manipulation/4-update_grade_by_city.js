export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  return studentsList
    .filter(({ location }) => location === city)
    .map((student) => {
      const grades = newGrades.filter(
        ({ studentId }) => studentId === student.id,
      );
      if (grades.length === 0) {
        return {
          ...student,
          grade: 'N/A',
        };
      }
      return {
        ...student,
        grade: grades[0].grade,
      };
    });
}

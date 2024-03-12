export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accum, currStudent) => accum + currStudent.id, 0);
}

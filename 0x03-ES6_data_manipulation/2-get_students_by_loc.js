export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter(({ location }) => location === city);
}

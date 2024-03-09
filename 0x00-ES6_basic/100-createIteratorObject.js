export default function createIteratorObject(report) {
  const reportWithIterator = [];
  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      reportWithIterator.push(...report.allEmployees[key]);
    }
  }
  return reportWithIterator;
}

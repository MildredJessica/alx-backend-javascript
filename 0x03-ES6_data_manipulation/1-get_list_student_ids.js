export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }  
  const studIds = arr.map(student => student.id);
  return studIds;
}

import Student from "./Student"

const Students = ({students}) => {
    
  return (
      <>
          {students.map((student) => (
              <Student key={student.id} student={student}/>
          ))}
      </>
  )
}

export default Student

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteStudent, getStudents } from "../students.service";

function Main() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const data = getStudents();

        setStudents(data);
    }, []);

    const handleDelete = (id) => {
        deleteStudent(id);
//daca lasam pana aici, la click on delete btn nu se va sterge in browser ci doar in array cu students unde am definit acea lista, de aceea trebuie sa adaugam linia de mai jos ca sa vedem ca s-a sters si in browser(un nou array)
        setStudents([...getStudents()]);
    }

    return (
        <div>
            <header>
                <Link to="edit/null">Add</Link>

                <h3>Students list!</h3>
            </header>

            {
                students.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fist name</th>
                                <th>Last name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                           {
                            students.map(student => (
                                <tr key = {student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>
                                    <Link to={'details/' + student.id}>View</Link>
                                    <Link to={'edit/' +student.id}>Edit</Link>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                            ))
                           }
                        </tbody>
                    </table>
                )

            }
        </div>
    )
}

export default Main;
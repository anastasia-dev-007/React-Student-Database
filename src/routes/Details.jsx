import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStudentById } from "../students.service";

function Details() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        setStudent(getStudentById(+id)); //transmitem id in form numerica de asta punem "+"
    }, [id]);

    return (
        <div>
            <header>
                <Link to={"/"}>Back</Link>
                <h3>Details:</h3>
            </header>

            {//student && ( ) - insemnca ca noi afisam ceva doar daca studentul exista!
                student && (
                    <div>
                        <p>First name: {student.firstName}</p>
                        <p>Last name: {student.lastName}</p>
                        <h4>Objects:</h4>
                        {
                            student.objects.map((object, index) => (
                                <p key = {index}>{object.name}: {object.marks.join()}</p>//.join() - este metoda care va afisa sub forma de string rezultatul
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Details;
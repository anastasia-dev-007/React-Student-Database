import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStudentById, saveStudent } from "../students.service";

function Edit() {
    const { id } = useParams();
    const [fieldsValue, setFieldsValue] = useState(null); // acest state va fi utilizat pentru a lucra cu fromularul
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    //useEffect pentru a scoate utilizatorul dupa ID, vom executa functia atunci cand id isi modifica valoarea 
    useEffect(() => {
        const item = getStudentById(+id);//il parsam in int pentru ca era string initial

        setFieldsValue(item);
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFieldsValue({ ...fieldsValue, [name]: value });
    };

    const handleSave = () => {
        if (!fieldsValue.firstName || !fieldsValue.lastName) {//daca nu avem fname sau lname
            setMessage('Please fill in form fields!');
        } else {
            saveStudent(fieldsValue);
            setMessage('Student has been saved!');

            setTimeout(() => navigate('/'),1000);//('/') asta am indicat unde vrem sa mergem noi, in cazul nostru main page. Peste o sec dupa save noi vom fi redirectionati pe main page
        }

    };

    const handleReset = () => {
        setFieldsValue(getStudentById(+id));
    };


    return (
        <div>
            <header>
                <Link to={"/"}>Edit</Link>
                <h3>{id === 'null' ? 'Add' : 'Edit'} student!</h3>
            </header>


            {
                fieldsValue && (
                    <>
                        {message && <p>{message}</p>}
                        <div>
                            <input type="text" placeholder="First Name" name="firstName" value={fieldsValue?.firstName} onChange={handleChange} />
                        </div>

                        <div>
                            <input type="text" placeholder="Last Name" name="lastName" value={fieldsValue?.lastName} onChange={handleChange} />
                        </div>

                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleReset}>Reset</button>
                    </>
                )
            }
        </div>
    )
}
export default Edit;
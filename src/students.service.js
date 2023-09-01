const students = [
    {
        id: 1,
        firstName: 'Radu',
        lastName: 'Balan',
        objects: [
            {
                name: 'biology',
                marks: [7, 8, 9, 10],
            },
            {
                name: 'mathematics',
                marks: [8, 9, 10],
            }
        ]
    },
    {
        id: 2,
        firstName: 'Ion',
        lastName: 'Valcea',
        objects: [
            {
                name: 'biology',
                marks: [9, 8, 9, 10],
            },
            {
                name: 'mathematics',
                marks: [8, 9, 10],
            }
        ]
    },
    {
        id: 3,
        firstName: 'Ana',
        lastName: 'Mars',
        objects: [
            {
                name: 'biology',
                marks: [79, 10],
            },
            {
                name: 'mathematics',
                marks: [10, 10],
            }
        ]
    }
];

export const getStudents = () => {
    return students;
}

//cream structura generala pentru a adauga aici studenti noi
export const getStudentById = (id) => {
    const foundItem = students.find(student => student.id === id);
    const defaultItem = {
        id: null,
        firstName: '',
        lastName: '',
        objects: [
            {
                name: 'biology',
                marks: [],
            },
            {
                name: 'mathematics',
                marks: [],
            }
        ]
    };
    return foundItem ? foundItem : defaultItem;
}

//cream o functie car eva adauga student in lista initiala, dar va si modifica studentul existent daca este cazul. Acum trebuie sa verificam daca studentul are id, atunci trebuie sa il gasim si sa rescriem proprietatile lui cu ccea ce primim aici, cee ace insemana ca el a fost modificat, iar daca id este null, atunci trebuie sa setam un nou atribut id si sa il adaugam in lista
export const saveStudent = (student) => {
    if (!student.id) {//daca nu avem asa student
        student.id = students.length + 1;
        students.push(student);
    } else {
        const studentIndex = students.findIndex(item => item.id === student.id);

        students[studentIndex] = student;
    }
}

//aceatsa functie va gasiindexul studentului si il va sterge prin splice -anume item de pe acel index
export const deleteStudent = (id) => {
    const foundIndex = students.findIndex(student => student.id === id);

    if (foundIndex > -1) {
        students.splice(foundIndex, 1);
    }
}
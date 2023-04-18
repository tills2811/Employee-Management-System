import { useState } from 'react';
import Swal from 'sweetalert2';
import { employeesData } from '../../data';
import Add from './Add';
import Edit from './Edit';
import Header from './Header';
import List from './List';

const Dashboard = () => {

    const [employees, setEmployees] = useState(employeesData);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setselectedEmployee] = useState(null);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setselectedEmployee(employee);
        setIsEditing(true);
    }



    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'You will not be able to recover this employee!',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete this employee!',
            cancelButtonText: 'No, keep this employee',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Employee Deleted',
                    text: `Employee ${employee.firstName} ${employee.lastName} deleted successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        })
    }


    return (
        <div className='container'>

            {/* List  */}

            {
                !isAdding && !isEditing && (
                    <>
                        <Header setIsAdding={setIsAdding} />
                        <List
                            employees={employees}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </>
                )}

            {/* Add */}

            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}

            {/* Edit */}

            {
                isEditing && (
                    <Edit
                        employees={employees}
                        setEmployees={setEmployees}
                        selectedEmployee={selectedEmployee}
                        setIsEditing={setIsEditing}
                    />
                )
            }

        </div>
    )
}

export default Dashboard
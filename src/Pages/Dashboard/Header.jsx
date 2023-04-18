

const Header = ({ setIsAdding }) => {
    return (
        <header>
            <h1>
                Employee Management System
            </h1>
            <button style={{ marginBottom: "40px" }} className="round-button" onClick={() => setIsAdding(true)}>Add Employee</button>
        </header>
    )
}

export default Header
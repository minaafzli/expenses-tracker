import { Link } from 'react-router-dom';
function MainNavigation() {
    return (
        <header>
        <nav>
            <ul className="flex  gap-4 p-4 text-zinc-400 shadow-md content-center justify-center ">
                <li className='hover:text-gray-500'><Link to="/">Dashboard</Link></li>
                <li className='hover:text-gray-500'><Link to="/analytics">Analytics</Link></li>
                <li className='hover:text-gray-500'><Link to="/addExpense">Add Expense</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default MainNavigation

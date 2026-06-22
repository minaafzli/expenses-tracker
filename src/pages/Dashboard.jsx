import {Link} from 'react-router-dom';

function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Homepage
            </h1>
            <Link to="/analytics">
                <button className="bg-amber-200 text-black p-2 rounded-md m-2">
                    visit analytics page
                </button>
            </Link>
            <Link to="/addExpense">
                <button className="bg-amber-200 text-black p-2 rounded-md m-2">
                    visit add expense page
                </button>
            </Link>
        </div>
    )
    
}

export default DashboardPage;
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import setting from '../assets/setting.svg'
import notification from '../assets/notification.svg'
import profile from '../assets/profile.svg'

const navItems = [
 {
  title:"Dashboard",
  path:"/"
 },
 {
  title:"Analytics",
  path:"/analytics"
 },
 {
  title:"Add Expense",
  path:"/add-expense"
 }
]

function MainNavigation() {
    return (
        <header>
        <nav className='border-b bg-primary-light  border-gray-200 flex justify-between py-2 px-28 h-18 '>
            <img src={logo} alt="logo"/>
              
                <ul className='flex gap-4 items-center'> 
                   {navItems.map((item)=> (<li key={item.path}>
                   <Link
                to={item.path}
                className="
                px-4 py-2 
                font-bold
                text-text-muted
                rounded-xl
                hover:text-primary
                "
                >
                   {item.title}
                    </Link>
                   </li>))}
                </ul>

            <div className='flex'>
            <img src={setting} alt="setting"  className=' px-2 hover:scale-105 cursor-pointer w-10'/>
            <img src={notification} alt="notification"  className=' px-2 hover:scale-105 cursor-pointer w-10'/>
            <img src={profile} alt="profile" className='cursor-pointer px-2 w-12'/>
            </div>

        </nav>
        </header>
    )
}

export default MainNavigation

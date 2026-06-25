import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/logo.svg'
import setting from '../assets/setting.svg'
import notification from '../assets/notification.svg'
import profile from '../assets/profile.svg'
import bars from '../assets/bars.svg'
import close from '../assets/close.svg'

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

const [openMenu,setOpenMenu] = useState(false);


return (

<header>

<nav className="flex justify-between items-center md:px-12 border-b bg-primary-light border-gray-200 px-4 py-4">

<img 
src={logo} 
alt="logo"
className="w-28"
/>


<ul className="
hidden 
md:flex 
gap-4 
items-center
">

{
navItems.map((item)=>(
<li key={item.path}>

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

</li>
))
}

</ul>


<div className="
hidden
md:flex
">

<img 
src={setting}
className="px-2 hover:scale-105 cursor-pointer w-10"
/>

<img 
src={notification}
className="px-2 hover:scale-105 cursor-pointer w-10"
/>

<img 
src={profile}
className="cursor-pointer px-2 w-12"
/>

</div>

<button
onClick={()=>setOpenMenu(!openMenu)}
className="
md:hidden
text-3xl
cursor-pointer
"
>
{openMenu? <img src={close} alt="close" className='w-8'/> : <img src={bars} alt="bars" className='w-8'/>}
</button>

</nav>

{
openMenu && (

<div
className="
md:hidden
px-6
pb-4
 bg-primary-light
"
>


<ul className="
flex
flex-col
gap-3
">
{
navItems.map((item)=>(

<li key={item.path}>

<Link

onClick={()=>setOpenMenu(false)}

to={item.path}

className="
block
px-4
py-2
rounded-xl
font-bold
text-text-muted
hover:text-primary
"
>

{item.title}

</Link>
</li>

))
}
</ul>

<div className="
flex
gap-4
mt-4
">


<img 
src={setting}
className="w-8 cursor-pointer"
/>

<img 
src={notification}
className="w-8 cursor-pointer"
/>

<img 
src={profile}
className="w-10 cursor-pointer"
/>
</div>

</div>

)

}
</header>

)

}


export default MainNavigation;
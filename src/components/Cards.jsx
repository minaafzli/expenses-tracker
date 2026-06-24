const colorMap = {
  black: "text-black",
  primary: "text-primary",
};
function Cards({title , amount , amountColor='black' }) {
    return (
        <div >
            <div className="rounded-2xl border  border-gray-200 bg-primary-light  w-sm h-30 p-6">
            <p className="text-gray-600 text-center">{title}</p>

                <p className={`${colorMap[amountColor]} text-center font-bold text-3xl`}>{amount}</p>
               
            </div>
        </div>
    )
}

export default Cards

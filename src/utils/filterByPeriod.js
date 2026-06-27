export default function filterByPeriod(data, period){

const now = new Date();


return data.filter(item=>{

const date = new Date(item.date);


if(period === "thisMonth"){

return (
date.getMonth() === now.getMonth()
&&
date.getFullYear() === now.getFullYear()
)

}


if(period === "thisYear"){

return date.getFullYear() === now.getFullYear()

}


if(period === "lastMonth"){

const lastMonth = new Date(
now.getFullYear(),
now.getMonth()-1
)


return (
date.getMonth() === lastMonth.getMonth()
&&
date.getFullYear() === lastMonth.getFullYear()
)

}


if(period === "last12Months"){

const past = new Date();

past.setMonth(now.getMonth()-12);


return date >= past;

}


return true;

})

}
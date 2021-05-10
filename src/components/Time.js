import { useState, useEffect} from 'react'

export const DateTime = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="text-center text-danger fs-3">
            <p> {date.toLocaleDateString()} --  {date.toLocaleTimeString()} </p>

        </div>
    )
}

export default DateTime


// from : 
// https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556

import { useEffect, useState } from "react";

function FnClock() {
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect( () => {
        const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(id);
    }, []);

    return <footer>current time: {time}</footer>
}

export default FnClock;
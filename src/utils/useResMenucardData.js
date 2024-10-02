import { useEffect, useState } from "react"

let useResMenuCard = (resId) => {
    let [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])


    let fetchData = async () => {
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5113988&lng=78.3000662&restaurantId=${resId}`);
        let json = await data.json();
        setResInfo(json)
    }

    return resInfo

}

export default useResMenuCard;
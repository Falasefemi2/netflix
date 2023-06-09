import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type rowsProps = {
    rowID: string;
    title: string;
    fetchURL: string;
}

const Rows = ({rowID, title, fetchURL}: rowsProps) => {
    const {data: movies} = useQuery(["movies"], () => axios.get(fetchURL).then((response) => response.data.results))
    console.log(movies);
    
  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className=" relative flex items-center">
        <div>

        </div>
    </div>
    </>
  )
}

export default Rows
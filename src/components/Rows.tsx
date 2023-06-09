import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Movie from "./Movie";
import { useRef } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


type rowsProps = {
    rowID: string;
    title: string;
    fetchURL: string;
}



const Rows = ({ rowID, title, fetchURL }: rowsProps) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const { data: movies } = useQuery(["movies", fetchURL], () => axios.get(fetchURL).then((response) => response.data.results))
    // console.log(movies);

    const sliderLeft = () => {
        if (sliderRef.current !== null) {
          sliderRef.current.scrollLeft -= 500;
        }
      };
      
      const sliderRight = () => {
        if (sliderRef.current !== null) {
          sliderRef.current.scrollLeft += 500;
        }
      };

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className=" relative flex items-center group mx-auto max-w-[1200px]">
                <MdChevronLeft
                    onClick={sliderLeft}
                    className="bg-white left-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
                    size={40}
                />
                <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-normal scrollbar-hide relative"
                >
                    {movies?.map((item: any, id: number) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={sliderRight}
                    className="bg-white right-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
                    size={40}
                />
            </div>
        </>
    )
}

export default Rows
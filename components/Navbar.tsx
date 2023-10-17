
import BookMark from "./customBTN/BookMark";
import GoBack from "./customBTN/GoBack";
import GoForward from "./customBTN/GoForward";
import Reload from "./customBTN/Reload";

export default function Navbar() {
    return (
        <nav className="flex text-white items-center justify-center py-2 flex-col">
            <p>title</p>
            <form className="flex items-center justify-center w-full mt-2">
                <GoBack />
                <Reload />

                <input type="text" className="w-5/6 mx-4 rounded-xl outline-none bg-transparent/5  border-2 px-2 py-1" placeholder="Search in JSG" />

                <BookMark />
                <GoForward />
            </form>
        </nav>
    )
}


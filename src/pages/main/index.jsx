import { NavLink } from "react-router-dom";
import { TodoListO } from "@react-vant/icons";
export default function Main() {
    return (
        <div
            className="felx items-center h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://bing.img.run/m.php")' }}
        >
            <div className="flex flex-col justify-center items-center h-3/5">
                <div className="flex flex-col items-center rounded-2xl px-16 py-8 backdrop-filter backdrop-blur-lg">
                    <TodoListO className="text-violet-700 text-3xl font-bold" />
                    <p className="font-bold text-white">签到</p>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center h-1/5 m-2">
                <NavLink to={"/learn/learnword"} className="w-1/2 items-center rounded-2xl px-16 py-6 backdrop-filter backdrop-blur-lg">
                    <div className="text-lg font-bold text-white mr-4">
                        Learn
                    </div>
                    <div className="text-violet-700">160</div>
                </NavLink>
                <div className="m-1"></div>
                <div className="w-1/2 items-center rounded-2xl px-16 py-6 backdrop-filter backdrop-blur-lg">
                    <div className="text-lg font-bold text-white mr-4">
                        Review
                    </div>
                    <div className="text-violet-700">160</div>
                </div>
            </div>
        </div>
    );
}

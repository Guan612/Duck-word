import React from "react";
import { NavLink } from "react-router-dom";
import { Search, ArrowLeft, StarO, DeleteO, Ellipsis } from "@react-vant/icons";

function LearnNave() {
    return (
        <div className="flex justify-between items-center p-4 bg-transparent text-white text-xl">
            {/* 左侧部分 */}
            <div className="flex flex-row items-center">
                <NavLink to={"/Layout/main"}>
                    <ArrowLeft className="text-2xl font-bold" />
                </NavLink>

                <span className="ml-3 font-semibold">10/10</span>
            </div>
            {/* 中间部分留空 */}
            <div className="flex-grow"></div>
            {/* 右侧部分 */}
            <div className="flex flex-row items-center space-x-4">
                <StarO className="text-2xl" />
                <DeleteO className="text-2xl" />
                <Ellipsis className="text-2xl" />
            </div>
        </div>
    );
}

export default LearnNave;

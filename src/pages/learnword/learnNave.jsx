import React from "react";
import { Search, ArrowLeft, StarO, DeleteO, Ellipsis } from "@react-vant/icons";

function LearnNave() {
    return (
        <div className="flex text-white text-xl justify-around items-center">
            <div className="flex flex-row items-center ">
                <ArrowLeft />
                <span className="ml-3 ">10/10</span>
            </div>
            <div className="flex flex-row">
                <StarO />
                <DeleteO />
                <Ellipsis />
            </div>
        </div>
    );
}

export default LearnNave;

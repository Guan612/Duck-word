import { useState } from "react";
import { VolumeO } from "@react-vant/icons";

export default function WordCard() {
    const [wordData, setWordData] = useState({
        word: "destination",
        pronunciation: "/ˌdestɪˈneɪʃn/",
        definitions: [
            "命运；神意，命运之神",
            "差别，不同；卓越；特点；荣誉",
            "目的地，终点",
            "破坏，毁灭",
        ],
    });

    return (
        <div className="flex flex-col items-center p-4 bg-transparent text-white h-full">
            {/* 单词显示部分 */}
            <div className="flex flex-col items-center mt-8">
                <h1 className="text-5xl font-bold">{wordData.word}</h1>
                <div className="flex items-center mt-4">
                    <VolumeO className="text-2xl" />
                    <span className="ml-2 text-xl">
                        {wordData.pronunciation}
                    </span>
                </div>
                <p className="mt-4 text-gray-800">
                    先回想词义再选择，想不起来「看答案」
                </p>
            </div>
            {/* 单词定义部分 */}
            <div className="flex flex-col space-y-4 mt-8 w-full">
                {wordData.definitions.map((definition, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-10 rounded-2xl p-4 backdrop-filter backdrop-blur-md"
                    >
                        <span className="text-lg">n.</span>
                        <p>{definition}</p>
                    </div>
                ))}
            </div>
            {/* 底部操作按钮 */}
            <div className="flex justify-center mt-8">
                <button className="text-center text-red-500">看答案</button>
            </div>
        </div>
    );
}

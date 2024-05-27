import { useState } from "react";
import { Search, Toast } from "react-vant";
export default function SearchWord() {
    const [value, setValue] = useState("");
    return (
        <div className="flex flex-col">
            <div className="mt-3">
                <Search
                    value={value}
                    onChange={setValue}
                    placeholder="请输入搜索关键词"
                    showAction
                    onSearch={(val) => {
                        Toast(val);
                        setValue(val);
                    }}
                    onCancel={() => {
                        Toast("取消");
                        setValue("");
                    }}
                    onClear={() => {
                        Toast("清除");
                        setValue("");
                    }}
                    onClickInput={() => {
                        Toast("点击输入区域时触发	");
                    }}
                />
            </div>
            <div className="m-3">
                neotpnm
            </div>
        </div>
    );
}

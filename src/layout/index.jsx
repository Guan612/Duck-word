import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Tabbar } from "react-vant";
import { HomeO, Search, Contact, NewspaperO } from "@react-vant/icons";
export default function Layout() {
    const [name, setName] = useState("");

    return (
        <div>
            <Outlet />
            <div>
                <Tabbar value={name} onChange={(v) => setName(v)}>
                    <Tabbar.Item name="首页" icon={<HomeO />}>
                        <NavLink to="/layout/main">首页</NavLink>
                    </Tabbar.Item>
                    <Tabbar.Item name="查词" icon={<Search />}>
                        <NavLink>查词</NavLink>
                    </Tabbar.Item>
                    <Tabbar.Item name="单词本" icon={<NewspaperO />}>
                        单词本
                    </Tabbar.Item>
                    <Tabbar.Item name="我的" icon={<Contact />}>
                        <NavLink to='/layout/me'>我的</NavLink>
                    </Tabbar.Item>
                </Tabbar>
            </div>
        </div>
    );
}

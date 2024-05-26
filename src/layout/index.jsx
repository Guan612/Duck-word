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
                    <Tabbar.Item
                        name="首页"
                        icon={
                            <NavLink to="/layout/main">
                                <HomeO />
                            </NavLink>
                        }
                    >首页</Tabbar.Item>
                    <Tabbar.Item
                        name="查词"
                        icon={
                            <NavLink to="/layout/searchword">
                                <Search />
                            </NavLink>
                        }
                    >查词</Tabbar.Item>
                    <Tabbar.Item
                        name="单词本"
                        icon={
                            <NavLink to="/layout/wordtext">
                                <NewspaperO />
                            </NavLink>
                        }
                    >单词本</Tabbar.Item>
                    <Tabbar.Item
                        name="我的"
                        icon={
                            <NavLink to="/layout/me">
                                <Contact />
                            </NavLink>
                        }
                    >我的</Tabbar.Item>
                </Tabbar>
            </div>
        </div>
    );
}
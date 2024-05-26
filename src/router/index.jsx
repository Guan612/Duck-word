import {useRoutes, Navigate} from 'react-router-dom'

import Layout from '../layout'
import Main from '../pages/main'
import Home from '../pages/me'

const routes = [
    {
        path: '/',
        element: <Navigate to="/Layout/main" />,
    },
    {
        path: '/layout',
        element: <Layout />,
        children:[
            {
                path: 'main',
                label: '首页',
                element: <Main />,
            },
            {
                path: 'me',
                label: '我的',
                element: <Home />,
            }
        ]
    },
]

export default function Router() {
    return useRoutes(routes)
}
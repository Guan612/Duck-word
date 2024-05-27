import {Outlet} from 'react-router-dom'
export default function learnLayout() {
    return (
        <div
            className="felx h-screen items-center bg-cover bg-center"
            style={{ backgroundImage: 'url("https://bing.img.run/m.php")' }}
        >
            <div className="h-full backdrop-filter backdrop-blur-lg">
                <Outlet/>
            </div>
        </div>
    );
}

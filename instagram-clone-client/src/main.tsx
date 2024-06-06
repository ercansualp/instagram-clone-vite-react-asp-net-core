import ReactDOM from 'react-dom/client'
import "./assets/css/tailwind.css";
import {RouterProvider} from "react-router-dom";
import routes from "~/routes";
import {Provider} from "react-redux";
import store from "~/store";
import Authentication from "~/middlewares/authentication.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Authentication>
            <RouterProvider router={routes} />
        </Authentication>
    </Provider>
)

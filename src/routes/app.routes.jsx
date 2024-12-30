import { Route, Routes } from "react-router-dom";

import {App} from '../pages/App'
import { Saude } from "../pages/Saude";
import { Luto } from "../pages/Luto";
import { Plano } from "../pages/saude/Plano";
import { PlanoDetails } from "../pages/saude/PlanoDetails";
import { CentroClinico } from "../pages/saude/CentroClinico";
import { Ambulancias } from "../pages/saude/Ambulancias";
import { Funeraria } from '../pages/luto/Funeraria'
import {NotFound} from '../pages/NotFound'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/saude" element={<Saude/>} />
            <Route path="/luto" element={<Luto/>} />
            <Route path="/saude/plano" element={<Plano/>} />
            <Route path="/saude/planodetails" element={<PlanoDetails/>} />
            <Route path="/saude/centroclinico" element={<CentroClinico/>} /> 
            <Route path="/saude/ambulancias" element={<Ambulancias/>} /> 
            <Route path="/luto/funeraria" element={<Funeraria/>}/>

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}
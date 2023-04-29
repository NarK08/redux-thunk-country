import { Routes,Route } from "react-router-dom"
import { HeaderPages } from "./UI/HeaderPages"
import { MainPages } from "./UI/MainPages"
import { HomePages } from "./UI/HomePages"
import { Details } from "./UI/Details"
import { FootPages } from "./UI/FootPages"
import {NotFound} from "./UI/NotFound"
import "./index.css"


const ReduxMiddProj = () => {



  return (
    <>
    <HeaderPages />
    <MainPages>
        <Routes>
            <Route exact path="/" element= {
                <HomePages />
            } />
            <Route  path="/country/:name/" element={<Details />} />
            <Route path="*" element ={<NotFound />} />
        </Routes>
    </MainPages>
    <FootPages />
      
    </>
  )
}

export default ReduxMiddProj

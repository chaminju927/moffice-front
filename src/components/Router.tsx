import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table1Component from './Table1Component';
import Table2Component from './Table2Component';
import ModalComponent from './ModalComponent';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                 <Routes>  
                    <Route path="/" Component={Table1Component} />
                    <Route path="/2" Component={Table2Component} />
                    <Route path="/new" Component={ModalComponent} />     
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default Router;
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PizzaPage from '../pages/PizzaPage';
import PizzaListPage from '../pages/PizzaListPage';
import SubmitPage from '../pages/SubmitPage';
import OrderPage from '../pages/OrderPage';
import ErrorPage from '../pages/ErrorPage';
import SummaryPage
 from '../pages/SummaryPage';
const Page = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pizzas" component={PizzaListPage} />
        <Route path="/pizza/:id" component={PizzaPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/summary" component={SummaryPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;
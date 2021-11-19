import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Videos from "./components/Videos/Videos";
import Payment from "./components/Payment/Payment";
import PaymentFields from "./components/Payment/PaymentFields";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import PaymentFail from "./components/Payment/PaymentFail";
import {useDispatch, useSelector} from 'react-redux';
import { getPayments } from "./actions/emails";

export default function App() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  

  useEffect(() => {
  }, []);



  // useEffect(() => {
  //     setData(payments);
  //     console.log("Data: ", payments);
  // }, []);

  // const data = [
  //   {
  //     name: "Hasan Elmi",
  //     email: "hasanelmi@gmail.com",
  //     wordCount: 50,
  //     script:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam quos commodi rerum, qui doloribus fuga eligendi dolore? Magnam eum voluptas quod dignissimos? Ex dicta id assumenda fuga voluptas animi? Laborum, hic distinctio deserunt reiciendis tenetur, blanditiis neque laboriosam atque et architecto dolore excepturi ducimus! Error sunt eum enim accusantium nihil nisi est sint, itaque dolor odit ea sequi culpa ex ad saepe inventore asperiores corrupti, qui consequatur eligendi vero!",
  //     price: 20,
  //     ref: "beta1",
  //   },
  //   {
  //     name: "John Smith",
  //     email: "Johnsmit@gmail.com",
  //     wordCount: 50,
  //     script:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam quos commodi rerum, qui doloribus fuga eligendi dolore? Magnam eum voluptas quod dignissimos? Ex dicta id assumenda fuga voluptas animi? Laborum, hic distinctio deserunt reiciendis tenetur, blanditiis neque laboriosam atque et architecto dolore excepturi ducimus! Error sunt eum enim accusantium nihil nisi est sint, itaque dolor odit ea sequi culpa ex ad saepe inventore asperiores corrupti, qui consequatur eligendi vero!",
  //     price: 20,
  //     ref: "beta2",
  //   },
  // ];

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/videos" exact>
          <Videos />
        </Route>
        <Route path="/enter" exact>
          <PaymentFields />
        </Route>
        {/* 
        {data.map((item) => (
          <Route path={`/beta/${item.ref}`}>
            <Payment data={item} />
          </Route>
        ))}

        {data.map((item) => (
          <Route path={`/${item.ref}/success`}>
            <PaymentSuccess data={item} />
          </Route>
        ))}
        {data.map((item) => (
          <Route path={`/${item.ref}/fail`}>
            <PaymentFail data={item} />
          </Route>
        ))} */}
      </Switch>
    </Router>
  );
}

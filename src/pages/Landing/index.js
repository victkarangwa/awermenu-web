import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Timeline } from "antd";
import FoodIllus from "assets/images/food-illus.png";
import MainHeader from "components/MainHeader";
import "./style.scss";
import SearchInput from "components/SearchInput";
import { set } from "store/dist/store.modern.min";
import { useDispatch, useSelector } from "react-redux";
import { subscribe } from "redux/action";

const LandingPage = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const {
    core: { loading, userSubscription },
  } = useSelector(({ core: { loading, userSubscription } }) => ({
    core: { loading, userSubscription },
  }));

  useEffect(() => {
    if (userSubscription?.status !== "fail") {
      setInput("");
      setError("");
    }
    if (userSubscription?.status === "fail") {
      setError(userSubscription?.message);
    }
  }, [userSubscription]);

  const handleEmail = (email) => {
    subscribe({ email })(dispatch);
  };

  return (
    <div>
      <Helmet title="coming soon" />
      <MainHeader />

      <div className="m-body">
        <div className="d-flex flex-row justify-content-around">
          <div className="m-text">
            <label className="highlight">Find</label> your favorite restaurent{" "}
            <label className="highlight"> menu</label> anytime, anywhere.
            <div className="services">
              <Timeline >
                <Timeline.Item className="service-item" color="#FE5734">
                  Find nearby/favorite restaurants
                </Timeline.Item>
                <Timeline.Item className="service-item" color="#FE5734">
                  Browse through their menus
                </Timeline.Item>
                <Timeline.Item className="service-item" color="#FE5734">
                  Search for affordable menu options
                </Timeline.Item>
                <Timeline.Item className="service-item" color="#FE5734">Leave them feedback</Timeline.Item>
              </Timeline>
            </div>
            <div className="my-2">
              {error ? (
                <span className="text-warning error-text">{error}</span>
              ) : null}
              <SearchInput
                onSearch={handleEmail}
                placeholder="Enter your email"
                btnText="Get Early Access"
                loading={loading}
                input={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>

          <img
            width="500px"
            height="500px"
            src={FoodIllus}
            alt="food illustration"
            className="illisImg"
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;

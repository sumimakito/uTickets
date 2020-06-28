import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";
import CardFlow from "../../components/CardFlow/CardFlow";
import SubtotalView from "../../components/SubtotalView/SubtotalView";
import TicketList from "../../components/TicketList/TicketList";
import { RootState } from "../../redux/reducers";
import "./Overview.scss";

const OverView: React.FC = () => {
  const { tickets, isLoading } = useSelector(
    (state: RootState) => state.tickets
  );

  return (
    <div className="Overview">
      <CardFlow title="uTickets" subtitle="展会与活动票务中心">
        {isLoading ? (
          <div className="loader-container">
            <Loader active size="medium">
              数据正在载入
            </Loader>
          </div>
        ) : (
          <React.Fragment>
            <TicketList tickets={tickets} />
            <SubtotalView />
          </React.Fragment>
        )}
      </CardFlow>
    </div>
  );
};

export default OverView;

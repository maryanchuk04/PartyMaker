import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { OrderService } from "../../../../services/OrderService";
import TabsWrapper from "../../../ui/TabsWrapper";
import DetailsContent from "./DetailsContent";
import { ClipLoader } from "react-spinners";
const OrderDetailsPage = () => {
  const [value, setValue] = useState(0);
  const service = new OrderService();
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setValue(0);
    async function getOrderInfo() {
      const res = await service.getOrderById(id);
      if (res.ok) {
        const responce = await res.json();
        setOrder(responce);
        setLoading(false);
      }
    }
    (async () => {
      await getOrderInfo();
    })();
  }, []);

  const handleSubmitRequest = () => {};

  useEffect(() => {}, [value]);

  return (
    <div className="container h-100 d-flex flex-column">
      {loading ? (
        <ClipLoader size={200} color={"#1aa94b"} className="m-auto" />
      ) : (
        <div className="h-100">
          <h1 className="text-center pt-4">
            Order{" "}
            {order.orderStatus === 0 && (
              <span
                style={{
                  backgroundColor: "gray",
                  padding: "5px",
                  borderRadius: "20px",
                  color: "white",
                }}
              >
                Requested
              </span>
            )}
            {order.orderStatus === 1 && (
              <span
                style={{
                  backgroundColor: "#1aa94b",
                  padding: "5px",
                  borderRadius: "20px",
                  color: "white",
                }}
              >
                InProgress
              </span>
            )}
            {order.orderStatus === 2 && (
              <span
                style={{
                  backgroundColor: "red",
                  padding: "5px",
                  borderRadius: "20px",
                  color: "white",
                }}
              >
                Finished
              </span>
            )}
          </h1>

          <TabsWrapper items={order?.items} value={value} setValue={setValue} />
          <div>
            
            <DetailsContent element={order?.items[value]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;

import React, { useState } from "react";
import useMedia from "use-media";
import { ContactUsService } from "../../../services/ContactUsService";
import "./contacts.css";
import SampleButton from "../../ui/SampleButton";
import AlertWrapper from "../../ui/Alert";

const Contacts = () => {
  const [show, setShow] = useState(false);
  const service = new ContactUsService();
  const media = useMedia({ maxWidth: 600 });
  const [state, setState] = React.useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await service.sendMessage(state);
    if (res.ok) {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
      e.target.reset();
    }
  };

  return (
    <>
      {!media ? (
        <div
          className="d-flex h-100 "
          style={{
            background:
              "url('https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/bg-14-1.jpg?id=422')",
            backgroundSize: "cover",
            backgroundPositionX: "center",
          }}
        >
          <div
            className={`container w-100 m-auto h-75 p-0 d-flex box-shadow-design`}
          >
            <div className="w-50 rounded-left">
              <img
                src="https://i.ibb.co/vDP85Hf/wedding-party.jpg"
                alt=""
                className="w-100 h-100 rounded-left"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px 0 0 10px",
                }}
              />
            </div>
            <form
              className="contacts w-50 p-5 d-flex flex-column"
              onSubmit={handleSubmit}
            >
              <h1
                className="display-1 text-center"
                style={{ fontWeight: "800" }}
              >
                Contact Us
              </h1>
              <div className="m-auto h-100">
                <div className="row h-25">
                  <div className="col">
                    <input
                      className="contact-input"
                      placeholder="Your e-mail"
                      type="email"
                      required
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="col">
                    <input
                      className="contact-input"
                      placeholder="Your name"
                      onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <textarea
                  className="h-50"
                  placeholder="Your message..."
                  required
                  onChange={(e) =>
                    setState({ ...state, message: e.target.value })
                  }
                ></textarea>
                <div className="d-flex text-rigth w-100 justify-content-end">
                  <SampleButton className="m-0 mt-3" type="submit">
                    Continue
                  </SampleButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div
          className="d-flex h-100 "
          style={{
            background:
              "url('https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/bg-14-1.jpg?id=422')",
            backgroundSize: "cover",
            backgroundPosition: "45%",
          }}
        >
          <div
            className={`container w-100 m-auto "h-50" p-0 d-flex flex-column `}
          >
            <div className="container">
              <h1
                className="display-1 text-right"
                style={{ fontWeight: "800" }}
              >
                Contact Us
              </h1>
            </div>
            <form
              className="contacts container m-auto d-flex flex-column"
              onSubmit={handleSubmit}
            >
              <div className="m-auto h-100">
                <div className="row h-25">
                  <div className="col">
                    <input
                      className="contact-input"
                      placeholder="Your e-mail"
                      type="email"
                      required
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="col">
                    <input
                      className="contact-input"
                      placeholder="Your name"
                      onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <textarea
                  className="h-75"
                  placeholder="Your message..."
                  required
                  onChange={(e) =>
                    setState({ ...state, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="d-flex w-100 ">
                <SampleButton className="mt-3 w-100" type="submit">
                  Confirm
                </SampleButton>
              </div>
            </form>
          </div>
        </div>
      )}
      {show ? (
        <AlertWrapper
          message={"Your message has been successfully sent"}
          handleClose={() => setShow(false)}
        />
      ) : null}
    </>
  );
};

export default Contacts;

import React from "react";
import "./Slide2.scss";

const Slide2 = () => {
  return (
    <div className="slide-container-2">
      <div className="slide-outer">
        <div className="slide-inner-1">
          <div className="pancake">
            <svg
              viewBox="0 0 198 199"
              width="24"
              color="#f4eeff"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z"
                fill="#633001"
              ></path>
              <path
                d="M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z"
                fill="#D1884F"
              ></path>
              <path
                d="M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z"
                fill="#FEDC90"
              ></path>
              <path
                class="eye"
                d="M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z"
                fill="#633001"
              ></path>
            </svg>
            <div className="slide-header">PCS v3 Migration</div>
          </div>
          <div className="textarea">
            Migrate to continue farming CAKE rewards and earning trading fees.
          </div>
          <div className="buttons">
            <button className="slide2-button1">
              <div>Proceed 👈</div>
            </button>
            <button className="slide2-button2">
              <div>Guide</div>
            </button>
          </div>
        </div>
        <div className="slide-inner-2">
          {/* <span className='slide-inner-2-1'>
                <span className='slide-inner-2-2'>
                  <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e" alt="empty" />
                </span>
                <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfarmV3MigrationMobileBunny.84b46ee9.png&w=640&q=75" alt="slide2" />
              </span> */}
          <img
            src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfarmV3MigrationMobileBunny.84b46ee9.png&w=640&q=75"
            alt="slide2"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide2;

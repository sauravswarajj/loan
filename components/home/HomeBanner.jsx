import Link from "next/link";
// import Partners from "./Partners";

const HomeBanner = () => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area section-text justify-content-center">
                    <h4 className="sub-title">Simple. Transparent. Secure</h4>
                    <h1 className="title">Empowering Your Financial Future</h1>
                    <p className="xlr">
                    Seamless, Fast, and Transparent Loan Solutions – Tailored for Your Needs.
                    </p>
                  </div>
                  <div className="bottom-area">
                    <Link href="/register" className="cmn-btn">
                    Get Started Today
                    </Link>
                    <Link href="/contact" className="cmn-btn second">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners slider here */}
      {/* <Partners /> */}
    </section>
  );
};

export default HomeBanner;

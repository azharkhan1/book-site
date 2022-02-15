import React, { Component } from "react";
import Header from "../../components/Header/Header";
import sectionImage from "../../assets/img.png";
import "./home.css";
import BasicTable from "../../components/Table/Table";
import initialData from "../../data/MOCK_DATA.json";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  state = {
    value: "Search",
    data: initialData,
  };

  handleChange(e) {
    this.setState({ value: e });

    let prevData = [...this.state.data];
    if (e.target.value == "All") {
      return this.setState({ data: initialData });
    }
    prevData = initialData.filter((value) => {
      if (value.country.toLowerCase() == e.target.value.toLowerCase()) {
        return value;
      }
    });
    this.setState({ data: prevData });
  }
  render() {
    return (
      <div className="main__container">
        <Header />
        <div className="container main">
          <div className="main__section">
            <div className="row">
              <div className="col-md-6">
                <div className="main__section__heading__container">
                  <h2 className="main-section-heading">
                    Where Students shop for <br />
                    great deals!
                  </h2>
                  <div className="main-section-paragraph-container">
                    <p className="main-section-paragraph mx-auto">
                      Using MRI scansm reserachers have confirmed that reading
                      involves a complex network of circuits and signals in the
                      brain. As your reading ability matures, those networks get
                      straonger and more sophisticated.
                    </p>
                    <a href="#" class="myButton mx-auto text-center">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={sectionImage} className="section-image" />
              </div>
            </div>
          </div>
          <div className="search__section">
            <div className="search__input">
              <h4 className="search__heading">Country Listing</h4>
              <div class="select">
                <select onChange={(e) => this.handleChange(e)}>
                  <option value="All">All</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Canada">Canada</option>
                  <option value="Usa">Usa</option>
                </select>
              </div>
            </div>
            <div className="search__result">
              <BasicTable data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

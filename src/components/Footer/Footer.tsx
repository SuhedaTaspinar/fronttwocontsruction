import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className="footer-bottom">
          <div className="container">
            <div className="row ">
              <p className="col-lg-12 footer-text ">
                Copyright &copy;
                2024 all
                rights reserved | This template is made with{" "}
                <a href="https://github.com/SuhedaTaspinar" target="_blank">
                  SuhedaTaspinar
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
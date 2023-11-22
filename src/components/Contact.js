const Contact = () => {
    return (
      <section id="contact">
        <div className="contact">
          <div className="small-container">
            <h2 className="title-contact">Contact</h2>
            <div className="row">
              <div className="contents">
                <div className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/nadiilapermatasari/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/081222732585">
                        <i className="fa fa-whatsapp"></i> WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="form">
                  <form action="">
                    <input type="text" placeholder="Name" className="box" />
                    <input type="text" placeholder="Email" className="box" />
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      className="box message"
                      placeholder="Message"
                    ></textarea>
                    <input type="submit" className="btn" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
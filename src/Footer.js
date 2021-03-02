import { Link } from "react-router";
const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        background: "#62a5a1",
        textAlign: "center",
        height: "3em",
        padding: "0.5em"
      }}
    >
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <p>Copyright &copy; FOODANISTA. All Rights Reserved.</p>
        </p>
      </section>
    </div>
  );
};
export default Footer;

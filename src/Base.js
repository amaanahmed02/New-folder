import Header from "./Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="footer">
        Coded by: <span>Sania Ahmed</span>
        <div className="copy">&copy; 2023</div>
      </div>
    </>
  );
};

export default Base;

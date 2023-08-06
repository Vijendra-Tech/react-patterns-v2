const printAllProps = (Component) => {
  return (props) => {
    // Jsx code
    return <Component {...props} />;
  };
};

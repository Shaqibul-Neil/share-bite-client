const Container = ({ children, className }) => {
  return (
    <div className={`${className} container mx-auto lg:px-10 md:px-6 px-3`}>
      {children}
    </div>
  );
};

export default Container;

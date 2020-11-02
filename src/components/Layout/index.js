const Layout = (props) => {
  return ( 
    <div>
      <Header>
        {props.children}
      </Header>
    </div>
  );
}
 
export default Layout
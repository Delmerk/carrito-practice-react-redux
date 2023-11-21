1. import { Provider } from "react-redux";
   import { createStore } from "redux"; //una funtion
   import reducer from "./reducers/tiendaReducer";

2. conectarnos al estado global:
   import { connect } from "react-redux";
3. al exportar el componente:
   export default connect(mapStateToProps, mapDispatchToProps)(Productos);

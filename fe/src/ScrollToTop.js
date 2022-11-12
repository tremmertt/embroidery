// import React, { Fragment, useEffect } from "react";
// import { withRouter } from "react-router-dom";

// const scrollToTop = ({ history, children }: { history: any; children: any }) => {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);

//   const router = (<Fragment>{children}</Fragment>) as any;
//   return withRouter(router);
// };

// export default scrollToTop;

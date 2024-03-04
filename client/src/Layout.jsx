import Header from "./Header";
import {Outlet} from "react-router-dom"

export default function Layout() {
    return(
        <div className="py-4 px-8  flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    );
}

// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
// import LinearStepper from "./pages/LinearStepper.jsx";


// export default function Layout() {
//   return (
//     <>
//       <CssBaseline />
//       <div className="py-4 px-8 flex flex-col min-h-screen">
//         <Header />
//         <Outlet />
//       </div>
//       <Container component={Box} p={4}>
//         <Paper component={Box} p={3}>
//           <LinearStepper />
//         </Paper>
//       </Container>
//     </>
//   );
// }

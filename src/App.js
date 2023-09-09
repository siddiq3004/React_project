// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";

import "./app.css";
import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";
import Language from "./pages/Program Lang/Language";
import Feedback from "./pages/Feedback/Feedback";
import Applications from "./pages/Applications/Applications";
import Technology from "./pages/Technology/Technology";
import {Route, Routes } from "react-router-dom";

// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      {/* <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <div className="text-3xl text-red-800">
            <Navbar />
            <UserButton/>
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
          <Index />
          <Home />
          <Languages />
          <Feedback />
          <Technology /> */}

        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/language" element={<Language />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/technology" element={< Technology />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
    </>
  );
}

export default App;

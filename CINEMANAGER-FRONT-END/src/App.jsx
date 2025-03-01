import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import ForgetPassword from "./Pages/Auth/ForgetPassword.jsx";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx"
import SessionDetails from "./Pages/Details/SessionDetails.jsx";
import MovieDetails from "./Pages/Details/MovieDetails.jsx";
import Reservation from "./Pages/Reservations/Reservation.jsx";
import MyReservation from "./Pages/Reservations/MyReservation.jsx";
import NewPassword from "./Pages/Auth/NewPassword.jsx";
import Categories from "./Pages/Admin/Categories.jsx";
import Movies from "./Pages/Admin/Movies.jsx";
import Rooms from "./Pages/Admin/Rooms.jsx";
import Favorie from "./Pages/Home/Favorie.jsx";
import Sessions from "./Pages/Admin/Session.jsx";
import {ToastContainer} from "react-toastify";
import ProtectedRoute from "./Hooks/Auth/ProtectedRoute.jsx";
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';


function App() {

  return (
        <div>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/UseForgetPassword" element={<ForgetPassword />} />
              <Route path="/NewPassword/:token" element={<NewPassword />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/sessionDetails/:id"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <SessionDetails />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/movieDetails/:id"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <MovieDetails />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reservation"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <Reservation />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/myReservation"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <MyReservation />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/myFavorie"
                    element={
                        <ProtectedRoute allowedRoles={["client"]}>
                            <Favorie />
                        </ProtectedRoute>
                    }
                />


                <Route path="/admin/dashboard" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Dashboard />
                        </ProtectedRoute>
                }
                />
                <Route path="/admin/addCategory" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Categories />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/movies" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Movies />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/rooms" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Rooms />
                        </ProtectedRoute>
                    }
                />
                <Route path="/admin/sessions" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Sessions />
                        </ProtectedRoute>
                    }
                />
          </Routes>
        </div>
  );
}

export default App

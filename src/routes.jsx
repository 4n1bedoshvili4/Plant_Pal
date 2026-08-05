import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import MyPlants from "./pages/MyPlants/MyPlants";
import Reminders from "./pages/Reminders/Reminders";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PlantDetails from "./pages/PlantDetails/PlantDetails";
import Landing from "./pages/Landing/Landing";

function AppRoutes() {

    return (

            <Routes>
                <Route
                    path="/"
                    element={<Landing />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
            
            

                <Route 
                    path="/register" 
                    element={<Register />} 
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute>
                            <Search />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/plants"
                    element={
                        <ProtectedRoute>
                            <MyPlants />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reminders"
                    element={
                        <ProtectedRoute>
                            <Reminders />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                /> 
                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />
                <Route
                    path="/plant/:pageid"
                    element={
                        <ProtectedRoute>
                            <PlantDetails />
                        </ProtectedRoute>
                    }
                />
            </Routes>


    );
}


export default AppRoutes;
import OnlineClass from "../pages/ManagesOnlineClass/OnlineClass";
import ManageTraining from "../pages/ManagesTraining/ManageTraining";
import LevelDetail from "../pages/ManagesTraining/LevelDetail";
import WorkoutDetail from "../pages/ManagesTraining/WorkoutDetail";
import Invoices from "../pages/Invoices/Invoices";
import ManagesFeedback from "../pages/ManagesFeedback/ManagesFeedback";
import ForgotPassword from "../pages/Login/Forgot Password/ForgotPassword";
import ResetPassword from "../pages/Login/Reset Password/ResetPassword";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/DashboardPages";

export const routes = [

    {path : '/dashboard', element : Dashboard},
    {path : '/feedback', element : ManagesFeedback},
    {path : '/onlineClass', element : OnlineClass},
    {path : '/training', element : ManageTraining},
    {path : 'levelDetail/:level', element : LevelDetail},
    {path : 'levelDetail/:level/:id', element : LevelDetail},
    {path : 'levelDetail/:level/:id/workoutDetail', element :WorkoutDetail},
    {path : 'levelDetail/:level/:id/workoutDetail/:idWorkout', element :WorkoutDetail},
    {path : '/invoices', element : Invoices},
    {path : '/managesFeedback', element : ManagesFeedback},
    {path : '/forgotPassword', element : ForgotPassword},
    {path : '/resetPassword', element : ResetPassword},
    {path : '/', element : Login},
]


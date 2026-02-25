import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

// Add a small protected-route wrapper
function RequireAuth({ isAuthenticated, children }) {
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}
	return children;
}
  
export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				{/* Redirect root based on auth state */}
				<Route
					path="/"
					element={
						<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />
					}
				/>

				{/* Public routes */}
				<Route
					path="/login"
					element={<Login onLogin={() => setIsAuthenticated(true)} />}
				/>
				<Route
					path="/signup"
					element={
						// If Signup currently expects goToLogin to switch pages,
						// consider updating Signup to use useNavigate. For now pass a no-op.
						<Signup goToLogin={() => { /* optional: update Signup to use navigate */ }} />
					}
				/>

				{/* Protected route */}
				<Route
					path="/dashboard"
					element={
						<RequireAuth isAuthenticated={isAuthenticated}>
							<Dashboard onLogout={() => setIsAuthenticated(false)} />
						</RequireAuth>
					}
				/>

				{/* Fallback */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

import { useNavigate } from 'react-router-dom';

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected page 🚀</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

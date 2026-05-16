
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // სუპერ მარტივი mock რეგისტრაცია
    setTimeout(() => {
      const fakeUser = {
        id: Date.now(),
        name: form.name || "Andria Parulava",
        email: form.email || "andrikoparulava@gmail.com"
      };
      
      login(fakeUser, "fake-token-12345");
      navigate('/'); // Dashboard-ზე გადასვლა
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">რეგისტრაცია</h2>
        <p className="text-center text-gray-500 mb-8">ტესტის რეჟიმი (backend-ის გარეშე)</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="სრული სახელი"
            className="w-full p-4 border border-gray-300 rounded-xl mb-4"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="ელ.ფოსტა"
            className="w-full p-4 border border-gray-300 rounded-xl mb-4"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="პაროლი"
            className="w-full p-4 border border-gray-300 rounded-xl mb-6"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium text-lg transition"
          >
            {loading ? 'იტვირთება...' : 'რეგისტრაცია'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          გაქვს ანგარიში? <Link to="/login" className="text-blue-600 font-medium">შესვლა</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
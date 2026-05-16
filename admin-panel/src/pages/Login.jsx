
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  // შენი ემაილები აქ ჩაწერე
  const emailSuggestions = [
    "შენი@gmail.com",
    "შენი@yahoo.com",
    "შენი@outlook.com",
    "admin@shenikompania.ge",
    "info@shenikompania.ge",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!form.email.includes('@')) {
      setError('შეიყვანეთ სწორი ელ.ფოსტა');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        navigate('/');
      } else {
        setError(data.message || 'ლოგინი ვერ მოხერხდა');
      }
    } catch (err) {
      setError('სერვერთან კავშირი ვერ მოხერხდა');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <h2 className="text-3xl font-bold text-center mb-8">შესვლა</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="relative">
          <input
            type="email"
            placeholder="ელ.ფოსტა"
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            required
          />

          {/* Suggestions Dropdown */}
          {showSuggestions && emailSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
              {emailSuggestions.map((email, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setForm({ ...form, email });
                    setShowSuggestions(false);
                  }}
                >
                  {email}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <input
          type="password"
          placeholder="პაროლი"
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          {loading ? 'იტვირთება...' : 'შესვლა'}
        </button>

        <p className="text-center mt-6">
          არ გაქვს ანგარიში? <Link to="/register" className="text-blue-600 font-medium">რეგისტრაცია</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
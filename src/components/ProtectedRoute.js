import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
    // Check if user is authenticated
    const isAuthenticated = () => {
        const session = localStorage.getItem('userSession');
        if (!session) return false;

        try {
            const sessionData = JSON.parse(session);
            // Check if session is still valid (not expired)
            if (sessionData.expiresAt && Date.now() > sessionData.expiresAt) {
                localStorage.removeItem('userSession');
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    };

    // Prevent caching for protected routes
    useEffect(() => {
        // Add cache control headers via meta tags
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Cache-Control';
        meta.content = 'no-cache, no-store, must-revalidate';
        document.head.appendChild(meta);

        const pragma = document.createElement('meta');
        pragma.httpEquiv = 'Pragma';
        pragma.content = 'no-cache';
        document.head.appendChild(pragma);

        const expires = document.createElement('meta');
        expires.httpEquiv = 'Expires';
        expires.content = '0';
        document.head.appendChild(expires);

        // Disable browser back/forward cache (bfcache)
        window.history.scrollRestoration = 'manual';

        // Handle page show event (fires when page is loaded from cache)
        const handlePageShow = (event) => {
            if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
                // Page was loaded from cache, check authentication
                if (!isAuthenticated()) {
                    window.location.href = '/login';
                }
            }
        };

        window.addEventListener('pageshow', handlePageShow);

        return () => {
            window.removeEventListener('pageshow', handlePageShow);
            document.head.removeChild(meta);
            document.head.removeChild(pragma);
            document.head.removeChild(expires);
        };
    }, []);

    // Check authentication on every render
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;

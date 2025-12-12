import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedAdminRoute({ children, requireSuperAdmin = false }) {
    // Check if admin is authenticated
    const isAdminAuthenticated = () => {
        const session = localStorage.getItem('adminSession');
        if (!session) return false;

        try {
            const sessionData = JSON.parse(session);

            // Check if session is still valid (not expired)
            if (sessionData.expiresAt && Date.now() > sessionData.expiresAt) {
                localStorage.removeItem('adminSession');
                return false;
            }

            // Check if user is admin
            if (!sessionData.isAdmin) {
                return false;
            }

            // If super admin is required, check the role
            if (requireSuperAdmin && sessionData.role !== 'super_admin') {
                return false;
            }

            return true;
        } catch (e) {
            return false;
        }
    };

    // Get admin session data
    const getAdminSession = () => {
        try {
            const session = localStorage.getItem('adminSession');
            return session ? JSON.parse(session) : null;
        } catch (e) {
            return null;
        }
    };

    // Prevent caching for admin routes
    useEffect(() => {
        // Add cache control headers via meta tags
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Cache-Control';
        meta.content = 'no-cache, no-store, must-revalidate';
        meta.setAttribute('data-admin-route', 'true');
        document.head.appendChild(meta);

        const pragma = document.createElement('meta');
        pragma.httpEquiv = 'Pragma';
        pragma.content = 'no-cache';
        pragma.setAttribute('data-admin-route', 'true');
        document.head.appendChild(pragma);

        const expires = document.createElement('meta');
        expires.httpEquiv = 'Expires';
        expires.content = '0';
        expires.setAttribute('data-admin-route', 'true');
        document.head.appendChild(expires);

        // Disable browser back/forward cache (bfcache)
        window.history.scrollRestoration = 'manual';

        // Handle page show event (fires when page is loaded from cache)
        const handlePageShow = (event) => {
            if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
                // Page was loaded from cache, check authentication
                if (!isAdminAuthenticated()) {
                    window.location.href = '/admin/login';
                }
            }
        };

        window.addEventListener('pageshow', handlePageShow);

        return () => {
            window.removeEventListener('pageshow', handlePageShow);
            // Safely remove meta tags if they still exist
            if (meta.parentNode) {
                meta.parentNode.removeChild(meta);
            }
            if (pragma.parentNode) {
                pragma.parentNode.removeChild(pragma);
            }
            if (expires.parentNode) {
                expires.parentNode.removeChild(expires);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Check authentication on every render
    if (!isAdminAuthenticated()) {
        return <Navigate to="/admin/login" replace />;
    }

    // If super admin is required but user is not super admin
    if (requireSuperAdmin) {
        const session = getAdminSession();
        if (session && session.role !== 'super_admin') {
            // Regular admin trying to access super admin route
            return <Navigate to="/admin/dashboard" replace />;
        }
    }

    return children;
}

export default ProtectedAdminRoute;

import { useMemo, useState } from 'react';

const POSTS = [
  {
    title: '5 ways to boost your credit score in 30 days',
    category: 'Credit health',
    readTime: '4 min read',
    date: 'Apr 2024',
    excerpt: 'Quick wins to reduce utilisation, tidy up disputes, and pay on time so your next loan unlocks lower APR.',
    badge: 'Trending',
  },
  {
    title: 'How to pick the right EMI tenure for your salary',
    category: 'Loans',
    readTime: '5 min read',
    date: 'Mar 2024',
    excerpt: 'Should you choose a shorter tenure or lower EMI? We break down FOIR, total cost, and prepayment options.',
  },
  {
    title: 'The delivery partner’s guide to owning an EV scooter',
    category: 'Lifestyle',
    readTime: '6 min read',
    date: 'Mar 2024',
    excerpt: 'Understand subsidies, charging costs, and how to finance your next EV without straining cash flows.',
  },
  {
    title: 'Smart ways to use a personal loan for home upgrades',
    category: 'Loans',
    readTime: '5 min read',
    date: 'Feb 2024',
    excerpt: 'From modular kitchens to solar panels—plan ticket sizes and EMI for upgrades that lift your property value.',
  },
  {
    title: 'How your bureau score is calculated (and what to ignore)',
    category: 'Credit health',
    readTime: '7 min read',
    date: 'Feb 2024',
    excerpt: 'Myths vs facts on repayment history, utilisation, and enquiry impact so you can focus on what matters.',
  },
  {
    title: 'When should you refinance your bike or scooter loan?',
    category: 'Auto',
    readTime: '4 min read',
    date: 'Jan 2024',
    excerpt: 'Use falling rates or better credit to renegotiate EMIs—here’s how to calculate if it’s worth it.',
  },
];

const CATEGORIES = ['All', 'Credit health', 'Loans', 'Lifestyle', 'Auto'];

function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return POSTS;
    return POSTS.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const featured = POSTS[0];
  const remaining = filteredPosts.filter((post) => post !== featured);

  return (
    <div className="page blogs-page">
      <section className="blogs-hero">
        <div className="blogs-hero__copy">
          <span className="info-pill">E-Fin Blogs</span>
          <h1>Money tips that skip the jargon</h1>
          <p>
            Bite-sized explainers, how-tos, and customer stories to help you borrow better, build credit, and plan
            smarter—written by E-Fin specialists and partners.
          </p>
          <div className="blogs-hero__meta">
            <span>Updated weekly</span>
            <span>Expert-written</span>
            <span>No fluff, only actionable tips</span>
          </div>
          <div className="blogs-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={cat === selectedCategory ? 'selected' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="blogs-featured">
          <div className="blogs-featured__badge">{featured.badge || 'Editor’s pick'}</div>
          <p className="eyebrow">{featured.category}</p>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <div className="blog-meta-row">
            <span>{featured.readTime}</span>
            <span>{featured.date}</span>
          </div>
          <button type="button" className="ghost-btn">
            Read story
          </button>
        </div>
      </section>

      <section className="blogs-grid">
        {remaining.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-card__badge">{post.category}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-meta-row">
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            <button type="button" className="primary-link">
              Read →
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default BlogsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../Mock';
import './Blog.css';

const Blog = () => {
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Design Blog</h1>
            <p className="lead">
              Tips, tutorials, and insights on graphic design, branding, and creative trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {/* Category Filter */}
              <div className="blog-filter">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'filter-btn-active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts */}
              <div className="blog-posts">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-post-card card">
                    <div className="blog-post-image">
                      <img src={post.image} alt={post.title} />
                      <span className="blog-post-category">{post.category}</span>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <span>
                          <Calendar size={16} />
                          {formatDate(post.date)}
                        </span>
                        <span>
                          <User size={16} />
                          {post.author}
                        </span>
                      </div>
                      <h2>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p>{post.excerpt}</p>
                      <div className="blog-post-footer">
                        <div className="blog-post-tags">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="blog-tag">
                              <Tag size={14} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link to={`/blog/${post.slug}`} className="blog-read-more">
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Categories */}
              <div className="sidebar-widget card">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.filter(cat => cat !== 'All').map((category) => {
                    const count = blogPosts.filter(post => post.category === category).length;
                    return (
                      <li key={category}>
                        <button onClick={() => setSelectedCategory(category)}>
                          {category} <span>({count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-widget card">
                <h3>Recent Posts</h3>
                <ul className="recent-posts-list">
                  {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.id}>
                      <Link to={`/blog/${post.slug}`}>
                        <img src={post.image} alt={post.title} />
                        <div>
                          <h4>{post.title}</h4>
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ad Space Placeholder */}
              <div className="ad-space ad-space-sidebar">
                Ad Space
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

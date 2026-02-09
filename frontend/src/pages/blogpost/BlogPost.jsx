import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../Mock';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
          <h1>Post Not Found</h1>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <article className="blog-post-article">
        {/* Header */}
        <header className="blog-post-header">
          <div className="container">
            <Link to="/blog" className="back-to-blog">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            <div className="blog-post-header-content">
              <span className="blog-post-header-category">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="blog-post-header-meta">
                <span>
                  <Calendar size={18} />
                  {formatDate(post.date)}
                </span>
                <span>
                  <User size={18} />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="blog-post-featured-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Content */}
        <div className="blog-post-content-wrapper">
          <div className="container">
            <div className="blog-post-layout">
              <div className="blog-post-main">
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Tags */}
                <div className="blog-post-tags">
                  <strong>Tags:</strong>
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Box */}
                <div className="author-box">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" 
                    alt="Vibgyor" 
                  />
                  <div>
                    <h3>About Vibgyor</h3>
                    <p>
                      Professional graphic designer with 10+ years of experience in packaging design, 
                      branding, and digital graphics. Passionate about helping businesses create stunning 
                      visual identities that drive results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="blog-post-sidebar">
                <div className="ad-space ad-space-sidebar">
                  Ad Space
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h2>Related Articles</h2>
              <div className="related-posts-grid">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`} 
                    className="related-post-card"
                  >
                    <div className="related-post-image">
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    </div>
                    <div className="related-post-content">
                      <span className="related-post-category">{relatedPost.category}</span>
                      <h3>{relatedPost.title}</h3>
                      <span className="related-post-date">{formatDate(relatedPost.date)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogPost;

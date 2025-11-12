export const dynamic = 'force-dynamic';

import { gql } from 'graphql-request';
import { client } from '@/lib/graphql-client';
import '../../../styles/_hero-banner.scss';
import '../../../styles/_single-blog.scss';

export default async function BlogPost({ params }) {
  // ✅ unwrap the promise first
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    console.error('❌ No slug found in params');
    return <h1>404 - Post not found</h1>;
  }

  // ✅ GraphQL query
  const query = gql`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const data = await client.request(query, { slug });
    const post = data?.post;

    if (!post) {
      return <h1>404 - Post not found</h1>;
    }

    return (
      <main>
        <section className="hero-banner-sec sub-banner-sec">
          <div className="fluidcontainer">
            <div className="hero-banner-area slideshow">
              <div className="hero-banner-wrapper">
                <div className="slide">
                  <div className="slide-image">
                    <img
                      className="sub-bnr-img"
                      src={post.featuredImage?.node?.sourceUrl || '/assets/blogs/banner.jpg'}
                      alt={post.title}
                      width="1300"
                      height="520"
                    />
                  </div>
                  <h1 className="slide-subtitle" dangerouslySetInnerHTML={{ __html: post.title }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-blog-sec">
          <div className="container">
            <div
              className="single-blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
    );
  } catch (err) {
    console.error('GraphQL error:', err);
    return <h1>404 - Post not found</h1>;
  }
}

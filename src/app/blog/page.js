
import React from 'react';
import { client } from '@/lib/graphql-client';
import { gql } from 'graphql-request';
import Link from 'next/link';
import '../../styles/_hero-banner.scss';
import '../../styles/_col-3-blog.scss';
import '../../styles/_highlight-blog.scss';
import Headingblock from '../components/Headingblock';

export default async function Blog() {
  const query = gql`
    {
      posts(first: 12) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  const posts = data.posts.nodes;

  return (
    <main>
      {/* Hero Banner Section */}
      <section className="hero-banner-sec sub-banner-sec">
        <div className="fluidcontainer">
          <div className="hero-banner-area slideshow">
            <div className="hero-banner-wrapper">
              <div className="slide">
                <div className="slide-image">
                  <img
                    className="sub-bnr-img"
                    src="/assets/blogs/banner.jpg"
                    width="1300"
                    height="520"
                    alt="Gallery"
                    title="Gallery"
                  />
                </div>
                <h1 className="slide-subtitle">Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="col3-blog-sec scroll-up-gridwrap">
        <div className="heading-mainblock without-content">
          <div className="container">
              <Headingblock
                  items={[
                      {
                      heading: "Blogs"
                      },
                  ]}
                  align="center"
                  whiteText={false}
              />
          </div>
        </div>

        <div className="grid-blog-area">
          <div className="container">
            <div className="col3-gridarea">
              {posts.map((post) => (
                <div key={post.id} className="blog-item scroll-griditem">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="top-bar">
                      {post.featuredImage?.node?.sourceUrl && (
                        <img
                          src={post.featuredImage.node.sourceUrl}
                          width="431"
                          height="200"
                          alt={post.title}
                        />
                      )}
                    </div>
                    <div className="btm-bar">
                      <div className="title-tag" dangerouslySetInnerHTML={{ __html: post.title }} />
                      <div className="date">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <div className="btn-wrap">
                        <button className="common-black-btn">
                          <span>Read More</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

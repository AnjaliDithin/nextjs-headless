<?php
    /*
    Template Name: blog page
    */
    get_header();
    add_action('wp_footer','home_scripts',25);
    $page_ID = get_the_ID();
    function home_scripts(){?>
        
	<?php
    }
?>
<?php

?>
<section class="hero-banner-sec sub-banner-sec">
    <div class="fluidcontainer">
      <div class="hero-banner-area  slideshow">
          <div class="hero-banner-wrapper ">
                <div class=" slide">
                  <div class="slide-image">
                      <img class="sub-bnr-img" src="<?php echo get_stylesheet_directory_uri(); ?>/images/gallery/banner.png" width="1300" height="520" alt="Gallery" title="Gallery" />
                  </div>
                  <h1 class="slide-subtitle" >Blogs</h1>
                </div>
          </div>
      </div>
  </div>
</section>

<section class="highlight-blog-sec">
    <div class="grid-blog-area">
      <div class="container">
            <div class="blog-item ">
                <a href="#" target="_blank">
                    <div class="top-bar">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/blog/mainblog.png" width="1140" height="440" alt="Which Types of Boats Are for Travelers in Kerala" title="Which Types of Boats Are for Travelers in Kerala" />
                    </div>
                    <div class="info-bar">
                        <div class="date">July 15, 2025 </div>
                        <div class="item"></div>
                        <div class="place">Alappuzha Beach</div>
                    </div>
                    <div class="btm-bar">
                        <div class="title-tag">Enjoy Beautiful Sunsets at Alappuzha Beach</div>
                        <div class="content">
                        <p>Kerala, often referred to as “God’s Own Country,” is renowned for its tranquil villages, lush greenery, and serene backwaters. Water travel is one of the greatest ways to see Kerala. There are several ways to take in the natural beauty of the backwaters, which comprise a system of lakes, rivers, canals, and lagoons. Every type of traveler will find something..</p>
                        </div>
                        <div class="btn-wrap ">
                            <button href="" class="primary-btn blackeffect">
                                <span>Read More</span>
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/arrow.svg" width="17" height="17" alt="arrow" title="arrow" />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
      </div>
    </div>
</section>

<section class="col3-blog-sec scroll-up-gridwrap">
  <div class="heading-block without-content ">
    <div class="container">
      <div class="heading-wrap">
        <h2>Our Blogs</h2>
      </div>
    </div>
  </div>
    <div class="grid-blog-area">
      <div class="container">
        <div class="col-3-grid-container ">
            <div class="blog-item scroll-griditem">
                <a href="#" target="_blank">
                    <div class="top-bar">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/blog/blog1.png" width="431" height="200" alt="Which Types of Boats Are for Travelers in Kerala" title="Which Types of Boats Are for Travelers in Kerala" />
                    </div>
                    <div class="btm-bar">
                        <div class="title-tag">Which Types of Boats Are for Travelers in Kerala</div>
                        <div class="date">Posted On July 8, 2025 by ATDC</div>
                        <div class="content">
                        <p>Kerala, often referred to as “God’s Own Country,” is renowned for its tranquil villages, lush greenery, and serene backwaters. Water travel is one of the greatest ways to see Kerala. There are several ways to take in the natural beauty of the backwaters, which comprise a system of lakes, rivers, canals, and lagoons. Every type of traveler will find something..</p>
                        </div>
                        <div class="btn-wrap ">
                            <button href="" class="primary-btn blackeffect">
                                <span>Read More</span>
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/arrow.svg" width="17" height="17" alt="arrow" title="arrow" />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div class="blog-item scroll-griditem">
                <a href="#" target="_blank">
                    <div class="top-bar">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/blog/blog2.png" width="431" height="200" alt="The Heart of Alleppey: Exploring Its Fishing Villages" title="The Heart of Alleppey: Exploring Its Fishing Villages" />
                    </div>
                    <div class="btm-bar">
                        <div class="title-tag">The Heart of Alleppey: Exploring Its Fishing Villages</div>
                        <div class="date">Posted On June 25, 2025 by ATDC</div>
                        <div class="content">
                        <p>Alappatha, another name for Allappey is a stunning town in Kerala, india, frequentiy referred to as the "Venice of the East" it is well-known for its serene backwaters, picturesque somery, and above all its distinctive houseboats. These houseboats contributs significantly to the region's economic devwinpment in addition to being a well-liked tourist destination. in this blog, we will explore the</p>
                        </div>
                         <div class="btn-wrap ">
                            <button href="" class="primary-btn blackeffect">
                                <span>Read More</span>
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/arrow.svg" width="17" height="17" alt="arrow" title="arrow" />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div class="blog-item scroll-griditem">
                <a href="#" target="_blank">
                    <div class="top-bar">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/blog/blog3.png" width="431" height="200" alt="The role of houseboat tourism in alleppey’ local economy" title="The role of houseboat tourism in alleppey’ local economy" />
                    </div>
                    <div class="btm-bar">
                        <div class="title-tag">Houseboat Experience in Alleppey: What to Expect & How to Choose</div>
                        <div class="date">Posted On June 20, 2025 by ATDC</div>
                        <div class="content">
                        <p>Every tourist interested in Kerala should read about a houseboat experience in Alleppey: What to expect and how to choose before going. Alleppey, sometimes referred to as Alappuzha, is well-known for its serene backwaters, green paddy fields, coconut palms, and exquisite houseboats. Taking a typical houseboat ride through broad lakes and winding canals is more than simply a trip. It’s..</p>
                        </div>
                        <div class="btn-wrap ">
                            <button href="" class="primary-btn blackeffect">
                                <span>Read More</span>
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/arrow.svg" width="17" height="17" alt="arrow" title="arrow" />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
</section>

<section class="foot-form-sec pad-top">
    <div class="heading-block without-content">
      <div class="container">
        <div class="heading-wrap">
          <h2>Get In Touch</h2>
        </div>
      </div>
    </div>
    <div class="outer">
        <div class="container">
            <div class="form-bg">
                <div class="form-blk">
                    <div class="ct-frm-wrap">
                        <form>
                            <ul>
                                <li class="list-itm ">
                                    <input type="text" name="Name" placeholder="Name" id="Name" aria-labelledby="Name">
                                </li>
                                <li class="list-itm ">
                                    <input type="email" name="EmailAddress" placeholder="Email" id="EmailAddress" aria-labelledby="EmailAddress">
                                </li>
                                <li class="list-itm">
                                    <input type="tel" name="phonenumber" placeholder="Phone" id="phonenumber" aria-labelledby="phonenumber">
                                </li>
                                <li class="list-itm">
                                    <textarea name="message" id="message" placeholder="Message" aria-labelledby="message"></textarea>
                                </li>
                                <li class="list-itm submt-itm">
                                    <input type="Submit" name="Submit" value="Submit" id="Submit" >
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div class="form-info">
                        <img class="atdc-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/footer-form/form-logo.png" width="" height="" alt="About Us" title="About Us" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

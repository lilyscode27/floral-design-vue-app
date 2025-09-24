<template>
  <main>
    <!--Carousel-->
    <div id="myCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"
          aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/flower_images/carousel-image.jpg" class="d-block w-100" alt="First slide" />
          <div class="container">
            <div class="carousel-caption text-start">
              <h1 class="display-3">Discover Our Seasonal Blooms</h1>
              <p class="text-body-secondary">
                Explore fresh, locally sourced flowers at their peak beauty.
                Perfectly in season, perfectly for you.
              </p>
              <p>
                <router-link class="btn btn-lg btn-primary" to="/seasonal-flowers">Browse Seasonal Flowers</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/flower_images/carousel-image.jpg" class="d-block w-100" alt="First slide" />
          <div class="container">
            <div class="carousel-caption">
              <h1 class="display-3">Flowers for Every Occasion</h1>
              <p class="text-body-secondary">
                From weddings to birthdays, graduations to corporate events -
                find the perfect arrangement for your special moment.
              </p>
              <p>
                <router-link class="btn btn-lg btn-primary" to="/flowers-by-occasion">Browse by Occasion</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/flower_images/carousel-image.jpg" class="d-block w-100" alt="First slide" />
          <div class="container">
            <div class="carousel-caption text-end">
              <h1 class="display-3">Explore Our Floral Designs</h1>
              <p class="text-body-secondary">
                See our range of design styles - from classic elegance to
                modern minimalism - and find inspiration for your next
                arrangement.
              </p>
              <p>
                <router-link class="btn btn-lg btn-primary" to="/floral-designs">Browse Floral Designs</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!--Flower Catalog-->
    <section id="flower-catalog" class="py-4">
      <div class="container">
        <div class="row gx-4 align-items-center">
          <!--Section image-->
          <div class="col-md-6">
            <div class="me-md-2 me-lg-5">
              <img class="img-fluid rounded-3"
                src="../assets/images/flower_images/browse-all-flowers-button-thumbnail.jpg" />
            </div>
          </div>
          <!--Section heading-->
          <div class="col-md-6">
            <div class="ms-md-2 ms-lg-5 mt-5 mt-md-0">
              <span>Our Collection</span>
              <h1 class="display-3 mb-0">Flower Catalogue</h1>
              <p class="lead">
                Browse our curated selection of blooms - from vibrant seasonal
                flowers to timeless favorites. Each flower is locally sourced
                and chosen for its beauty, freshness, and meaning, so you can
                find the perfect fit for any occasion.
              </p>
              <router-link class="btn btn-lg btn-primary mb-3" to="/all-flowers">Browse All Flowers</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Floral Designs-->
    <section id="floral-design" class="py-4">
      <div class="container">
        <div class="row gx-4 align-items-center">
          <!--Section heading-->
          <div class="col-md-6">
            <div class="ms-md-2 ms-lg-5 mt-5 mt-md-0">
              <span>Our Creative Styles</span>
              <h1 class="display-3 mb-0">Floral Designs</h1>
              <p class="lead">
                Discover our range of arrangement styles - from timeless
                classics to modern, artistic creations. Each design is
                thoughtfully crafted to reflect your personality, event theme,
                and the natural beauty of every bloom.
              </p>
              <router-link class="btn btn-lg btn-primary mb-3" to="/floral-designs">Browse Floral Designs</router-link>
            </div>
          </div>
          <!--Section image-->
          <div class="col-md-6">
            <div class="me-md-2 me-lg-5">
              <img class="img-fluid rounded-3"
                src="../assets/images/flower_images/browse-floral-designs-button-thumbnail.jpg"
                alt="Browse Floral Designs Thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Call-to-action-->
    <section id="cta" class="py-4">
      <div class="container-fluid">
        <div class="row justify-content-center text-center bg-primary-subtle">
          <div class="col-md-8 py-4">
            <h2 class="py-2">
              Bring your floral vision to life with a custom design tailored
              to your occasion.
            </h2>
            <router-link class="btn btn-lg btn-primary me-2" to="/request">Make a Request</router-link>
          </div>
        </div>
      </div>
    </section>

    <!--Values-->
    <section id="values" class="py-4">
      <div class="container">
        <!--Section heading-->
        <div class="row justify-content-center text-center mb-3">
          <div class="col-lg-8 col-xl-7">
            <span class="text-muted">Our Values</span>
            <h2 class="display-5">What Makes Us Bloom</h2>
            <p class="lead">
              We are passionate about creating unique floral designs that
              celebrate nature's beauty while caring for the planet. Our
              values guide everything we do - from choosing locally grown,
              seasonal blooms to crafting each arrangement with creativity and
              love.
            </p>
          </div>
        </div>
        <!--Section content-->
        <div class="row g-4 g-md-5">
          <div class="col-md-6">
            <div class="d-flex">
              <div class="text-primary me-4">
                <i class="bi bi-recycle fs-2"></i>
              </div>
              <div>
                <h5 class="mb-2 mb-lg-3 fw-bold">Sustainable Practices</h5>
                <p>
                  We prioritize eco-friendly materials and avoid waste,
                  ensuring every arrangement leaves a lighter footprint on the
                  environment.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex">
              <div class="text-primary me-4">
                <i class="bi bi-palette fs-2"></i>
              </div>
              <div>
                <h5 class="mb-2 mb-lg-3 fw-bold">Creative Designs</h5>
                <p>
                  Each bouquet and centerpiece is a work of art, thoughtfully
                  designed to match your vision and occasion.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex">
              <div class="text-primary me-4">
                <i class="bi bi-geo-alt fs-2"></i>
              </div>
              <div>
                <h5 class="mb-2 mb-lg-3 fw-bold">Locally Sourced Blooms</h5>
                <p>
                  We partner with local growers to bring you the freshest
                  flowers while supporting our community.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex">
              <div class="text-primary me-4">
                <i class="bi bi-calendar3 fs-2"></i>
              </div>
              <div>
                <h5 class="mb-2 mb-lg-3 fw-bold">Seasonal Selection</h5>
                <p>
                  Our designs feature seasonal flowers at their peak beauty,
                  offering you vibrant colors and unmatched freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Testimonials-->
    <section id="testimonials" class="py-4">
      <div class="container">
        <!--Section heading-->
        <div class="row justify-content-center text-center mb-2 mb-lg-4">
          <div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
            <h2 class="display-5">What Our Customers Say</h2>
            <p class="lead">
              We're honoured to have brought joy to countless special moments.
              Here's what our customers have to say about our floral
              creations.
            </p>
          </div>
        </div>
        <!--Section content-->
        <div class="row gy-5">
          <div class="col-lg-6 d-flex align-items-start">
            <img alt="Customer Profile Picture" class="img-fluid rounded-circle me-3" height="96"
              src="../assets/images/business-general/customer1-profile-picture.jpg" width="96" />
            <div class="bg-light px-5 rounded-3">
              <div class="text-primary mb-1">
                <i class="bi bi-quote" style="font-size: 2rem"></i>
              </div>
              <p>
                “The bouquet was absolutely stunning! The colours were
                vibrant, and the arrangement was so thoughtful. It made our
                anniversary dinner feel even more special. Thank you for
                making it unforgettable.”
              </p>
              <div class="text-end pt-2">
                <h5 class="fw-bold">John Doe</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-start">
            <img alt="Customer Profile Picture" class="img-fluid rounded-circle me-3" height="96"
              src="../assets/images/business-general/customer2-profile-picture.jpg" width="96" />
            <div class="bg-light px-5 rounded-3">
              <div class="text-primary mb-1">
                <i class="bi bi-quote" style="font-size: 2rem"></i>
              </div>
              <p>
                “I ordered flowers for my mother's birthday and she was moved
                to tears. The seasonal blooms were fresh and beautifully
                arranged. I'll definitely be coming back for every occasion.”
              </p>
              <div class="text-end pt-2">
                <h5 class="fw-bold">Jane Doe</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Gallery-->
    <section id="gallery" class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="mb-4">
              <div class="ratio ratio-16x9">
                <img alt="Flower Picture" class="img-fluid" src="../assets/images/flower_images/gallery-photo10.jpg" />
              </div>
            </div>
            <div class="mb-4 mb-md-0">
              <div class="ratio ratio-16x9">
                <img alt="Flower Picture" class="img-fluid" src="../assets/images/flower_images/gallery-photo15.jpg" />
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="row gy-4">
              <div class="col-md-6">
                <div class="ratio ratio-16x9">
                  <img alt="Flower Picture" class="img-fluid"
                    src="../assets/images/flower_images/gallery-photo17.jpg" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="ratio ratio-16x9">
                  <img alt="Flower Picture" class="img-fluid"
                    src="../assets/images/flower_images/gallery-photo27.jpg" />
                </div>
              </div>
              <!--Section heading-->
              <div class="col-md-12">
                <div class="bg-light rounded d-flex align-items-center">
                  <div class="text-center p-4">
                    <span class="text-muted">Showcase</span>
                    <h2 class="display-5 mb-2">Our Gallery</h2>
                    <div class="row align-items-center justify-content-center">
                      <div class="col-lg-10 col-xl-6">
                        <p class="">
                          A curated collection of our floral artistry - from
                          intimate bouquets to grand event arrangements. Each
                          creation reflects our love for seasonal blooms,
                          vibrant colors, and unique design touches that bring
                          your vision to life.
                        </p>
                      </div>
                    </div>
                    <router-link class="btn btn-primary btn-lg mt-3" to="/gallery">View Gallery</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
</script>
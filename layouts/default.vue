<template>
  <div>
    <header>
      <div id="strapline">
        <div id="welcome_slogan">
          <h3>Scientific Consulting by <span>Eli Fine, PhD</span></h3>
        </div>
        <!--close welcome_slogan-->
      </div>
      <!--close strapline-->
      <nav>
        <div id="menubar">
          <ul id="nav">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>
              <nuxt-link to="/services">Services Offered</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/testimonials">Testimonials</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/pricing">Pricing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Bio & Contact Info</nuxt-link>
            </li>
          </ul>
        </div>
        <!--close menubar-->
      </nav>
    </header>
    <div id="slideshow_container">
      <div class="slideshow">
        <ul class="slideshow">
          <li class="show">
            <img
              width="950"
              height="250"
              src="areas_of_expertise.png"
              alt="Areas of expertise"
            />
          </li>
          <li>
            <img
              width="950"
              height="250"
              src="SMRT_abstract.png"
              alt="Genome editing analysis pipeline"
            />
          </li>
        </ul>
      </div>
      <!--close slideshow-->
    </div>
    <!--close slideshow_container-->
    <div id="site_content">
      <div class="sidebar_container">
        <!--Begin Updates-->
        <div class="sidebar">
          <div class="sidebar_item">
            <h3><u>Latest Updates</u></h3>
          </div>
          <!--close sidebar_item-->
        </div>
        <!--close sidebar-->
        <div class="sidebar">
          <div class="sidebar_item">
            <h3>New Website</h3>
            <p>
              Welcome to the new website. Please have a look around, any
              feedback is much appreciated
            </p>
          </div>
          <!--close sidebar_item-->
        </div>
        <!--close sidebar-->
        <!--End Updates-->
        <div class="sidebar">
          <div class="sidebar_item">
            <h2><u>Contact</u></h2>
            <p>Phone: 424.354.3463</p>
            <p>Email: <a href="mailto:ejfine@gmail.com">ejfine@gmail.com</a></p>
          </div>
          <!--close sidebar_item-->
        </div>
        <!--close sidebar-->
      </div>
      <!--close sidebar_container-->

      <div id="content">
        <nuxt />

        <!--close content_item-->
      </div>
      <!--close content-->
    </div>
    <!--close site_content-->

    <footer>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/services">Services Offered</nuxt-link> |
      <nuxt-link to="/testimonials">Testimonials</nuxt-link> |
      <nuxt-link to="/pricing">Pricing</nuxt-link> |
      <nuxt-link to="/contact">Bio & Contact Info</nuxt-link><br /><br />
      <!--website template by-->
      <!--<a href="http://www.freehtml5templates.co.uk">Free HTML5 Templates</a>-->
    </footer>
  </div>
</template>

<style></style>

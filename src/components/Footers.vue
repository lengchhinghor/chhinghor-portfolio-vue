<template>
  <div class="footer-dark">
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li><a href="#">អំពីខ្ញុំ</a></li>
              <li><a href="#">កាក</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>My Vision</h3>
            <p>
              I'm a Front-end Web Developer with a passion for building projects
              that are used routinely. Building applications in JavaScript.
              Former supervisor and finance professional who's eager to enhance
              a company's user experience.
            </p>
          </div>
          <div class="col item social">
            <a href="https://web.facebook.com/stom.sharow" target="_blank"
              ><i class="icon ion-social-facebook"></i></a
            ><a href="https://github.com/lengchhinghor" target="_blank"
              ><i class="icon ion-social-github"></i></a
            ><a
              href="https://www.linkedin.com/in/ching-hor-bb7bb415b/"
              target="_blank"
              ><i class="icon ion-social-linkedin"></i></a
            ><a href="https://www.instagram.com/seavhorrr/" target="_blank"
              ><i class="icon ion-social-instagram"></i
            ></a>
          </div>
        </div>
        <p class="copyright">Leng Chhinghor © 2022</p>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.footer-dark {
  padding: 50px 0;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
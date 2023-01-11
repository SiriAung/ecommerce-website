import React from 'react'

const Details = () => (
  <section className={`flex items-center justify-between py-[40px] px-[80px] bg-[#E5D1B8]`}>
    <div className={`w-[40%]`}>
      <span className={`font-bold text-[12px]`}>GET IN TOUCH</span>
      <h2 className={`font-bold text-[26px] leading-9 py-[20px] px-0`}>Visit one of our agency locations or contact us today</h2>
      <h3 className={`font-bold text-[16px] pb-[15px]`}>Head Office</h3>
      <div className="details">
        <li>
          <i className="fas fa-map"></i>
          <p>56 Glassford Street Glasgow G1 1UL New York</p>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i className="fas fa-phone"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i className="fas fa-clock"></i>
          <p>Monday to Saturday: 9.00am to 16.pm</p>
        </li>
      </div>
    </div>
  
    <div className={`w-[55%] h-[400px]`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.80880252543!2d-1.2565554847889375!3d51.75481970040428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2z4YCh4YCx4YCs4YCA4YC64YCF4YC64YCW4YCt4YCv4YCS4YC6IOGAkOGAgOGAueGAgOGAnuGAreGAr-GAnOGAug!5e0!3m2!1smy!2smm!4v1666081378540!5m2!1smy!2smm" className={`w-[100%] h-[100%]`}></iframe>
    </div>
  </section>
)

export default Details
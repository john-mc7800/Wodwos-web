import Nav from './Nav/Nav';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const HomeSection = () => {
  // Array of image paths
  const imageArray = ['./img-1.png', './img-2.png', './img-3.png', './img-4.png', './img-5.png', './img-6.png'];
  const slides = ['with ease', 'Effeciency', 'Design'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    arrows: false,
  };
  const [activeDropdown, setActiveDropdown] = useState('frontend');

  // Technology data for dropdowns
  const technologies = {
    frontend: [
      { name: 'React.js', src: './react.png' },
      { name: 'Vue.js', src: './vue.png' },
      { name: 'Angular', src: './angular.png' },
      { name: 'Next', src: './next.png' },
      { name: 'Javascript', src: './js.png' },
      { name: 'WordPress', src: './wordpress.png' },
      { name: 'Shopify', src: './shopify.png' },
    ],
    backend: [
      { name: 'Node.js', src: './node.png' },
      { name: 'Laravel', src: './laravel.png' },
      { name: 'PHP', src: './php.png' },
      { name: 'MongoDB', src: './mongodb.png' },
      { name: 'Firebase', src: './firebase.png' },
      { name: 'Codeigniter', src: './codeigniter.svg' },
      { name: 'Angular', src: './angular.png' },
    ],
    cms: [
      { name: 'WordPress', src: './wordpress.png' },
      { name: 'Magento', src: './magento.png' },
      { name: 'Drupal', src: './drupal.png' },
      { name: 'B', src: './b.png' },
      { name: 'C', src: './c.png' },
      { name: 'Commerce', src: './commerce-2.png' },
      { name: 'shopify', src: './shopify.png' },
    ],
  };

  // Handle button click
  const handleButtonClick = (category) => {
    setActiveDropdown(category);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Wodwes?',
      answer: 'WODWES (Women-Driven Web Solutions) is a well-recognized US-based agency offering a wide range of services including website design and development, CMS development, ERP development, custom Ecommerce development, and UI/UX design. We house a professional team of designers, developers, consultants, and engineers, who are dedicatedly available to help businesses in achieving digital goals.',
    },
    {
      question: 'How long does it keep to develop a website or web application?',
      answer: 'The time it takes to develop a website or web application varies depending on the complexity of the project, the number of features and pages, and the level of customization required. We typically provide an estimated timeline during the discovery phase based on our assessment of the project requirements. To get a free quote, email us at sales@wodwes.com',
    },
    {
      question: 'What programming languages and frameworks do you use?',
      answer: 'We use a variety of programming languages and frameworks depending on the project requirements. Some of the languages and frameworks we commonly use include PHP, JavaScript, React, Angular, Vue, Node.js, Python, and Django.',
    },
    {
      question: 'Do you provide website hosting and maintenance services?',
      answer: "Yes, we offer website hosting and maintenance services to ensure that our client's websites are secure, up-to-date, and performing optimally. Our hosting services include server maintenance, security updates, and backups. Our maintenance services include content updates, bug fixes, and feature enhancements.",
    },
    {
      question: 'What is your wen development process?',
      answer: 'Our web development process typically involves the following steps: discovery, design, development, testing, and launch. During the discovery phase, we gather requirements, define the project scope, and create a project plan. The design phase involves creating wireframes, mockups, and visual designs. The development phase involves coding, integrating with third-party services, and setting up databases. The testing phase involves conducting functional testing, usability testing, and performance testing. Finally, we launch the website or application and provide ongoing support. To get started with our web development services, please email us at sales@wodwes.com.',
    },
  ];

  return (
    <>
      <section className="z-0 bg-banner-image bg-cover py-28">
        <div className="flex items-center justify-center">
          <div className="mx-auto w-full text-center">
            <h1 className="items-center text-3xl font-bold text-white md:text-4xl lg:my-4 lg:mr-36 lg:grid lg:grid-cols-2 lg:text-5xl xl:text-6xl">
              <p className="mx-2 lg:text-end">We re a Full</p>
              <div className="grid w-full grid-cols-[42%_58%] items-center justify-center 3xl:grid-cols-[22%_78%]">
                <p className="text-end xl:text-center"> Service</p>
                <Slider {...settings} className="relative w-52 px-1 lg:w-96">
                  {slides.map((text, index) => (
                    <div key={index} className="whitespace-nowrap text-start text-3xl font-black text-[#f72d74] md:text-4xl lg:text-6xl">
                      {text}
                    </div>
                  ))}
                </Slider>
              </div>
            </h1>
            <h1 className="mx-auto text-3xl font-bold text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl">Development Agency</h1>
            <h2 className="py-6 text-xl font-medium text-[#f72d74] md:my-8">Empowering Businesses with Cutting-Edge Web Technologies</h2>
            <p className="mb-12 text-white">
              A web design and development agency crafting seamless web and software apps for startups,
              <br className="max-lg:hidden" />
              businesses, and large enterprises to help them in building a strong online presence
              <br className="max-lg:hidden" />
              and thrive in the digital age.
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-transparent bg-[#f72d74] px-14 py-3 font-bold text-white transition-colors duration-300 hover:border-2 hover:border-[#f72d74] hover:bg-[#282922]">
                <Link to={'/contact'}>Let's Talk</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:mx-18 sm:mx-0 sm:my-0 lg:mx-6 lg:my-9">
        <div className="grid gap-6 p-4 lg:grid-cols-2 lg:p-6">
          <div className="flex flex-col items-start justify-center px-3 lg:pb-10 lg:pr-8 xl:max-w-[690px]">
            <h2 className="font-extrabold coxs:text-[22px] sm:text-4xl">
              <span className="text-[#f72d74]">Empowering Digital Dreams:</span> Our Commitment to Crafting Exceptional Designs and Solutions for a Connected World.
            </h2>
            <p className="mt-6 pb-10 text-lg font-normal leading-9">At our design and development agency, we are dedicated to empowering your digital dreams. Our mission is to create exceptional designs and innovative solutions that resonate with your audience, drive growth, and leave a lasting impact. We blend creativity and technology to build digital experiences that bridge the gap between vision and reality. We believe in collaboration, quality, and exceeding expectations. With us, you'll find a partner committed to transforming your ideas into digital success stories and helping you thrive in today's interconnected world.</p>
            <button className="border-2 border-[#f72d74] bg-white px-14 py-3 font-Inter font-medium text-black hover:bg-[#f72d74] hover:text-white">
              <Link to={'/contact'}>Get Started</Link>
            </button>
          </div>

          {/* Lower Grid */}
          <div className="grid gap-6 xs:grid-cols-1 cosm:grid-cols-2 sm:grid-cols-2 comd:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {[
              { count: '60+', label: 'Clients' },
              { count: '6', label: 'Years Experience' },
              { count: '90+', label: 'Completed Projects' },
              { count: '3', label: 'Achievements' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center rounded-md border py-6 font-Inter shadow xs:flex xs:flex-col sm:py-8">
                <h3 className="text-4xl font-extrabold text-[#f72d74] sm:text-3xl md:text-4xl">{stat.count}</h3>
                <p className="font-medium text-[#282922] sm:text-base md:text-lg xl:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 mx-16 my-16 overflow-hidden">
        <Marquee speed={150} gradient={false}>
          {imageArray.map((src, index) => (
            <div key={index} className="mx-28 flex items-center justify-center">
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-20 rounded-full object-cover shadow-md" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="relative w-full py-12 lg:py-20">
        <img src="./section-img.png" className="absolute left-0 top-0 h-full w-full" alt="" />
        <div className="relative mx-auto flex w-[90%] flex-col items-start gap-10 font-Inter lg:flex-row lg:items-center lg:justify-between">
          {/* Content Container */}
          <div className="w-full max-w-[1020px]">
            <h1 className="mb-3 font-Inter text-4xl font-black text-white coxs:text-3xl sm:text-4xl">
              Let's Build Your Dream Website <span className="text-[#f72d74]">Together!</span>
            </h1>
            <p className="font-Inter text-lg text-white">Whether you need a website redesign, development from scratch, or any other web-related services, team WODWES got you covered. Our experienced team of designers and developers will work closely with you to create a website that truly represents your vision and engages your target audience.</p>
          </div>
          {/* Button */}
          <Link to={'/contact'} className="w-44 max-w-xs border-2 border-[#f72d74] px-5 py-3 text-center font-bold text-white hover:bg-[#f72d74]">
            Let's Talk
          </Link>
        </div>
      </div>

      <div className="py-12 lg:py-20">
        <div className="mx-auto w-[90%] max-w-[1440px]">
          <div className="max-w-[890px]">
            <h2 className="mb-3 text-3xl font-extrabold">
              Web Design and Development <span className="text-[#f72d74]">Outsourcing Company</span>
            </h2>
            <p className="text-lg leading-9">Your Reliable Partner for Digital Excellence - Delivering Outstanding Web Solutions with Precision and Expertise, On Time, Every Time.</p>
          </div>

          {/* 3 columns grid */}
          <div className="md-w-[90%] mx-auto mt-14 grid coxs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md sm:border-r">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Resource as a service</h3>
                <p className="mb-4 text-lg">Unlock unparalleled talent and expertise with our Resource-as-a-Service. Access top-notch designers and developers to enhance your projects and accelerate growth. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md xl:border-r">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Front-End Development</h3>
                <p className="mb-4 text-lg">Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and intuitive interfaces that captivate and engage your audience.</p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md sm:border-r xl:border-r-0">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Web Application Development</h3>
                <p className="mb-4 text-lg">Empower your business with our Web Application Development services. We turn ideas into robust, scalable, and user-friendly web solutions that drive success. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md xl:border-r">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Full-Stack Development</h3>
                <p className="mb-4 text-lg">Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end finesse with back-end robustness to bring your vision to life. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md sm:border-r">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">CMS Development</h3>
                <p className="mb-4 text-lg">Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">DevOps</h3>
                <p className="mb-4 text-lg">Streamline development pipelines and enhance project efficiency with our DevOps solutions. Achieve seamless collaboration, rapid deployments, and optimal performance for your digital projects. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md sm:border-b-0 sm:border-r">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Software Development</h3>
                <p className="mb-4 text-lg">Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, scalable, and tailored software solutions for your business. </p>
              </div>
            </div>
            <div className="bottom-top w-full border-b border-[#d6d6d6] hover:rounded-md sm:border-b-0">
              <div className="coxs:pb-12 coxs:pl-4 coxs:pr-4 coxs:pt-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Quality Assurance & Testing</h3>
                <p className="mb-4 text-lg">Ensure flawless performance and user satisfaction with our Quality Assurance & Testing services. We meticulously scrutinize every detail to deliver excellence. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-12 lg:py-20">
        <img src="./section-img.png" className="absolute left-0 top-0 h-full w-full" alt="" />
        <div className="relative mx-auto flex w-[90%] flex-col items-start gap-10 font-Inter lg:flex-row lg:items-center lg:justify-between">
          {/* Content Container */}
          <div className="w-full max-w-[1020px]">
            <h1 className="mb-3 font-Inter text-4xl font-black text-white coxs:text-3xl sm:text-4xl">
              <span className="text-[#f72d74]">Hire Remote & Project</span> Based Developers for Wodwes
            </h1>
            <p className="font-Inter text-lg text-white">Power up your projects with WODWES remote developers. Boost productivity and achieve exceptional results. Get started today to unlock your project's full potential! </p>
          </div>
          {/* Button */}
          <Link to={'/contact'} className="w-44 max-w-xs border-2 border-[#f72d74] px-5 py-3 text-center font-bold text-white hover:bg-[#f72d74]">
            Get Started
          </Link>
        </div>
      </div>

      <div className="mx-auto grid w-[90%] max-w-[1440px] gap-5 pb-20 pt-12 lg:flex lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full lg:sticky lg:top-10 lg:max-w-[500px]">
          <h2 className="text-4xl font-bold text-[#282922]">
            What you get with <span className="text-[#f72d74]">WODWES</span> product and service design
          </h2>
          <p className="my-5 text-sm leading-8">With WODWES product and service design, you get a transformative experience that marries innovation, aesthetics, and functionality. We craft solutions that resonate with your audience, fuel growth, and elevate your brand. Expect meticulous attention to detail, seamless user experiences, and a creative spark that sets you apart in today's competitive landscape. We're your partners in turning ideas into tangible success stories.</p>
          <button className="border-2 border-[#f72d74] px-12 py-3 font-bold hover:bg-[#f72d74] hover:text-white">
            <Link to={'/contact'}>Get Started</Link>
          </button>
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="grid gap-5 coxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {/* Box 1 */}
          <div className="space-y-4 sm:order-1">
            <div className="rounded-lg bg-[#f7f7f7] hover:bg-[#272821] hover:text-white coxs:p-5">
              <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
              <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Product Design</h3>
              <p className="text-sm leading-6">Elevate your product's appeal and functionality with our design expertise. We create innovative and user-centric solutions that captivate and deliver results.</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="space-y-4 sm:order-3">
            <div className="rounded-lg bg-[#f7f7f7] hover:bg-[#272821] hover:text-white coxs:p-5">
              <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
              <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Business Design</h3>
              <p className="text-sm leading-6">Transform your business with our expert design services. We craft captivating designs that drive success, leaving a lasting impact on your brand.</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="sm:order-2 sm:mt-5">
            <div className="coxs:space-y-4">
              <div className="rounded-lg bg-[#f7f7f7] hover:bg-[#272821] hover:text-white coxs:p-5">
                <img src="./img.png" alt="resource as a service" className="h-8 w-8" />
                <h3 className="mb-4 mt-3 flex h-14 items-center text-xl font-bold">Service Design</h3>
                <p className="text-sm leading-6">Elevate user experiences with our service design expertise. We blend creativity and strategy to craft seamless, user-centric solutions that drive success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-12 lg:py-20">
        <img src="./product-img.png" className="absolute left-0 top-0 z-0 h-full w-full object-cover" alt="" />
        <div className="relative z-10 mx-auto w-[90%] max-w-[1440px] text-white">
          <div className="flex justify-between gap-10 text-white coxs:flex-col md:flex-row md:items-center">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="mb-3 font-Inter text-4xl font-black text-white coxs:text-3xl sm:text-4xl">
                <span className="text-[#f72d74]">Product</span> We Develop
              </h1>
              <p className="mt-5 max-w-[572px] font-Inter text-lg text-white">Hire testers and QA experts to perform end-to-end testing of your existing product, website, or software solution.</p>
            </div>
            <Link to={'/'} className="w-44 border-2 border-[#f72d74] px-7 py-3 font-bold text-white hover:bg-[#f72d74]">
              Give it a Try?
            </Link>
          </div>
          <div className="mt-8 grid coxs:grid-cols-1 md:grid-cols-2">
            <img src="cv-maker.png" alt="CV Maker" />
            <img src="cv-maker-2.png" alt="CV Maker 2" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-[1440px] py-20">
        <h2 className="text-3xl font-bold">
          <span className="text-[#f72d74]">Technologies</span> We Use
        </h2>
        <p className="mt-4 w-full max-w-[896px] font-Inter text-lg font-normal text-[#272821]">We leverage cutting-edge technologies to create innovative solutions, ensuring your digital projects remain at the forefront of industry standards.</p>
        <div className="mx-auto max-w-[950px]">
          {/* Buttons for selecting dropdown */}
          <div className="my-10 flex items-center justify-between gap-4">
            <button onClick={() => handleButtonClick('frontend')} className={`border-b-2 ${activeDropdown === 'frontend' ? 'border-[#f72d74] text-[#f72d74]' : 'border-transparent text-black'} sm-text-lg text-sm font-semibold hover:text-[#f72d74] lg:text-xl`}>
              Frontend Technologies
            </button>
            <button onClick={() => handleButtonClick('backend')} className={`border-b-2 ${activeDropdown === 'backend' ? 'border-[#f72d74] text-[#f72d74]' : 'border-transparent text-black'} sm-text-lg text-sm font-semibold hover:text-[#f72d74] lg:text-xl`}>
              Backend Technologies
            </button>
            <button onClick={() => handleButtonClick('cms')} className={`border-b-2 ${activeDropdown === 'cms' ? 'border-[#f72d74] text-[#f72d74]' : 'border-transparent text-black'} sm-text-lg text-sm font-semibold hover:text-[#f72d74] lg:text-xl`}>
              CMS Technologies
            </button>
          </div>

          {/* Dropdown content */}
          <div className="mt-6 rounded-lg">
            <div className="mt-4 flex flex-wrap justify-center coxs:gap-10 md:gap-20 xl:gap-36">
              {technologies[activeDropdown].map((tech, index) => (
                <div key={index} className="box flex h-20 w-20 items-center justify-center rounded-full">
                  <img src={tech.src} alt={tech.name} className="h-12 w-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <img src="./img-back.png" className="absolute top-0 z-0 h-full w-full object-cover" alt="" />
        <div className="relative z-10 mx-auto flex w-[90%] max-w-[1440px] gap-20 coxs:flex-col lg:flex lg:flex-row">
          {/* Left Column: Sticky Content */}
          <div className="h-full flex-1 lg:sticky lg:top-32 lg:max-w-[505px]">
            <h2 className="text-4xl font-black text-white">
              Why Choose <span className="text-[#f72d74]">WODWES</span> for Website Design and Development Services?
            </h2>
            <p className="my-5 text-[20px] leading-9 text-white">We’re not a typical development agency — We’re your technology partner striving to achieve your specific goals.</p>
          </div>

          {/* Right Column: Grid Boxes */}
          <div className="grid flex-1 gap-5 space-y-10 coxs:grid-cols-1 lg:mt-24 lg:max-w-[699px] lg:grid-cols-1 lg:space-y-20 xl:grid-cols-1">
            {/* Box 1 */}
            <div className=" ">
              <div className=" ">
                <img src="./experience.png" alt="experience" className="h-9 w-9 object-contain" />
                <h3 className="my-2 text-base font-bold text-white lg:text-[28px]">Pool of Experience and Expertise</h3>
                <p className="text-base font-normal leading-9 text-white">With a diverse team of professionals with expertise in various areas of web development, including front-end and back-end development, database design, user interface design, and e-commerce solutions, we can handle all aspects of your web development project efficiently and effectively.</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className=" ">
              <div className=" ">
                <img src="./transparency.png" alt="transparency" className="h-9 w-9 object-contain" />
                <h3 className="my-2 text-base font-bold text-white lg:text-[28px]">Transparency and Quality</h3>
                <p className="text-base font-normal leading-9 text-white">We have an in-house rigorous quality assurance process in place to ensure that our development solutions are of the highest quality. We conduct thorough testing and debugging to identify and fix any issues before delivering the final product to you.</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className=" ">
              <div className=" ">
                <img src="./flexible.png" alt="flexible" className="h-9 w-9 object-contain" />
                <h3 className="my-2 text-base font-bold text-white lg:text-[28px]">Flexible Hiring Models</h3>
                <p className="text-base font-normal leading-9 text-white">We have flexible hiring models for our partners. Whether you need to hire on an hourly basis, a project basis, or a dedicated team for a project, team WODWES got you covered with the flexibility and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-16 flex w-[90%] max-w-[1440px] gap-10 coxs:flex-col lg:flex lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full flex-1 lg:sticky lg:top-10 lg:max-w-[500px]">
          <img src="./team.png" className="rounded-lg" alt="" />
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="flex flex-1 gap-10 coxs:flex-col lg:flex-col">
          <h2 className="text-3xl font-black">
            Your Development <span className="text-[#f72d74]">Partner!</span>
          </h2>
          <p className="font-Inter text-base leading-9">We love hearing about how our work has helped businesses succeed and how WODWES became their go-to development team. Don't just take our word for it - read what our satisfied clients have to say!</p>
          {/* Box 1 */}
          <div className="space-y-4">
            <div className="rounded-lg">
              <img src="./coding.png" alt="resource as a service" className="h-9 w-9" />
              <h3 className="mb-4 mt-3 flex items-center text-xl font-bold">Developing feature-enriched web and software solutions for businesses</h3>
              <p className="text-lg leading-9">At WODWES, we understand that technology is constantly evolving, and we're committed to staying ahead of the curve. Whether you need a simple website or a complex web application, we have the expertise and experience to deliver innovative solutions that help you achieve your business goals.</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="space-y-4">
            <div className="rounded-lg">
              <img src="./coding.png" alt="resource as a service" className="h-9 w-9" />
              <h3 className="mb-4 mt-3 flex items-center text-xl font-bold">Tailored development solutions to meet your business needs!</h3>
              <p className="mb-5 text-lg leading-9">Team WODWES believes that every business is unique, and that's why we offer tailored development solutions to meet your specific needs. We work closely with our clients to identify their unique business requirements and develop customized solutions that help them achieve their goals.</p>
              <button className="mb-5">
                <Link to={'/contact'} className="border-2 border-[#f72d74] px-9 py-3 font-semibold hover:bg-[#f72d74] hover:text-white">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex h-full w-full justify-end gap-10 coxs:flex-col coxs:items-center coxs:p-4 lg:flex-row lg:gap-10">
          {/* Left Div */}
          <div className="h-full max-w-md lg:sticky lg:top-10 lg:ml-[-10%] lg:w-[50%] lg:pt-16">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl xl:text-5xl">Get in Touch</h2>
            <p className="text-lg font-normal">We love hearing about how our work has helped businesses succeed and how WODWES became their go-to development team.</p>
          </div>

          {/* Right Div */}
          <div className="rounded-lg bg-[#272821] coxs:w-full coxs:p-9 lg:w-[50%] lg:p-20">
            <form action="">
              <div className="grid max-w-2xl gap-10 xs:grid-cols-2">
                <input type="text" placeholder="Enter your name" className="required: col-span-2 w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none placeholder:text-[#9c9c9c]" />
                <input type="email" placeholder="Email" className="required: w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none placeholder:text-[#9c9c9c] maxcosm:col-span-2" />
                <input type="number" placeholder="Phone Number" className="required: w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none placeholder:text-[#9c9c9c] maxcosm:col-span-2" />
                <textarea rows={10} placeholder="Your message here..." className="required: col-span-2 w-full rounded-[10px] border border-[#9c9c9c] bg-transparent p-2 text-[#9c9c9c] outline-none placeholder:text-[#9c9c9c]"></textarea>
                <button className="mb-5 ml-[-10px]">
                  <Link to={'/contact'} className="border-2 border-[#f72d74] px-12 py-3 font-semibold text-white hover:bg-[#f72d74] hover:text-white">
                    Get Started
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="max-x-[1440px] mx-auto my-12 w-[90%] lg:my-16">
        <h2 className="text-left font-bold coxs:text-2xl lg:text-3xl">
          Frequently Asked <span className="text-[#f72d74]">Questions!</span>
        </h2>
        <p className="mb-7 mt-4 text-left text-base font-normal text-[#272821]">We love hearing about how our work has helped businesses succeed and how WODWES became their go-to development team.</p>
        <div className="mx-auto md:max-w-[1000px]">
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-gray-200 first:!border-t-0">
              <button onClick={() => toggleAnswer(index)} className="flex w-full items-center justify-between gap-6 py-4 md:py-6 maxsm:text-sm">
                <span className="text-left text-base font-semibold text-[#272821] md:text-lg">{item.question}</span>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#f72d74] p-2 font-bold text-[#f72d74]`}>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && <p className="py-4 text-base text-[#272821]">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection;

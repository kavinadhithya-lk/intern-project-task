import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-hero-alt"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 z-10">
              <div className="relative inline-block">
                <svg
                  className="absolute -top-2 -right-6"
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.66896 23.5826C5.49012 22.9711 3.20894 22.6627 0.996051 22.3801C0.519428 22.3209 0.0769172 22.6515 0.0428728 23.1172C-0.0252161 23.5833 0.315428 24.0095 0.758005 24.0687C2.9028 24.3407 5.11549 24.6318 7.1922 25.2204C7.63478 25.3481 8.1116 25.0853 8.24778 24.6332C8.38396 24.1814 8.11154 23.7106 7.66896 23.5826Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2733 14.9139C10.7667 11.3354 6.81758 8.21765 3.37909 4.54324C3.07269 4.20007 2.52798 4.18168 2.18753 4.50204C1.84709 4.82274 1.81318 5.362 2.15362 5.70517C5.59211 9.39014 9.54127 12.5181 13.0478 16.1071C13.3883 16.4421 13.9329 16.4469 14.2733 16.1173C14.5797 15.7881 14.6138 15.2489 14.2733 14.9139Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.8443 1.15002C20.9464 3.19813 21.0484 5.24624 21.1505 7.29469C21.1505 7.76383 21.5592 8.12606 22.0359 8.10325C22.5125 8.0801 22.8527 7.68076 22.8527 7.21129C22.7506 5.15977 22.6487 3.10859 22.5465 1.05741C22.5125 0.588281 22.1039 0.228431 21.6273 0.253965C21.1847 0.279498 20.8103 0.681223 20.8443 1.15002Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h1 className="font-poppins text-[40px] md:text-[45px] font-bold leading-[120%] text-[#00243D]">
                Office's Made with
                <br />
                International Standards
              </h1>

              <p className="font-poppins text-lg text-dark max-w-[635px]">
                Business Hub and Buildings, Office Space, Real estate farm that
                makes your dreams true
              </p>

              <button className="flex items-center gap-3 bg-[#F0BA1A] text-[#070708] font-outfit text-[19px] font-bold px-8 py-5 rounded-full border border-[#F0BA1A] hover:bg-[#FFC310] transition-colors">
                Book Office Space Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4aad5e1b0bc25cee76a3fc4137f45cdaaea95060?width=1744"
                alt="Modern Office Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Types Cards */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 -mt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden h-[296px] bg-gradient-to-b from-transparent via-transparent to-black/80 group">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2de21a02ef79c8bb96ecdccf89967b7c101d6741?width=1298"
              alt="Flexi-desk Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
              <h3 className="font-poppins text-lg font-semibold text-white tracking-wide">
                Flexi-desk / Virtual Office
              </h3>
              <p className="font-poppins text-[15px] text-white leading-relaxed">
                Cost-effective office solutions that give you a legal business
                address, access to shared desks, and meeting facilities. Perfect
                for freelancers, startups, and SMEs looking for credibility
                without high overhead costs.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[296px] bg-gradient-to-b from-transparent via-transparent to-black/80 group">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/946cab8bd16759e33036a8bc09ea27e71cb13bf3?width=1298"
              alt="Physical Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
              <h3 className="font-poppins text-lg font-semibold text-white tracking-wide">
                Physical Office Leasing Assistance
              </h3>
              <p className="font-poppins text-[15px] text-white leading-relaxed">
                we assist in finding the right office space that matches your
                business needs and complies with UAE regulations. From
                negotiation to documentation, we make leasing smooth and
                stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section className="bg-white mt-24">
  <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e1c97e96aad3d790422946ba11d6949b42626930?width=1233"
          alt="Real Estate"
          className="w-full rounded-lg"
        />
        <div className="absolute -top-8 left-8">
          <p className="font-poppins text-lg font-bold uppercase text-black">
            → RERA Compliance
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-poppins text-[32px] font-bold leading-[120%] text-dark">
          Real Estate Name Registration Services in Dubai
        </h2>

        <div className="flex gap-6">
          <span className="font-poppins text-lg font-bold uppercase text-[#F3BC4C]">
            Market Credibility
          </span>
          <span className="font-poppins text-lg font-bold uppercase text-[#F3BC4C]">
            Brand Identity
          </span>
        </div>

        <p className="font-poppins text-lg text-[#070708]/40 leading-[160%] text-justify">
          The real estate market in Dubai is highly regulated and one of the fastest growing markets where getting a unique and legally compliant business name is one of the first steps in establishing your presence. Go Kite Business Setup Services is a company in Dubai that focuses on Real Estate Name Registration Services, making it easier and more confident to navigate the legal steps of real estate entrepreneurs and companies.
        </p>

        <p className="font-poppins text-lg text-[#070708]/40 leading-[160%] text-justify">
          Contact Us if your:
        </p>

        <div className="space-y-2">
          {[
            "Property management firms",
            "Real estate developers",
            "Real estate marketing agencies",
            "Property consultancies",
            "Real estate brokerages",
          ].map((item) => (
            <p
              key={item}
              className="font-poppins text-xl font-bold uppercase text-[#505050]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* License Cards - no space from About Section */}
<section className="max-w-[1440px] mx-auto px-4 md:px-8 py-0">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Commercial License */}
    <div className="bg-[#3790AE] rounded-xl p-6 space-y-6">
      <div className="w-[51px] h-[51px]">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          {/* SVG Path Here */}
        </svg>
      </div>
      <h3 className="font-poppins text-[22px] font-bold text-white leading-tight tracking-wide">
        Commercial License
      </h3>
      <p className="font-poppins text-[15px] text-white leading-relaxed">
        Required for trading, import/export, retail, and commercial activities. We manage all approvals, renewals,and documentation, helping you launch and operate smoothly.
      </p>
    </div>

    {/* Professional License */}
    <div className="bg-[#3790AE] rounded-xl p-6 space-y-6">
      <div className="w-[38px] h-[52px]">
        <svg width="39" height="53" viewBox="0 0 39 53" fill="none">
          {/* SVG Path Here */}
        </svg>
      </div>
      <h3 className="font-poppins text-[22px] font-bold text-white leading-tight tracking-wide">
        Professional License
      </h3>
      <p className="font-poppins text-[15px] text-white leading-relaxed">
        Designed for consultants, freelancers, and service providers. We ensure your license is issued quickly while keeping you fully compliant with UAE regulations.
      </p>
    </div>

    {/* Industrial License */}
    <div className="bg-[#3790AE] rounded-xl p-6 space-y-6">
      <div className="w-[47px] h-[48px]">
        <svg width="49" height="48" viewBox="0 0 49 48" fill="none">
          {/* SVG Path Here */}
        </svg>
      </div>
      <h3 className="font-poppins text-[22px] font-bold text-white leading-tight tracking-wide">
        Industrial License
      </h3>
      <p className="font-nunito text-[15px] text-white leading-relaxed">
        Necessary for manufacturing, industrial, and production activities. Our team handles feasibility studies, environmental clearances, and approvals to help you start operations seamlessly.
      </p>
    </div>
  </div>
</section>

{/* Brand Registration Section */}
<section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
  <div className="relative">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/0c8208c7e17338092630787b2e252c77dce336a3?width=3046"
      alt="Brand Registration Background"
      className="w-full rounded-2xl"
    />

    <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 text-white">
      <span className="font-outfit text-[80px] md:text-[147px] font-bold">©</span>
      <span className="font-outfit text-[60px] md:text-[234px] font-bold">®</span>
      <span className="font-outfit text-[60px] md:text-[90px] font-bold">TM</span>
      <span className="font-outfit text-[60px] md:text-[90px] font-bold">IP</span>
    </div>

    <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white rounded-xl p-6 max-w-[569px] border border-[#D7D7D7]">
      <div className="space-y-4">
        <h3 className="font-outfit text-[32px] font-bold text-black leading-tight">
          Brand Registration
        </h3>
        <p className="font-outfit text-[17px] text-[#2E2E2E] leading-relaxed">
          Our team ensures quick and accurate trademark registration so your brand identity is protected from unauthorized use.
        </p>
        <button className="flex items-center gap-2 bg-[#F0BA1A] text-white font-outfit text-sm font-bold px-5 py-3.5 rounded-full border border-[#F0BA1A] hover:bg-[#FFC310] transition-colors">
          Apply Now
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
</section>

     {/* Brand Registered CTA */}
<section className="relative text-center py-16 space-y-8">
  {/* Text Content Above Image */}
  <div className="space-y-4">
    <div className="relative">
      <svg
        className="mx-auto"
        width="31"
        height="39"
        viewBox="0 0 31 39"
        fill="none"
      >
        <path
          d="M11.4675 26.018L9.401 18.7462C10.8679 18.4585 12.2009 18.1352 13.4001 17.7762C14.6467 17.3811 15.7576 16.9683 16.7326 16.5379C17.7125 16.1059 18.5352 15.6211 19.2007 15.0833C19.9119 14.5447 20.4455 13.9521 20.8015 13.3054C21.2003 12.6233 21.4001 11.9052 21.4011 11.1511C21.4011 10.3609 21.1343 9.66043 20.6007 9.04974C20.0671 8.403 19.356 7.91813 18.4673 7.59515C17.5796 7.23611 16.5352 7.05658 15.3341 7.05658C13.7779 7.05658 12.2223 7.5054 10.6671 8.40301C9.15651 9.26534 7.77886 10.6302 6.53413 12.4975L0 7.70331C2.00147 5.26135 4.35706 3.37598 7.06675 2.04721C9.82302 0.683163 12.6899 0.000785828 15.6674 0C18.5565 0 21.1566 0.484863 23.4676 1.45459C25.7785 2.38748 27.6005 3.68016 28.9335 5.3327C30.3112 6.98445 31 8.83414 31 10.8818C31 12.1745 30.6667 13.4492 30.0002 14.7058C29.3337 15.9264 28.4004 17.0937 27.2003 18.2077C26.0458 19.2848 24.6682 20.2365 23.0674 21.0628C21.4666 21.8883 19.7106 22.5527 17.7993 23.056L17.0004 26.0192L11.4675 26.018ZM9.06629 34.4222C9.06629 33.0934 9.55574 32.0155 10.5346 31.1885C11.5116 30.3277 12.8005 29.8974 14.4013 29.8974C16.134 29.8974 17.467 30.2921 18.4003 31.0815C19.3336 31.8717 19.8003 32.9849 19.8003 34.421C19.8003 35.7867 19.2895 36.8999 18.2679 37.7606C17.29 38.5869 16.0011 39 14.4013 39C12.7132 39 11.402 38.6053 10.4677 37.8159C9.53342 37.0257 9.06532 35.8944 9.06629 34.4222Z"
          fill="black"
        />
      </svg>
    </div>

    <h2 className="font-poppins text-[35px] font-bold text-black leading-tight">
      Brand Registered or
      <br />
      Industry License Now made Easy
    </h2>

    <p className="font-nunito text-[13px] uppercase text-black tracking-wider">
      Branding and registration experiences Smooth
    </p>

    <button className="inline-flex items-center gap-3 bg-black text-white font-nunito text-base px-5 py-3.5 rounded-xl hover:bg-gray-800 transition-colors">
      Call Us Now
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </div>

  {/* Background Image */}
  <div className="relative">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/87493d93febeedf67abc5b04e4050cf60c04379b?width=2720"
      alt="Office Illustration"
      className="w-full mt-12"
    />

    {/* Government Bodies Section */}
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-80px] w-full">
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Title + Logos in one line */}
        <div className="flex items-center gap-20 flex-wrap md:flex-nowrap">
          <p className="font-outfit text-xl md:text-2xl text-black font-normal whitespace-nowrap">
            UAE Government Bodies
          </p>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/293ffa0f5923e4571ce79e3f82d369c7d4649e8f?width=384"
            alt="Government Body 1"
            className="h-12 md:h-14 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/77dc57d90ad95a1f0678f763bd7c7cf1876d066b?width=397"
            alt="Government Body 2"
            className="h-12 md:h-14 rounded-full object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ebefffcaec2d4b2fd936c8ce816a91a38eeb3550?width=295"
            alt="Government Body 3"
            className="h-14 md:h-16 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dad2e763cb0953ffb3476c78d882172ddebd52dd?width=302"
            alt="Government Body 4"
            className="h-12 md:h-14 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6d864ab57405ff641d4ebf0a2664e861f5c8ea14?width=93"
            alt="Government Body 5"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* "We work with" just below the title */}
        <p className="font-outfit text-base md:text-lg font-bold text-black mt-0 text-left">
          We work with
        </p>
      </section>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <svg
                className="mx-auto mb-4"
                width="31"
                height="39"
                viewBox="0 0 31 39"
                fill="none"
              >
                <path
                  d="M11.4675 26.018L9.401 18.7462C10.8679 18.4585 12.2009 18.1352 13.4001 17.7762C14.6467 17.3811 15.7576 16.9683 16.7326 16.5379C17.7125 16.1059 18.5352 15.6211 19.2007 15.0833C19.9119 14.5447 20.4455 13.9521 20.8015 13.3054C21.2003 12.6233 21.4001 11.9052 21.4011 11.1511C21.4011 10.3609 21.1343 9.66043 20.6007 9.04974C20.0671 8.403 19.356 7.91813 18.4673 7.59515C17.5796 7.23611 16.5352 7.05658 15.3341 7.05658C13.7779 7.05658 12.2223 7.5054 10.6671 8.40301C9.15651 9.26534 7.77886 10.6302 6.53413 12.4975L0 7.70331C2.00147 5.26135 4.35706 3.37598 7.06675 2.04721C9.82302 0.683163 12.6899 0.000785828 15.6674 0C18.5565 0 21.1566 0.484863 23.4676 1.45459C25.7785 2.38748 27.6005 3.68016 28.9335 5.3327C30.3112 6.98445 31 8.83414 31 10.8818C31 12.1745 30.6667 13.4492 30.0002 14.7058C29.3337 15.9264 28.4004 17.0937 27.2003 18.2077C26.0458 19.2848 24.6682 20.2365 23.0674 21.0628C21.4666 21.8883 19.7106 22.5527 17.7993 23.056L17.0004 26.0192L11.4675 26.018ZM9.06629 34.4222C9.06629 33.0934 9.55574 32.0155 10.5346 31.1885C11.5116 30.3277 12.8005 29.8974 14.4013 29.8974C16.134 29.8974 17.467 30.2921 18.4003 31.0815C19.3336 31.8717 19.8003 32.9849 19.8003 34.421C19.8003 35.7867 19.2895 36.8999 18.2679 37.7606C17.29 38.5869 16.0011 39 14.4013 39C12.7132 39 11.402 38.6053 10.4677 37.8159C9.53342 37.0257 9.06532 35.8944 9.06629 34.4222Z"
                  fill="black"
                />
              </svg>
            </div>

            <h2 className="font-inter text-3xl font-semibold text-black mb-2">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-base text-gray-600">
              Know about your query and popularly asked questions
            </p>
          </div>

          {[
            "How long does it take for a Legal Case?",
            "How can I get a personal Lawer?",
            "Where can I check my case Progress?",
          ].map((question, index) => (
            <div
              key={index}
              className="border border-[#D6DCE7] rounded-[26px] p-6 flex items-center justify-between hover:border-blue-300 transition-colors"
            >
              <p className="font-inter text-base font-medium text-black">
                {question}
              </p>
              <button className="text-black/20 hover:text-black/40 transition-colors">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path
                    d="M10.7143 10.7143V0H14.2857V10.7143H25V14.2857H14.2857V25H10.7143V14.2857H0V10.7143H10.7143Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ))}

          <div className="text-center mt-8">
            <button className="bg-black text-white font-inter text-base px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Contact Us Now ~ it's free
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}


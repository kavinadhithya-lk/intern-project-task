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
                <svg className="absolute -top-2 -right-6" width="23" height="26" viewBox="0 0 23 26" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.66896 23.5826C5.49012 22.9711 3.20894 22.6627 0.996051 22.3801C0.519428 22.3209 0.0769172 22.6515 0.0428728 23.1172C-0.0252161 23.5833 0.315428 24.0095 0.758005 24.0687C2.9028 24.3407 5.11549 24.6318 7.1922 25.2204C7.63478 25.3481 8.1116 25.0853 8.24778 24.6332C8.38396 24.1814 8.11154 23.7106 7.66896 23.5826Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2733 14.9139C10.7667 11.3354 6.81758 8.21765 3.37909 4.54324C3.07269 4.20007 2.52798 4.18168 2.18753 4.50204C1.84709 4.82274 1.81318 5.362 2.15362 5.70517C5.59211 9.39014 9.54127 12.5181 13.0478 16.1071C13.3883 16.4421 13.9329 16.4469 14.2733 16.1173C14.5797 15.7881 14.6138 15.2489 14.2733 14.9139Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8443 1.15002C20.9464 3.19813 21.0484 5.24624 21.1505 7.29469C21.1505 7.76383 21.5592 8.12606 22.0359 8.10325C22.5125 8.0801 22.8527 7.68076 22.8527 7.21129C22.7506 5.15977 22.6487 3.10859 22.5465 1.05741C22.5125 0.588281 22.1039 0.228431 21.6273 0.253965C21.1847 0.279498 20.8103 0.681223 20.8443 1.15002Z" fill="black"/>
                </svg>
              </div>
              
              <h1 className="font-poppins text-[40px] md:text-[45px] font-bold leading-[120%] text-[#00243D]">
                Office's Made with<br />International Standards
              </h1>
              
              <p className="font-poppins text-lg text-dark max-w-[635px]">
                Business Hub and Buildings, Office Space, Real estate farm that makes your dreams true
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
                Cost-effective office solutions that give you a legal business address, access to shared desks, and meeting facilities. Perfect for freelancers, startups, and SMEs looking for credibility without high overhead costs.
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
                we assist in finding the right office space that matches your business needs and complies with UAE regulations. From negotiation to documentation, we make leasing smooth and stress-free.
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
              <div className="absolute -bottom-8 left-8">
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
                  'Property management firms',
                  'Real estate developers',
                  'Real estate marketing agencies',
                  'Property consultancies',
                  'Real estate brokerages'
                ].map((item) => (
                  <p key={item} className="font-poppins text-xl font-bold uppercase text-[#505050]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Cards */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Commercial License */}
          <div className="bg-[#3790AE] rounded-xl p-6 space-y-6">
            <div className="w-[51px] h-[51px]">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path d="M34.7132 45.5653H18.7998C15.3898 45.5653 13.6848 45.5653 12.1692 44.8075C10.8431 44.0497 9.70639 42.913 9.13805 41.5869C8.38027 40.0714 8.38027 38.3663 8.38027 34.9563V26.9996C8.38027 26.2418 8.9486 25.484 9.89583 25.484C10.8431 25.484 11.4114 26.0524 11.4114 26.9996V34.9563C11.4114 37.9874 11.4114 39.3136 11.7903 40.2608C12.1692 41.0186 12.927 41.7764 13.6848 42.1553C14.632 42.5341 16.1475 42.5341 18.9892 42.5341H34.9027C37.9338 42.5341 39.2599 42.5341 40.2072 42.1553C40.965 41.7764 41.7227 41.0186 42.1016 40.2608C42.4805 39.3136 42.4805 37.798 42.4805 34.9563V19.0429C42.4805 16.0117 42.4805 14.6856 42.1016 13.7384C41.7227 12.9806 40.965 12.2228 40.2072 11.8439C39.2599 11.465 37.7444 11.465 34.9027 11.465H26.7565C25.9987 11.465 25.2409 10.8967 25.2409 9.94946C25.2409 9.00223 25.8093 8.43389 26.7565 8.43389H34.7132C38.1233 8.43389 39.8283 8.43389 41.3439 9.19167C42.67 9.94946 43.8066 10.8967 44.375 12.2228C45.1328 13.7384 45.1328 15.4434 45.1328 18.8534V34.7669C45.1328 38.1769 45.1328 39.8819 44.375 41.3975C43.6172 42.7236 42.67 43.8603 41.3439 44.4286C39.8283 45.5653 38.1233 45.5653 34.7132 45.5653ZM34.3344 37.9874C33.5766 37.9874 32.8188 37.4191 32.8188 36.4719V25.1051C32.8188 24.3473 33.3871 23.5896 34.3344 23.5896C35.2816 23.5896 35.8499 24.1579 35.8499 25.1051V36.4719C35.8499 37.4191 35.0921 37.9874 34.3344 37.9874ZM26.7565 37.9874C25.9987 37.9874 25.2409 37.4191 25.2409 36.4719V17.5273C25.2409 16.7695 25.8093 16.0117 26.7565 16.0117C27.7037 16.0117 28.2721 16.5801 28.2721 17.5273V36.4719C28.2721 37.4191 27.5143 37.9874 26.7565 37.9874ZM19.1787 37.9874C18.4209 37.9874 17.6631 37.4191 17.6631 36.4719V28.894C17.6631 28.1363 18.2315 27.3785 19.1787 27.3785C20.1259 27.3785 20.6942 27.9468 20.6942 28.894V36.4719C20.6942 37.4191 19.9365 37.9874 19.1787 37.9874ZM13.4953 20.9373C12.7375 20.9373 11.9797 20.369 11.9797 19.4218V11.465L8.75916 14.875C8.19082 15.4434 7.24359 15.4434 6.67525 14.875C6.10692 14.3067 6.10692 13.3595 6.67525 12.7911L12.3586 7.10777C12.5481 6.91832 12.7375 6.91832 12.7375 6.72888C13.1164 6.53943 13.4953 6.53943 13.8742 6.72888C14.0636 6.72888 14.2531 6.91832 14.2531 7.10777L19.9365 12.7911C20.5048 13.3595 20.5048 14.3067 19.9365 14.875C19.3681 15.4434 18.4209 15.4434 17.8526 14.875L15.0109 11.465V19.4218C15.0109 20.369 14.2531 20.9373 13.4953 20.9373Z" fill="white"/>
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
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2234 1.13623H28.3682C29.6332 1.13621 30.6891 1.13619 31.5518 1.20667C32.4516 1.2802 33.2963 1.43916 34.0951 1.84606C35.3188 2.47093 36.3162 3.46746 36.941 4.69116C37.3479 5.49003 37.5077 6.33632 37.5813 7.23613C37.6517 8.0988 37.6517 9.1547 37.6517 10.4197V42.7756C37.6517 44.0406 37.6517 45.0965 37.5813 45.9592C37.5077 46.859 37.3488 47.7036 36.9419 48.5025C36.317 49.7262 35.3205 50.7235 34.0968 51.3484C33.2979 51.7553 32.4516 51.9151 31.5518 51.9886C30.6891 52.0591 29.6332 52.0591 28.3682 52.0591H10.2234C8.95835 52.0591 7.90245 52.0591 7.03978 51.9886C6.13997 51.9151 5.2953 51.7561 4.49643 51.3492C3.27274 50.7244 2.27541 49.7278 1.65054 48.5041C1.24364 47.7053 1.08385 46.859 1.01032 45.9592C0.939835 45.0965 0.939856 44.0406 0.939881 42.7755V10.4197C0.939856 9.15472 0.939835 8.09881 1.01032 7.23613C1.08385 6.33632 1.24281 5.49165 1.64971 4.69278C2.27458 3.46908 3.27111 2.47176 4.49481 1.84689C5.29368 1.43999 6.13997 1.2802 7.03978 1.20667C7.90246 1.13619 8.95837 1.13621 10.2234 1.13623ZM6.1097 5.01142C5.55293 5.29594 5.09959 5.74928 4.81507 6.30605C4.7058 6.52091 4.60677 6.84631 4.55128 7.52546C4.49402 8.22623 4.49264 9.13615 4.49264 10.4918V42.7035C4.49264 44.0591 4.49402 44.9691 4.55128 45.6698C4.60684 46.3498 4.70604 46.6752 4.81547 46.8901C5.10011 47.4475 5.5531 47.8997 6.11052 48.1843C6.32537 48.2937 6.64912 48.3921 7.32911 48.4477C8.02988 48.5049 8.9398 48.5063 10.2955 48.5063H28.2961C29.6518 48.5063 30.5617 48.5049 31.2625 48.4477C31.9415 48.3922 32.2669 48.2932 32.4818 48.1839C33.0386 47.8994 33.492 47.446 33.7766 46.8891C33.8858 46.6743 33.9848 46.3489 34.0403 45.6698C34.0976 44.9691 34.0989 44.0591 34.0989 42.7035V10.4918C34.0989 9.13615 34.0976 8.22623 34.0403 7.52546C33.9848 6.84574 33.8856 6.52036 33.7762 6.3055C33.4917 5.74909 33.0386 5.29601 32.4822 5.01157C32.2673 4.90224 31.9419 4.80315 31.2625 4.74763C30.5617 4.69037 29.6518 4.68899 28.2961 4.68899H10.2955C8.9398 4.68899 8.02988 4.69037 7.32911 4.74763C6.64996 4.80312 6.32455 4.90215 6.1097 5.01142ZM16.3352 39.6244C16.3352 37.9896 17.661 36.6638 19.2958 36.6638C20.9306 36.6638 22.2564 37.9896 22.2564 39.6244C22.2564 41.2592 20.9306 42.5851 19.2958 42.5851C17.661 42.5851 16.3352 41.2592 16.3352 39.6244Z" fill="white"/>
              </svg>
            </div>
            <h3 className="font-poppins text-[22px] font-bold text-white leading-tight tracking-wide">
              Professional License
            </h3>
            <p className="font-poppins text-[15px] text-white leading-relaxed">
              Designed for consultants, freelancers, and service providers. We ensure your license is issued quicklywhile keeping you fully compliant with UAE regulations.
            </p>
          </div>

          {/* Industrial License */}
          <div className="bg-[#3790AE] rounded-xl p-6 space-y-6">
            <div className="w-[47px] h-[48px]">
              <svg width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path d="M48.8032 10.3482L48.8032 37.7352C48.8032 40.5684 48.8032 42.221 48.0949 43.8737C47.3867 45.2903 46.4423 46.2347 45.0257 46.943C43.373 47.6512 41.7204 47.6512 38.8872 47.6512L20.4718 47.6512C18.583 47.6512 17.4025 47.6512 16.2221 47.1791C15.2777 46.7069 14.3333 46.2347 13.625 45.5264C12.6806 44.582 12.4445 43.6376 11.5001 41.985L1.82023 20.9725C0.875849 18.8476 0.403658 17.6671 0.639754 16.2505C0.875849 15.0701 1.58414 13.8896 2.52852 13.1813C3.70899 12.2369 5.12557 12.2369 7.48652 12.2369L13.3889 12.2369L13.3889 10.3482C13.3889 7.51502 13.3889 5.86235 14.0972 4.20968C14.8055 2.79311 15.7499 1.84872 17.1664 1.14044C18.583 0.432151 20.2357 0.432155 23.3049 0.432155L38.8872 0.432154C41.7204 0.432154 43.373 0.43215 45.0257 1.14044C46.4423 1.84872 47.3867 2.79311 48.0949 4.20968C48.8032 5.86235 48.8032 7.51502 48.8032 10.3482ZM32.2765 42.9293L38.8872 42.9293C41.0121 42.9293 42.1926 42.9293 42.9008 42.6932C43.373 42.4571 43.6091 42.221 43.8452 41.7489C44.0813 41.2767 44.0813 39.8601 44.0813 37.7352L44.0813 10.3482C44.0813 8.2233 44.0813 7.04283 43.8452 6.33454C43.6091 5.86235 43.373 5.62625 42.9008 5.39016C42.1925 5.15406 40.776 5.15406 38.8872 5.15406L23.3049 5.15406C21.1801 5.15406 19.9996 5.15406 19.2913 5.39016C18.8191 5.62625 18.583 5.86235 18.3469 6.33454C18.1108 6.80673 18.1108 8.2233 18.1108 10.3482L18.1108 37.7352C18.1108 39.8601 18.1108 41.0406 18.3469 41.7489C18.583 41.985 18.8191 42.4571 19.2913 42.6932C19.7635 42.9293 21.1801 42.9293 23.3049 42.9293L32.2765 42.9293ZM13.3889 34.4299L13.3889 16.9588L7.48652 16.9588C6.54214 16.9588 5.83385 16.9588 5.36166 16.9588C5.59776 17.431 5.83385 18.1393 6.30604 18.8476L13.3889 34.4299ZM34.6375 13.4174C34.6375 15.3062 32.9848 16.9588 31.0961 16.9588C29.2073 16.9588 27.5546 15.3062 27.5546 13.4174C27.5546 11.5286 29.2073 9.87597 31.0961 9.87597C32.9848 9.87597 34.6375 11.5286 34.6375 13.4174Z" fill="white"/>
              </svg>
            </div>
            <h3 className="font-poppins text-[22px] font-bold text-white leading-tight tracking-wide">
              Industrial License
            </h3>
            <p className="font-nunito text-[15px] text-white leading-relaxed">
              Necessary for manufacturing, industrial, and production activities. Our team handles feasibility studies,environmental clearances, and approvals to help you start operations seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Registration Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-20">
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
      <section className="relative">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/87493d93febeedf67abc5b04e4050cf60c04379b?width=2720" 
          alt="Office Illustration"
          className="w-full"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative">
              <svg className="mx-auto" width="31" height="39" viewBox="0 0 31 39" fill="none">
                <path d="M11.4675 26.018L9.401 18.7462C10.8679 18.4585 12.2009 18.1352 13.4001 17.7762C14.6467 17.3811 15.7576 16.9683 16.7326 16.5379C17.7125 16.1059 18.5352 15.6211 19.2007 15.0833C19.9119 14.5447 20.4455 13.9521 20.8015 13.3054C21.2003 12.6233 21.4001 11.9052 21.4011 11.1511C21.4011 10.3609 21.1343 9.66043 20.6007 9.04974C20.0671 8.403 19.356 7.91813 18.4673 7.59515C17.5796 7.23611 16.5352 7.05658 15.3341 7.05658C13.7779 7.05658 12.2223 7.5054 10.6671 8.40301C9.15651 9.26534 7.77886 10.6302 6.53413 12.4975L0 7.70331C2.00147 5.26135 4.35706 3.37598 7.06675 2.04721C9.82302 0.683163 12.6899 0.000785828 15.6674 0C18.5565 0 21.1566 0.484863 23.4676 1.45459C25.7785 2.38748 27.6005 3.68016 28.9335 5.3327C30.3112 6.98445 31 8.83414 31 10.8818C31 12.1745 30.6667 13.4492 30.0002 14.7058C29.3337 15.9264 28.4004 17.0937 27.2003 18.2077C26.0458 19.2848 24.6682 20.2365 23.0674 21.0628C21.4666 21.8883 19.7106 22.5527 17.7993 23.056L17.0004 26.0192L11.4675 26.018ZM9.06629 34.4222C9.06629 33.0934 9.55574 32.0155 10.5346 31.1885C11.5116 30.3277 12.8005 29.8974 14.4013 29.8974C16.134 29.8974 17.467 30.2921 18.4003 31.0815C19.3336 31.8717 19.8003 32.9849 19.8003 34.421C19.8003 35.7867 19.2895 36.8999 18.2679 37.7606C17.29 38.5869 16.0011 39 14.4013 39C12.7132 39 11.402 38.6053 10.4677 37.8159C9.53342 37.0257 9.06532 35.8944 9.06629 34.4222Z" fill="black"/>
              </svg>
            </div>
            
            <h2 className="font-poppins text-[35px] font-bold text-black leading-tight">
              Brand Registered or<br />Industry License Now made Easy
            </h2>
            
            <p className="font-nunito text-[13px] uppercase text-black tracking-wider">
              Branding and registration experiences Smooth
            </p>
            
            <button className="inline-flex items-center gap-3 bg-black text-white font-nunito text-base px-5 py-3.5 rounded-xl hover:bg-gray-800 transition-colors">
              Call Us Now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Government Bodies */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="space-y-8">
          <div className="font-outfit text-xl">
            <span className="text-black">UAE Government Bodies</span>
            <br />
            <span className="font-bold text-black">We work with</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/293ffa0f5923e4571ce79e3f82d369c7d4649e8f?width=384" alt="Government Body 1" className="h-12" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/77dc57d90ad95a1f0678f763bd7c7cf1876d066b?width=397" alt="Government Body 2" className="h-12 rounded-full" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ebefffcaec2d4b2fd936c8ce816a91a38eeb3550?width=295" alt="Government Body 3" className="h-24" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/dad2e763cb0953ffb3476c78d882172ddebd52dd?width=302" alt="Government Body 4" className="h-16" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/6d864ab57405ff641d4ebf0a2664e861f5c8ea14?width=93" alt="Government Body 5" className="h-10" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <svg className="mx-auto mb-4" width="31" height="39" viewBox="0 0 31 39" fill="none">
                <path d="M11.4675 26.018L9.401 18.7462C10.8679 18.4585 12.2009 18.1352 13.4001 17.7762C14.6467 17.3811 15.7576 16.9683 16.7326 16.5379C17.7125 16.1059 18.5352 15.6211 19.2007 15.0833C19.9119 14.5447 20.4455 13.9521 20.8015 13.3054C21.2003 12.6233 21.4001 11.9052 21.4011 11.1511C21.4011 10.3609 21.1343 9.66043 20.6007 9.04974C20.0671 8.403 19.356 7.91813 18.4673 7.59515C17.5796 7.23611 16.5352 7.05658 15.3341 7.05658C13.7779 7.05658 12.2223 7.5054 10.6671 8.40301C9.15651 9.26534 7.77886 10.6302 6.53413 12.4975L0 7.70331C2.00147 5.26135 4.35706 3.37598 7.06675 2.04721C9.82302 0.683163 12.6899 0.000785828 15.6674 0C18.5565 0 21.1566 0.484863 23.4676 1.45459C25.7785 2.38748 27.6005 3.68016 28.9335 5.3327C30.3112 6.98445 31 8.83414 31 10.8818C31 12.1745 30.6667 13.4492 30.0002 14.7058C29.3337 15.9264 28.4004 17.0937 27.2003 18.2077C26.0458 19.2848 24.6682 20.2365 23.0674 21.0628C21.4666 21.8883 19.7106 22.5527 17.7993 23.056L17.0004 26.0192L11.4675 26.018ZM9.06629 34.4222C9.06629 33.0934 9.55574 32.0155 10.5346 31.1885C11.5116 30.3277 12.8005 29.8974 14.4013 29.8974C16.134 29.8974 17.467 30.2921 18.4003 31.0815C19.3336 31.8717 19.8003 32.9849 19.8003 34.421C19.8003 35.7867 19.2895 36.8999 18.2679 37.7606C17.29 38.5869 16.0011 39 14.4013 39C12.7132 39 11.402 38.6053 10.4677 37.8159C9.53342 37.0257 9.06532 35.8944 9.06629 34.4222Z" fill="black"/>
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
            'How long does it take for a Legal Case?',
            'How can I get a personal Lawer?',
            'Where can I check my case Progress?'
          ].map((question, index) => (
            <div key={index} className="border border-[#D6DCE7] rounded-[26px] p-6 flex items-center justify-between hover:border-blue-300 transition-colors">
              <p className="font-inter text-base font-medium text-black">
                {question}
              </p>
              <button className="text-black/20 hover:text-black/40 transition-colors">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M10.7143 10.7143V0H14.2857V10.7143H25V14.2857H14.2857V25H10.7143V14.2857H0V10.7143H10.7143Z" fill="currentColor"/>
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

      {/* Contact Floating Buttons */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-40">
        <button className="flex items-center gap-3 bg-white rounded-[20px] px-4 py-3 shadow-lg hover:shadow-xl transition-shadow">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b87f9e445757efcac28c4f37d6f43f9ade61c852?width=118" alt="Chat" className="w-12 h-12" />
          <span className="font-poppins text-[21px] font-medium text-black">Let's Talk</span>
        </button>
        
        <button className="flex items-center gap-3 bg-white rounded-[20px] px-4 py-3 shadow-lg hover:shadow-xl transition-shadow">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/dc3fa2d440ebf0ba7f1962ca064a74588783631a?width=83" alt="WhatsApp" className="w-11 h-11" />
          <span className="font-poppins text-[21px] font-medium text-black">Whatsapp</span>
        </button>
        
        <button className="flex items-center gap-3 bg-white rounded-[20px] px-4 py-3 shadow-lg hover:shadow-xl transition-shadow">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9cabd8d490a3545e6a9df081e4c879cdc0cfd88b?width=98" alt="Email" className="w-12 h-12" />
          <span className="font-poppins text-[21px] font-medium text-black">E-Mail Us</span>
        </button>
      </div>
    </div>
  );
}

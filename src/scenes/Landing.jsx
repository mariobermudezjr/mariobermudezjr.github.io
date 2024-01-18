import SocialMediaIcons from '../components/SocialMediaIcons'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Chrono } from 'react-chrono'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')
  const items = [
    {
      title: 'RN Dev.',
      cardTitle: 'LB Studioz | Jul. 2017 - Jan. 2018',
      url: '',
      cardSubtitle:
        'Responsible for day-to-day mockup design, collaboration and execution including feature prioritization, tracking, and timely delivery of executables as well as Front End lead for multiple projects.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://images1.loopnet.com/i2/43QG3q2oR7Z71gD6xQi78gOm0rFmFWKXXxrTqYESI2A/112/200-Pine-Ave-Long-Beach-CA-200-PINE-1-HighDefinition.jpg',
        },
      },
    },
    {
      title: 'Android Dev.',
      cardTitle: 'Corsa Consulting | Sept. 2018 - Feb. 2019',
      url: '',
      cardSubtitle: 'Key Responsibilities:',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://images.squarespace-cdn.com/content/v1/54cfbd2fe4b031c963dba022/1452197725306-8I5PQ3U3MYXNJ1IQ13TT/image-asset.jpeg?format=1500w',
        },
      },
    },
    {
      title: 'FE Dev.',
      cardTitle: 'Corrigan Consulting | Apr. 2019 - Aug. 2019',
      url: '',
      cardSubtitle:
        'Support AI Software Engineer with Front End workflow by participating and reviewing goals and tasks in bi-monthly meetings with stakeholders.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://images1.loopnet.com/i2/43QG3q2oR7Z71gD6xQi78gOm0rFmFWKXXxrTqYESI2A/112/200-Pine-Ave-Long-Beach-CA-200-PINE-1-HighDefinition.jpg',
        },
      },
    },
    {
      title: 'Product Manager',
      cardTitle: 'LA Solar Group | May. 2021 - Oct. 2023',
      url: '',
      cardSubtitle:
        'Responsible for day-to-day mockup design, collaboration and execution including feature prioritization, tracking, and timely delivery of executables as well as Front End lead for multiple projects.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://d1gb2i0yetjsvi.cloudfront.net/wp-content/uploads/2023/06/87568845_3565300163541803_7669952507002486784_n-e1686855590414-768x583.jpg',
        },
      },
    },
  ]

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      {/* <div className="basis-full z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-w-[1200px]"
              src="assets/profile-imag.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[300px]"
            src="assets/profile-imag.png"
          />
        )}
      </div> */}

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/ mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Mario {''}
            <span
              className="xs:relative @apply xs:text-blue-600 #{!important} xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[15px] before:-top-[70px] before:z-[-1] min-w-fit"
            >
              Bermudez Jr
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            A full stack developer with 3+ years of experience. Solution-driven professional
            excelling in highly collaborative work environment, finding solutions to challenges and
            focused on customer satisfaction. Proven experience developing consumer-focused web
            sites. Worked through challenges by designing and developing solutions and building web
            applications aligned to customer's services. Translating solutions into code and working
            across many different APIs, third-party integrations and databases.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-6 font-semibold mr-4
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('skills')}
            href="#skills"
          >
            Explore
          </AnchorLink> */}
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-1.5 mr-3"
            onClick={() => setSelectedPage('projects')}
            href="#projects"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 py-2 w-full h-full flex items-center align-center mx-1 justify-center px-6 font-playfair ">
              Projects
            </div>
          </AnchorLink>

          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-6 font-semibold mr-4
                        hover:bg-blue hover:text-white transition duration-500"
            download=""
            href="https://drive.google.com/file/d/1KHysVD8E6GjRF-EUONA8R0G2Ap1QeoNG/view?usp=sharing"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div style={{ width: '100%', height: '52vh' }}>
            <Chrono
              items={items}
              mediaSettings={{ align: 'center', fit: 'contain' }}
              theme={{
                primary: '#25CBFF',
                secondary: 'blue',
                cardBgColor: '#000B27',
                titleColor: 'white',
                titleColorActive: 'white',
                color: '#FFF',
              }}
              fontSizes={{
                cardSubtitle: '0.85rem',
                cardText: '0.8rem',
                cardTitle: '1rem',
                title: '1rem',
              }}
              buttonTexts={{
                first: 'Jump to First',
                last: 'Jump to Last',
                next: 'Next',
                previous: 'Previous',
              }}
              mode="HORIZONTAL"
              enableBreakPoint={true}
              enableOutline={false}
              scrollable
              slideShow
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing

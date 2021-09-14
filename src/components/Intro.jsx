import React, { useEffect } from "react";
import Aos from "aos";
import Crousel from "../components/Crousel";
import Parallax from "react-rellax";
import about3 from "../images/about3.png";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 id="introh1" className="text-center py-5">
              SRIMAD BHAGAVAD-GITA
            </h1>
            <Parallax speed={3}>
              <Crousel className="crousel" />
            </Parallax>
            <hr />
            <p data-aos="fade-up" id="intropara">
              <span style={{ fontWeight: "bold" }}>Namaste!</span>
              Welcome to the Bhagavad- Gita online. We are happy you have
              arrived and it will be our pleasure to serve you. Here you will be
              presented transcendental knowledge of the most profound spiritual
              nature as revealed in the Bhagavad- Gita. It is the divine
              discourse spoken by the Supreme Lord Krishna Himself and is the
              most popular and well known of all the sacred scriptures from
              ancient India. Always being revered as a true source of spiritual
              knowledge it reveals the purpose and goal of human existence. In
              conjunction to this we will be presenting precise Vedic
              verification of the Supreme Lord Krishna's divine incarnations as
              evidence confirming His supreme position. In Bhagavad- Gita,
              chapter 10, verse 20, the Supreme Lord reveals that He manifests
              as the immortal soul within each and every living entity. No where
              else within any other religious scripture is this information
              available. Our purpose is to make the eternal knowledge of
              Bhagavad- Gita freely available to everyone all over the Earth.
            </p>
            <p data-aos="zoom-out-up">
              There are three paths which lead directly to establishing a
              relationship with God. According to the authority of Bhagavad-Gita
              these paths have been designated as the yoga of perfect actions,
              the yoga of perfect devotion and the yoga of perfect knowledge.
              These three paths with great care and attention have been fully
              explained in the Bhagavad-Gita which comprises chapters 23 through
              40 in the Bhishma-Parva section of Mahabharata.
            </p>
            <div className="row mb-2">
              <div className="col-md-4">
                <div
                  data-aos="fade-up-up"
                  id="card"
                  className="card flex-md-row mb-4 box-shadow h-md-250"
                >
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">
                      KARMA YOGA
                    </strong>

                    <p className="card-text mb-auto">
                      The first six chapters have been classified as the Karma
                      Yoga section as they mainly deal with the science of the
                      individual consciousness attaining communion with the
                      Ultimate Consciousness through actions. These chapters
                      are:
                    </p>
                    <ul>
                      <li>Chapter 1 : Visada Yoga</li>
                      <li>Chapter 2 : Sankhya Yoga </li>
                      <li>Chapter 3 : Karma Yoga </li>
                      <li>Chapter 4 : Jnana Yoga</li>
                      <li>Chapter 5 : Karma Vairagya Yoga</li>
                      <li>Chapter 6 : Abhyasa Yoga</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-up"
                  id="card"
                  className="card flex-md-row mb-4 box-shadow h-md-250"
                >
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">
                      BHAKTI YOGA
                    </strong>
                    <p className="card-text mb-auto">
                      The middle six chapters have been designated as the Bhakti
                      Yoga section as they principally are pertaining with the
                      science of the individual consciousness attaning communion
                      with the Ultimate Consciousness by the path of devotion.
                    </p>
                    <ul>
                      <li>Chapter 7 : Paramahamsa Vijnana Yoga</li>
                      <li>Chapter 8 : Aksara-Parabrahman Yoga </li>
                      <li>Chapter 9 : Raja-Vidya-Guhya Yoga </li>
                      <li>Chapter 10 : Vibhuti-Vistara-Yoga </li>
                      <li>Chapter 11 : Visvarupa-Darsana Yoga</li>
                      <li>Chapter 12 : Bhakti Yoga </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-up-down"
                  id="card"
                  className="card flex-md-row mb-4 box-shadow h-md-250"
                >
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">
                      JNANA YOGA
                    </strong>

                    <p className="card-text mb-auto">
                      The final six chapters are regarded as the Jnana Yoga
                      section as they are primarily concerned with the science
                      of the individual consciousness attaining communion with
                      the Ultimate Consciousness through the intellect.
                    </p>
                    <ul>
                      <li>Chapter 13 : Ksetra-Ksetrajna Vibhaga Yoga </li>
                      <li>Chapter 14 : Gunatraya-Vibhaga Yoga </li>
                      <li>Chapter 15 : Purusottama Yoga </li>
                      <li>Chapter 16 : Daivasura-Sampad-Vibhaga Yoga </li>
                      <li>Chapter 17 : Sraddhatraya-Vibhaga Yoga </li>
                      <li>Chapter 18 : Moksa-Opadesa Yoga </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p data-aos="zoom-out-up">
                Many of you have been taught by your religions that God is to be
                feared. Many of you have been taught that this life is all their
                is and after this life there is nothing more. Others have been
                taught that after death one goes to heaven or hell. Still other
                have been taught that it is possible for the soul to be
                possessed. Some of you believe the possibility of reincarnation
                and others among you cannot fathom what is true and what is
                false. Many of you have been conditioned by erroneous
                conceptions, programed by false realities and even brainwashed
                to follow belief systems that intelligently it is difficult to
                follow.
              </p>
              <p data-aos="zoom-out-up">
                Now we are giving everyone the oppurtunity to learn the eternal
                message of Bhagavad-Gita. All intelligent species of life, human
                being and otherwise can take advantage of these instructions and
                benefit eternally by the transcendental knowledge contained
                within the Bhagavad-Gita and we are confident that this
                realization will manifest as a reality in the forseeable future.
              </p>
              <hr />
              <div className="row flex-lg-row-reverse align-items-center g-2">
                <div
                  data-aos="fade-up-down"
                  className="col-10 col-sm-8 col-lg-6"
                >
                  <img
                    id="aboutimg2"
                    src={about3}
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="500"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <div data-aos="fade-up" className="col-lg-6">
                  <h1
                    style={{ color: "#28d" }}
                    className="display-5 fw-bold lh-1 mb-3"
                  >
                    What is Vaishnavism?
                  </h1>
                  <p style={{ color: "black" }} className="lead">
                    Vaishnavism is one of the major traditions within the
                    broader Vedic, or Hindu, spiritual culture. Unlike some
                    Vedic traditions, Vaishnavas believe that the ultimate
                    reality is personal. Thus, they understand that God is the
                    Supreme all-attractive person, or Krishna. They acknowledge
                    that all living beings are eternal persons, and that all
                    life’s problems are rooted in the individual soul’s
                    forgetfulness of his or her relationship with God.
                    Vaishnavas teach that by chanting God’s names the soul can
                    reawaken his original spiritual knowledge, live peacefully
                    in this life and return to the spiritual realm, or
                    Vaikuntha, the place of no anxiety, at the time of death.
                  </p>
                  <p></p>
                </div>
                <p data-aos="fade-up">
                  There are four main sampradayas or Vaishnava lineages all
                  based originally in India. Vaishnavas worship Lord Vishnu,
                  Lord Rama, and Lord Krishna as different manifestations of the
                  same Supreme Lord or one supreme divinity, although the styles
                  of worship and emphasis differ. The Vaishnava tradition has
                  widely influenced South Asian culture through music, dance,
                  theater and art. Vaishnavism’s heartfelt philosophy and poetic
                  sacred texts integrate a profound theology with astute social
                  discourse. The key Vaishnava sastras, or scriptures, are
                  Krishna’s teachings in the Bhagavad-gita, included in the
                  longer work, the Mahabharata), the Srimad Bhagavatam (one of
                  the eighteen Puranas), the Ramayana, and the more recent 16th
                  Century Sri Chaitanya-charitamrita.
                </p>
                <hr />
              </div>
              <h2 data-aos="zoom-out-up" style={{ color: "crimson" }} className="text-center">Embedded in the Mahabharat</h2>
              <p data-aos="zoom-out-up">
                The Bhagavad Gita was originally compiled by Ved Vyas as a
                separate text. Later, when he wrote the Mahabharat, he embedded
                the Bhagavad Gita in it. The Mahabharat contains one hundred
                thousand verses, and is therefore, the largest poem in the
                world. It is seven times bigger than the Iliad and Odyssey put
                together and three times bigger than the Bible. Along with the
                Ramayan, it is accorded the status of Itihās, meaning historical
                manuscript of India. Its stories and moral instructions have
                fashioned the fabric of Indian culture for thousands of years.
                The Mahabharat is divided into eighteen sections. The Bhagavad
                Gita is set in the sixth section, which is called the Bheeshma
                Parva. It comprises eighteen chapters of the section, beginning
                from Chapter Twenty-five, and continuing until the Chapter
                Forty-two. Since the Bhagavad Gita encapsulates most of the
                important aspects of the knowledge of the Vedas, it is also
                called Gitopanishad, or the Gitā Upaniṣhad. It serves two
                important purposes as described below.
              </p>
              <hr />
              <h2 data-aos="zoom-out-up" style={{ color: "crimson" }} className="text-center">The Setting of the Bhagavad Gita</h2>
              <p data-aos="fade-up">
                Though the Truth is one and eternal, in different ages it
                expresses itself in varied locales that impart their unique
                flavor to its presentation. The teaching of the Bhagavad Gita
                must therefore not be regarded merely in the light of a
                generalized philosophy or ethical doctrine. It is the practical
                application of ethics to human life in a specific situation of
                crisis that serves as its setting. Since its teachings are
                exceedingly profound, the Bhagavad Gita required an equally
                problematic and insurmountable crisis as its setting. Thus, in
                order to fully appreciate the value of its ideas, the historical
                flow of events that led to the speaking of the divine message to
                Arjun by Lord Krishna on the battlefield of Kurukshetra must
                also be known. The setting in which the Bhagavad Gita was spoken
                was the onset of the Mahabharat, a colossal war that was about
                to begin between two sets of cousins, the Kauravas and the
                Pandavas. The Pandavas—Yudhishthir, Bheem, Arjun, Nakul, and
                Sahadev—were five noble brothers. Their father, King Pandu, had
                suffered an unfortunate death while his five sons were still
                very young. Pandu’s throne had been usurped by his step brother,
                Dhritarashtra, who was blind from birth. Dhritarashtra had a
                hundred sons, called the Kauravas, the eldest of whom was
                Duryodhan. For years, the Kauravas, led by Duryodhan, had
                victimized their cousins, the Pandavas, and governed over the
                kingdom of Hastinapur, which did not upfully belong to them.
                The Kauravas embodied cruelty, injustice, vice, oppression, and
                irreligion. On the other hand, the Pandavas were saintly and
                virtuous—the epitomes of morality, sacrifice, devotion, and
                compassion. Most importantly, they were great devotees of the
                Supreme Lord Shree Krishna. Due to the oppression meted out to
                them by the Kauravas, the miseries of the Pandavas had become so
                unbearable that a war between the two sides had become imminent.
                Realizing the unavoidability of the war, both sides had
                canvassed for support from the scores of kingdoms that littered
                the landscape of Bharat (India) at that time. The two groups of
                cousins were so powerful that the war would impact the whole of
                Bharat. Thus, all the kings in the land were obliged to align
                themselves with one side or the other. As a part of the vigorous
                mobilization attempts, both Arjun and Duryodhan had reached
                Dwaraka to request the help of Lord Krishna. Being omniscient,
                Shree Krishna knew that they were coming to entreat His help. He
                created a situation that set the didactical tone for the
                approaching battle. He posed to be sleeping in His chamber.
                Arjun entered the chamber and, in a mood of humbleness, sat by
                the side of Shree Krishna’s feet, waiting for Him to wake up. In
                the meantime, Duryodhan also arrived, and in his characteristic
                arrogance, sat on a chair behind Shree Krishna’s head. When
                Shree Krishna awoke, His eyes naturally fell first upon Arjun,
                and later, He was made aware of the presence of Duryodhan as
                well. Both parties sought His assistance in the war. Since Arjun
                and Duryodhan were both Shree Krishna’s cousins, He did not wish
                to be blamed of partiality. So He offered that to one side He
                would give His huge army of the kingdom of Dwaraka, while to the
                other side He would Himself remain but without any weapons.
                Since Shree Krishna had seen Arjun first upon waking up, He gave
                the first choice to Him. Arjun elected to have Shree Krishna on
                His side, though without weapons. He decided that if God was
                with Him, He could never lose. Duryodhan was pleased by Arjun’s
                choice, for he believed solely in material strength based upon
                military might. The Supreme Lord Shree Krishna thus became the
                charioteer of Arjun in the war. On the verge of the battle, huge
                armies had gathered on either side upon the battlefield of
                Kurukshetra. This was the impending war of Mahabharat (the great
                battle of India). The situation was extremely grave, as an era
                was about to self-destruct itself in internecine warfare. Just
                before the combat was about to begin, Arjun requested Lord
                Krishna to pull his chariot between the two armies. On seeing
                the warriors who had arrayed themselves for combat, Arjun lost
                heart. In a fit of despondency, he threw down his bow and
                refused to fight. Arjun was a victim of a moral paradox. On the
                one hand, he was facing persons who deserved his respect and
                veneration such as his grandfather, Bheeshma, his teacher,
                Dronacharya, etc. On the other hand, his duty as a warrior was
                to fight the war of upeousness. Yet, no fruits of victory
                seemed to justify such a heinous act. It seemed like a dilemma
                without solution. Bewildered, demoralized, disappointed with
                life, and dejected with the events, Arjun surrendered to the
                Supreme Lord and supplicated for guidance on what the proper
                course of action for him was. In this state of Arjun’s moral
                confusion, Shree Krishna set out to enlighten him.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
